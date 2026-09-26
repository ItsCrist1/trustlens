"use client";

import { ComponentType, useState } from "react";
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { OpenRouterConfig } from "@/components/provider-configs/openrouter-config";
import {OpenAIConfig} from "@/components/provider-configs/openai-config";

const providers = [
    {
        value: "openrouter", name: "OpenRouter",
        icon: "/icons/openrouter.svg",
        width: 20, height: 20,
        iconClass: "", alt: "OpenRouter logo",
        config: OpenRouterConfig
    },

    {
        value: "openai", name: "OpenAI",
        icon: "/icons/openai.svg",
        width: 20, height: 20,
        iconClass: "invert dark:invert-0", alt: "OpenAI Logo",
        config: OpenAIConfig
    }
] satisfies { value: string; name: string; icon: string; width: number, height: number, iconClass: string; alt: string; config: ComponentType}[];

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

    const current = providers.find((p) => p.value === provider)!;
    const Config = current.config;

    return (
        <div className="flex w-80 flex-col gap-4">
            <Select value={provider} onValueChange={(v) => setProvider(v as string)}>
                <SelectTrigger className="w-full cursor-pointer">
                    <SelectValue>{(value: string) => <ProviderLabel value={value}/>}</SelectValue>
                </SelectTrigger>
                <SelectContent alignItemWithTrigger={false}>
                    {providers.map((p) => (
                        <SelectItem key={p.value} value={p.value} className="cursor-pointer">
                            <ProviderLabel value={p.value}/>
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Config/>
        </div>
    );
}