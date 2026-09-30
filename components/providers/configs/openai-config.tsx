import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ConfigProps } from "@/components/providers/provider-select";
import ModelList from "@/components/providers/model-list";
import {templates} from "@/components/providers/provider-templates";
import {useEffect, useState} from "react";
import {Autocomplete} from "@base-ui/react";
import {ComboboxContent, ComboboxInput, ComboboxList} from "@/components/ui/combobox";
import {InputGroupAddon} from "@/components/ui/input-group";
import {pics_endpoints} from "@/components/providers/pics";
import Image from "next/image";
import {cn} from "cn";

export default function OpenAIConfig({settings, onChange}: ConfigProps) {
    const [fetched, setFetched] = useState<{ endpoint: string; models: string[] | null } | null>(null);
    const endpoint = settings.endpoint.trim();
    const liveModels = fetched?.endpoint === endpoint ? fetched.models : null;

    useEffect(() => {
        if(!endpoint)
            return;
        const controller = new AbortController();
        const timer = setTimeout(async () => {
            try {
                const res = await fetch("/api/models", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ endpoint, apiKey: settings.apiKey }),
                    signal: controller.signal,
                });

                const {models} = await res.json();
                setFetched({endpoint, models});
            } catch {
                if(!controller.signal.aborted)
                    setFetched({endpoint, models: null});
            }
        }, 500);

        return () => { clearTimeout(timer); controller.abort(); }
    }, [endpoint, settings.apiKey])

    const host = (() => { try { return new URL(endpoint).hostname; } catch { return ""; } })();
    const pic = pics_endpoints[host];

    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-3">
                <Label className="whitespace-nowrap">Name:</Label>
                <Input type="text" className="rounded-lg" placeholder={settings.models.filter(Boolean).join(", ") || "Evaluated Models"} value={settings.name} onChange={(e) => onChange({ name: e.target.value })}/>
            </div>

            <div className="flex flex-row gap-3">
                <Label>Endpoint:</Label>
                <Autocomplete.Root value={settings.endpoint}
                                   onValueChange={(value) => onChange({ endpoint: value })}
                                   items={templates["endpoints"]}>
                    <ComboboxInput className="flex-1 rounded-lg" placeholder="https://api.openai.com/v1">
                        {settings.endpoint && (
                            <InputGroupAddon align="inline-start">
                                <Image src={pic?.icon ?? "/icons/llm.svg"}
                                       alt={pic?.alt ?? "Unknown"}
                                       className={pic ? pic?.className : "dark:invert"}
                                       width={16} height={16}/>
                            </InputGroupAddon>
                        )}
                    </ComboboxInput>

                    <ComboboxContent className="rounded-lg">
                        <ComboboxList>
                            {(template: string) => {
                                const endpoint = pics_endpoints[new URL(template).hostname];

                                return (
                                  <Autocomplete.Item key={template} value={template}
                                                     className="flex flex-row items-center gap-2 cursor-pointer rounded-md px-2 py-1.5 text-xs outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground">
                                      <Image src={endpoint?.icon ?? "/icons/llm.svg"}
                                             alt={endpoint?.alt ?? "Unknown"}
                                             className={cn("w-4 h-4", endpoint ? endpoint.className : "dark:invert")}
                                             width={16} height={16}/>
                                      {template}
                                  </Autocomplete.Item>
                                );
                            }}
                        </ComboboxList>
                    </ComboboxContent>
                </Autocomplete.Root>
            </div>

            <div className="flex flex-row gap-3">
                <Label className="whitespace-nowrap">API Key:</Label>
                <Input type="password" className="rounded-lg" placeholder="sk-proj-abc123def..." value={settings.apiKey} onChange={(e) => onChange({ apiKey: e.target.value })}/>
            </div>

            <ModelList models={settings.models} templates={liveModels ?? templates["openai"]} displayLabel={true} onChange={(models) => onChange({ models })} isEndpoint={true}/>
        </div>
    );
}