"use client";

import { ComponentType, useState } from "react";
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { OpenRouterConfig } from "@/components/providers/openrouter-config";
import {OpenAIConfig} from "@/components/providers/openai-config";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import {createSetting} from "@/app/actions/settings";
import {toast} from "sonner";

export type ProviderSettings = { name: string, endpoint: string; apiKey: string; models: string[] };

export type ConfigProps = {
    settings: ProviderSettings;
    onChange: (patch: Partial<ProviderSettings>) => void;
};

const emptySettings: ProviderSettings = { name: "", endpoint: "", apiKey: "", models: [""] };

export const providers = [
    {
        value: "openrouter", name: "OpenRouter",
        icon: "/icons/openrouter.svg",
        width: 20, height: 20,
        iconClass: "", alt: "OpenRouter logo",
        config: OpenRouterConfig
    },

    {
        value: "openai", name: "OpenAI-Compatible",
        icon: "/icons/openai.svg",
        width: 20, height: 20,
        iconClass: "invert dark:invert-0", alt: "OpenAI Logo",
        config: OpenAIConfig
    }
] satisfies { value: string; name: string; icon: string; width: number, height: number, iconClass: string; alt: string; config: ComponentType<ConfigProps>}[];

export function getProvider(value: string) {
    return providers.find((p) => p.value === value);
}

function ProviderLabel({ value }: { value: string }) {
    const p = providers.find((p) => p.value === value);
    if (!p) return null;

    return (
        <span className="flex items-center gap-2">
      <Image src={p.icon} width={p.width} height={p.height} alt={p.alt} className={p.iconClass} />
            {p.name}
    </span>
    );
}

export function ProviderSelect() {
    const [provider, setProvider] = useState("openrouter");
    const [settings, setSettings] = useState<Record<string, ProviderSettings>>({});

    const [saving, setSaving] = useState(false);

    async function handleCreate() {
        setSaving(true)
        try {
            const res = await createSetting({ provider, ...(settings[provider] ?? emptySettings) });
            if(res.ok) {
                toast.success(res.message);
                setSettings((s) => ({ ...s, [provider]: { ...(s[provider] ?? emptySettings), name: "" } }))
            } else
                toast.error(res.message);
        } finally {
            setSaving(false);
        }
    }

    const current = providers.find((p) => p.value === provider)!;
    const Config = current.config;

    return (
        <div className="flex w-80 flex-col gap-4">
            <Select value={provider} onValueChange={(v) => setProvider(v as string)}>
                <SelectTrigger className="w-full rounded-lg cursor-pointer">
                    <SelectValue>{(value: string) => <ProviderLabel value={value}/>}</SelectValue>
                </SelectTrigger>
                <SelectContent alignItemWithTrigger={false}>
                    {providers.map((p) => (
                        <SelectItem key={p.value} value={p.value} className="rounded-lg cursor-pointer">
                            <ProviderLabel value={p.value}/>
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Config settings={settings[provider] ?? emptySettings} onChange={(patch) => setSettings((s) => ({
                ...s,
                [provider]: { ...s[provider] ?? emptySettings, ...patch}
            }))}/>

            <Button className="rounded-full cursor-pointer" onClick={handleCreate} disabled={(settings[provider] ?? emptySettings).apiKey === ""}><Plus/>Create</Button>
        </div>
    );
}