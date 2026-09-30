"use client";

import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import Image from "next/image";
import {getProvider} from "@/components/providers/provider-select";
import {Button} from "@/components/ui/button";
import {Check, Copy, Pencil, Trash} from "lucide-react";
import {useState} from "react";
import ModelList from "@/components/providers/model-list";
import {templates} from "@/components/providers/provider-templates";
import { toast } from "sonner";
import {deleteSetting, updateSetting} from "@/app/actions/settings";
import {getPic} from "@/components/providers/pics";
import {useEndpointModels} from "@/components/providers/use-endpoint-models";
import EndpointInput from "@/components/providers/endpoint-input";

function ProviderText({ text, onChange, isReadOnly } : { text: string, onChange: (v: string) => void; isReadOnly: boolean }) {
    return (
        <Input readOnly={isReadOnly}
               onChange={(e) => onChange(e.target.value)}
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

    const [name, setName] = useState(data.name);
    const [endpoint, setEndpoint] = useState(data.endpoint ?? "");
    const [saving, setSaving] = useState(false);
    const liveModels = useEndpointModels(data.provider === "openai" ? endpoint : "")

    const [apiKey, setApiKey] = useState("");

    return (
        <div className="flex flex-col gap-2 bg-accent rounded-lg p-4">
            <div className="flex flex-row gap-2">
                {provider && <Image src={provider.icon} alt={provider.alt} width={provider.width} height={provider.height} className={provider.iconClass}/> }
                <ProviderText text={data.name} onChange={setName} isReadOnly={isReadOnly}/>

                <Button variant="ghost" disabled={!isReadOnly} onClick={async () => {
                    const res = await deleteSetting(data.id);
                    if(res.ok) toast.success(res.message);
                    else toast.error(res.message);
                }} className="rounded-lg cursor-pointer">
                    <Trash/>
                </Button>

                <Button variant="ghost" disabled={!isReadOnly} onClick={async () => {
                    try {
                        await navigator.clipboard.writeText(JSON.stringify(
                            { name: data.name, endpoint: data.endpoint ?? "", models: data.models ?? [] },
                        null, 4));

                        toast.success("Copied to clipboard");
                    } catch {
                        toast.error("Failed to copy to clipboard");
                    }
                }}
                        className="rounded-lg cursor-pointer">
                    <Copy/>
                </Button>

                <Button variant="ghost" disabled={saving} onClick={async () => {
                    if(isReadOnly) { setReadonly(false); return; }

                    const cleaned = [...new Set(models.map((m) => m.trim()).filter(Boolean))];
                    const removed = models.length - cleaned.length;

                    const original = { name: data.name, endpoint: data.endpoint ?? "", models: data.models ?? [] };
                    const current  = { name: name.trim(), endpoint: endpoint.trim(), models: cleaned };

                    if (JSON.stringify(original) === JSON.stringify(current) && !apiKey.trim()) {
                        setReadonly(true);
                        return;
                    }

                    if (removed > 0) {
                        setModels(cleaned);
                        toast.info(`Removed ${removed} duplicate or empty model${removed === 1 ? "" : "s"}`);
                    }

                    setSaving(true);
                    const res = await updateSetting(data.id, { ...current, apiKey: apiKey.trim() || undefined });
                    setSaving(false);

                    if (res.ok) {
                        toast.success(res.message);
                        setReadonly(true);
                        setApiKey("");
                    } else toast.error(res.message);
                }} className="rounded-lg cursor-pointer">{isReadOnly ? <Pencil/> : <Check/>}</Button>
            </div>

            { data.endpoint &&
                <div className="flex flex-row gap-2">
                    <Label className="md:text-base">Endpoint: </Label>
                    {isReadOnly
                        ? <ProviderText text={endpoint} onChange={setEndpoint} isReadOnly/>
                        : <EndpointInput value={endpoint} onChange={setEndpoint}/>}
                </div>
            }

            { data.endpoint && !isReadOnly &&
                <div className="flex flex-row gap-2">
                    <Label className="md:text-base whitespace-nowrap">API Key:</Label>
                    <Input type="password" onChange={(e) => setApiKey(e.target.value)} className="rounded-lg" placeholder="•••••••• (leave empty to keep)" autoComplete="new-password"/>
                </div>
            }

            { data.models &&
                <div className="flex flex-col gap-2">
                    <Label className="md:text-base">Model{models.length === 1 ? '' : 's'}:</Label>

                    { isReadOnly && models.map((model) => {
                        const corpo = getPic(model, data.provider === "openai");

                        return (
                            <div key={model} className="flex flex-row gap-2">
                                <Image src={corpo?.icon ?? "/icons/llm.svg"}
                                       alt={corpo?.alt ?? "Unknown"}
                                       className={corpo? corpo.className : "dark:invert"}
                                       width={20} height={20}/>
                                <Label className="text-lg">{model.split('/').pop()}</Label>
                            </div>
                        );
                    })}

                    { !isReadOnly &&
                        <div className="flex flex-col gap-2">
                            <ModelList models={models} templates={liveModels ?? templates[data.provider] ?? []} displayLabel={false} onChange={setModels} isEndpoint={data.provider === "openai"}/>
                        </div>
                    }
                </div>
            }
        </div>
    );
}