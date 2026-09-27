"use client";

import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import Image from "next/image";
import {getProvider} from "@/components/providers/provider-select";
import {Button} from "@/components/ui/button";
import {Pencil} from "lucide-react";
import {useEffect, useRef, useState} from "react";
import ModelList from "@/components/providers/model-list";
import {templates} from "@/components/providers/provider-templates";

type Corpo = { icon: string; alt: string, className?: string };

const corpos: Record<string, Corpo> = {
    openai: { icon: "/icons/openai.svg", alt: "OpenAI logo", className: "invert dark:invert-0" },
    anthropic: { icon: "/icons/anthropic.svg", alt: "Anthropic logo" },
};

function ProviderText({ text } : { text: string }) {
    const [isReadonly, setReadonly] = useState(true);
    const inpRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(!isReadonly)
            inpRef.current?.focus();
    }, [isReadonly]);

    return (
        <div className="flex flex-1 flex-row items-center gap-2">
            <Input ref={inpRef}
                   readOnly={isReadonly}
                   defaultValue={text}
                   autoComplete="off"
                   data-protonpass-ignore="true"
                   data-1p-ignore
                   data-lpignore="true"
                   data-bwignore
                   className="dark:bg-transparent read-only:caret-transparent read-only:cursor-default read-only:focus-visible:ring-0 read-only:focus-visible:border-transparent border-0 px-0 text-foreground md:text-base"/>

            <Button onClick={() => setReadonly((r) => !r)} className="rounded-lg"><Pencil/></Button>
        </div>
    );
}

export default function ProviderEntry(data: {
    name: string; provider: string; endpoint?: string; models?: string[]
}) {
    const provider = getProvider(data.provider);
    const [isReadOnly, setReadonly] = useState(true);
    const [models, setModels] = useState(data.models ?? []);

    return (
        <div className="flex flex-col gap-2 bg-accent rounded-lg p-4 w-full">
            <div className="flex flex-row gap-2">
                {provider && <Image src={provider.icon} alt={provider.alt} width={provider.width} height={provider.height} className={provider.iconClass}/> }
                <ProviderText text={data.name}/>
            </div>

            { data.endpoint &&
                <div className="flex flex-row gap-2">
                    <Label className="md:text-base">Endpoint: </Label>
                    <ProviderText text={data.endpoint}/>
                </div>
            }

            { data.models &&
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2">
                        <Label className="md:text-base">Models: </Label>
                        <Button onClick={() => setReadonly((r) => !r)} className="ml-auto rounded-lg"><Pencil/></Button>
                    </div>

                    { isReadOnly && data.models?.map((model) => {
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
                            <ModelList models={data.models} templates={templates[data.provider]} onChange={setModels}/>
                        </div>
                    }
                </div>
            }
        </div>
    );
}