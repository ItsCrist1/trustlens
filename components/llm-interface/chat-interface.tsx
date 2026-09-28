"use client";

import { ChatMessage, ChatMsg } from "./chat-message";
import { useState } from "react";
import {Input} from "@/components/ui/input";
import {Copy, Loader2, Send} from "lucide-react";
import {Button} from "@/components/ui/button";
import {cn} from "cn";
import {Combobox, ComboboxContent, ComboboxInput, ComboboxItem, ComboboxList} from "@/components/ui/combobox";
import Image from "next/image";
import {getProvider} from "@/components/providers/provider-select";
import {corpos} from "@/components/providers/corpos";
import {InputGroupAddon} from "@/components/ui/input-group";

type ChatConfig = { id: string; name: string; provider: string; models: string[] };

export default function ChatInterface({ configs }: { configs: ChatConfig[] }) {
    const [messages, setMessages] = useState<ChatMsg[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");

    const [configId, setConfigId] = useState<string | null>(configs[0]?.id ?? null);
    const config = configs.find((c) => c.id === configId) ?? null;

    const [model, setModel] = useState<string | null>(configs[0]?.models[0] ?? null);

    const selectedProvider = config ? getProvider(config.provider) : undefined;
    const selectedCorpo = model ? corpos[model.split("/")[0]] : undefined;

    async function send() {
        const text = message.trim();
        if (!text || isLoading || !config) return;

        const next: ChatMsg[] = [...messages, { role: "user", content: text }];
        setMessages(next);
        setMessage("");
        setIsLoading(true);

        try {
            const res = await fetch("/api/llm", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ settingId: config?.id, messages: next }),
            });

            if(!res.ok || !res.body) {
                const data = await res.json();

                setMessages([...next, {
                    role: "assistant",
                    content: res.ok ? data.text : `${data.error ?? "Something went wrong"}`,
                }]);
                return;
            }

            setMessages([...next, { role: "assistant", content: "" }]);

            const reader = res.body.getReader();
            const decoder = new TextDecoder();
            let text = "";

            while (true) {
                const { done, value } = await reader.read();
                if(done) break;
                text += decoder.decode(value, { stream: true });
                setMessages([...next, { role: "assistant", content: text }]);
            }
        } catch {
            setMessages([...next, { role: "assistant", content: "Couldn't reach the server" }]);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex flex-col gap-4">
            {messages.map((m, i) => (
                <div key={i} className="flex flex-col gap-1">
                    <ChatMessage {...m}/>
                    <Button variant="ghost" size="icon-sm" className={cn(m.role === "user" ? "self-end" : "self-start", "cursor-pointer")}
                            onClick={() => navigator.clipboard.writeText(m.content)}>
                        <Copy/>
                    </Button>
                </div>
            ))}

            <form className="flex flex-row gap-4" onSubmit={(e) => { e.preventDefault(); send(); }}>
                <Input className="rounded-lg" placeholder="Enter your message"
                       value={message} onChange={(e) => setMessage(e.target.value)}/>

                <Button type="submit" disabled={isLoading || !message.trim()} className="cursor-pointer rounded-lg">
                    {isLoading ? <Loader2 className="animate-spin"/> : <Send/>}
                </Button>
            </form>

            <div className="flex row gap-4">
                <Combobox
                    items={configs}
                    value={config}
                    onValueChange={(c) => {
                        setConfigId(c?.id ?? null);
                        setModel(c?.models[0] ?? null);
                    }}
                    itemToStringLabel={(c) => c.name}>

                    <ComboboxInput className="rounded-lg w-48" placeholder="Pick a provider">
                        {selectedProvider && (
                            <InputGroupAddon align="inline-start">
                                <Image src={selectedProvider.icon} alt={selectedProvider.alt}
                                       width={16} height={16} className={selectedProvider.iconClass}/>
                            </InputGroupAddon>
                        )}
                    </ComboboxInput>

                    <ComboboxContent>
                        <ComboboxList>
                            {(c: ChatConfig) => {
                                const p = getProvider(c.provider);

                                return (
                                    <ComboboxItem key={c.id} value={c}>
                                        {p && <Image src={p.icon} alt={p.alt} width={16} height={16} className={p.iconClass}/>}
                                        {c.name}
                                    </ComboboxItem>
                                );
                            }}
                        </ComboboxList>
                    </ComboboxContent>
                </Combobox>

                <Combobox
                    items={config?.models ?? []}
                    value={model}
                    onValueChange={(m) => setModel(m)}
                    disabled={!config}>
                    <ComboboxInput className="rounded-lg w-56" placeholder="Pick a model">
                        {model && (
                            <InputGroupAddon align="inline-start">
                                <Image src={selectedCorpo?.icon ?? "/icons/unknown.svg"} alt={selectedCorpo?.alt ?? "Unknown"}
                                       width={16} height={16} className={selectedCorpo ? selectedCorpo.className : "dark:invert"}/>
                            </InputGroupAddon>
                        )}
                    </ComboboxInput>
                    <ComboboxContent>
                        <ComboboxList>
                            {(m: string) => {
                                const corpo = corpos[m.split('/')[0]];
                                return (
                                    <ComboboxItem key={m} value={m}>
                                        <Image src={corpo?.icon ?? "/icons/unknown.svg"} alt={corpo?.alt ?? "Unknown"}
                                               width={16} height={16} className={corpo ? corpo.className : "dark:invert"}/>
                                        {m}
                                    </ComboboxItem>
                                );
                            }}
                        </ComboboxList>
                    </ComboboxContent>
                </Combobox>
            </div>
        </div>
    );
}