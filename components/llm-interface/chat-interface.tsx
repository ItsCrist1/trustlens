"use client";

import { ChatMessage, ChatMsg } from "./chat-message";
import { useRef, useState } from "react";
import {Textarea} from "@/components/ui/textarea";
import {Copy, Send, Square} from "lucide-react";
import {Button} from "@/components/ui/button";
import {cn} from "cn";
import ModelPicker from "@/components/llm-interface/model-picker";
import useModelSelection, { type ChatConfig } from "@/components/llm-interface/chat-config";

export default function ChatInterface({ configs }: { configs: ChatConfig[] }) {
    const [messages, setMessages] = useState<ChatMsg[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");

    const selection = useModelSelection(configs);

    const stopRef = useRef<AbortController | null>(null);

    async function send() {
        const text = message.trim();
        if (!text || isLoading || !selection.config) return;

        const next: ChatMsg[] = [...messages, { role: "user", content: text }];
        setMessages(next);
        setMessage("");
        setIsLoading(true);

        const controller = new AbortController();
        stopRef.current = controller;

        try {
            const res = await fetch("/api/llm", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ settingId: selection.config?.id, model: selection.model, messages: next }),
                signal: controller.signal
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
            if(!controller.signal.aborted)
                setMessages([...next, { role: "assistant", content: "Couldn't reach the server" }]);
        } finally {
            stopRef.current = null;
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

            <form className="flex flex-row gap-4" onSubmit={(e) => { e.preventDefault(); isLoading ? stopRef.current?.abort() : send(); }}>
                <Textarea className="rounded-lg min-h-0 max-h-48 resize-none" rows={1} placeholder="Enter your message"
                       value={message} onChange={(e) => setMessage(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" && e.ctrlKey && !e.nativeEvent.isComposing) {
                                    e.preventDefault();
                                    e.currentTarget.form?.requestSubmit();
                                }}} />

                <Button type="submit" disabled={!message.trim() && !isLoading} className="cursor-pointer rounded-lg">
                    {isLoading ? <Square/> : <Send/>}
                </Button>
            </form>

            <ModelPicker {...selection}/>
        </div>
    );
}