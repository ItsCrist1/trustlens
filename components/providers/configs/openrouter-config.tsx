import { Input } from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import type { ConfigProps } from "@/components/providers/provider-select";
import ModelList from "@/components/providers/model-list";
import { templates } from "@/components/providers/provider-templates";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {useEffect} from "react";

async function initiateOpenRouterLogin() {
    const verifier = crypto.randomUUID() + crypto.randomUUID();
    const hash = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier));
    const challenge = btoa(String.fromCharCode(...new Uint8Array(hash)))
        .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

    localStorage.setItem("or_verifier", verifier);

    const callback = `${location.origin}/openrouter-callback`;
    window.open(`https://openrouter.ai/auth?callback_url=${encodeURIComponent(callback)}&code_challenge=${challenge}&code_challenge_method=S256`, "_blank");
}

export function OpenRouterConfig({settings, onChange}: ConfigProps) {
    useEffect(() => {
        const ch = new BroadcastChannel("openrouter");
        ch.onmessage = (e) => onChange({ apiKey: e.data.key });
        return () => ch.close();
    }, []);

    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-3">
                <Label className="whitespace-nowrap">Name:</Label>
                <Input type="text" className="rounded-lg" placeholder={settings.models.filter(Boolean).map((s) => s.split('/').pop()).join(", ") || "Evaluated Models"} value={settings.name} onChange={(e) => onChange({ name: e.target.value })}/>
            </div>

            <div className="flex flex-row gap-3">
                <Label className="whitespace-nowrap">API Key:</Label>
                <Input type="password" className="rounded-lg" placeholder="OpenRouter API Key" value={settings.apiKey} onChange={(e) => onChange({ apiKey: e.target.value })}/>
                <Button className="rounded-lg cursor-pointer" onClick={initiateOpenRouterLogin}>
                    <Image src="/icons/openrouter.svg" alt="OpenRouter Logo" width={24} height={24}/>
                </Button>
            </div>

            <ModelList models={settings.models} templates={templates["openrouter"]} displayLabel={true} onChange={(models) => onChange({ models })} isEndpoint={false}/>
        </div>
    );
}