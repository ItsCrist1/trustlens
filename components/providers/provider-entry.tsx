"use client";

import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import Image from "next/image";
import {getProvider} from "@/components/providers/provider-select";
import {Button} from "@/components/ui/button";
import {Check, Pencil, Trash} from "lucide-react";
import {useState} from "react";
import ModelList from "@/components/providers/model-list";
import {templates} from "@/components/providers/provider-templates";
import { toast } from "sonner";
import {deleteSetting} from "@/app/actions/settings";

type Corpo = { icon: string; alt: string, className?: string };

const corpos: Record<string, Corpo> = {
    openai: { icon: "/icons/openai.svg", alt: "OpenAI logo", className: "invert dark:invert-0" },
    anthropic: { icon: "/icons/anthropic.svg", alt: "Anthropic logo" },
    google: { icon: "/icons/google.svg", alt: "Google logo" },
    "z-ai": { icon: "/icons/zai.svg", alt: "ZAI logo", className: "dark:invert" },
    deepseek: { icon: "/icons/deepseek.svg", alt: "DeepSeek logo" },
    qwen: { icon: "/icons/qwen.svg", alt: "Qwen logo" },
    "x-ai": { icon: "/icons/xai.svg", alt: "XAI logo" },
    meta: { icon: "/icons/meta.svg", alt: "Meta logo" },
    bytedance: { icon: "/icons/bytedance.svg", alt: "Bytedance logo" }
};

function ProviderText({ text, isReadOnly } : { text: string, isReadOnly: boolean }) {
    return (
        <Input readOnly={isReadOnly}
               defaultValue={text}
               autoComplete="off"
               data-protonpass-ignore="true"
               data-1p-ignore
               data-lpignore="true"
               data-bwignore
               className="dark:bg-transparent read-only:caret-transparent read-only:cursor-default read-only:focus-visible:ring-0 read-only:focus-visible:border-transparent border-0 px-0 text-foreground md:text-base"/>
    );
}

export default function ProviderEntry(data: {
    id: string, name: string; provider: string; endpoint?: string; models?: string[]
}) {
    const provider = getProvider(data.provider);
    const [isReadOnly, setReadonly] = useState(true);
    const [models, setModels] = useState(data.models ?? []);

    return (
        <div className="flex flex-col gap-2 bg-accent rounded-lg p-4 w-full">
            <div className="flex flex-row gap-2">
                {provider && <Image src={provider.icon} alt={provider.alt} width={provider.width} height={provider.height} className={provider.iconClass}/> }
                <ProviderText text={data.name} isReadOnly={isReadOnly}/>

                <Button disabled={!isReadOnly} onClick={async () => {
                    const res = await deleteSetting(data.id);
                    if (res.ok) toast.success(res.message);
                    else toast.error(res.message);
                }}>
                    <Trash/>
                </Button>

                <Button onClick={() => {
                    if (!isReadOnly) {
                        const cleaned = [...new Set(models.map((m) => m.trim()).filter(Boolean))];
                        const removed = models.length - cleaned.length;

                        if (removed > 0) {
                            setModels(cleaned);
                            toast.info(`Removed ${removed} duplicate or empty model${removed === 1 ? "" : "s"}`);
                        }
                    }
                    setReadonly((r) => !r);
                }} className="ml-auto rounded-lg">{isReadOnly ? <Pencil/> : <Check/>}</Button>
            </div>

            { data.endpoint &&
                <div className="flex flex-row gap-2">
                    <Label className="md:text-base">Endpoint: </Label>
                    <ProviderText text={data.endpoint} isReadOnly={isReadOnly}/>
                </div>
            }

            { data.models &&
                <div className="flex flex-col gap-2">
                    <Label className="md:text-base">Models: </Label>

                    { isReadOnly && models.map((model) => {
                        const corpo = corpos[data.provider === "openai" ? "openai" : model.split('/')[0]];

                        return (
                            <div key={model} className="flex flex-row gap-2">
                                <Image src={corpo?.icon ?? "/icons/unknown.svg"}
                                       alt={corpo?.alt ?? "Unknown"}
                                       className={corpo? corpo.className : "dark:invert"}
                                       width={20} height={20}/>
                                <Label className="text-lg">{data.provider === "openai" ? model : model.split('/')[1]}</Label>
                            </div>
                        );
                    })}

                    { !isReadOnly &&
                        <div className="flex flex-col gap-2">
                            <ModelList models={models} templates={templates[data.provider] ?? []} onChange={setModels}/>
                        </div>
                    }
                </div>
            }
        </div>
    );
}