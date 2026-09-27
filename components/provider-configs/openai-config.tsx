import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ConfigProps } from "@/components/provider-select";
import ModelList from "@/components/provider-configs/model-list";

const templates = [
    "gpt-6-sol",
    "gpt-6-luna",
    "gpt-6-astra",
    "gpt-5.6-sol",
    "gpt-5.6-terra",
    "gpt-5.6-luna",
    "gpt-5.5",
    "gpt-5.5-pro",
    "gpt-5.4",
    "gpt-5.4-mini",
    "gpt-5.4-nano",
    "gpt-5.3",
    "gpt-5.2",
    "gpt-5.1",
    "gpt-5.0",
    "gpt-4.5-preview",
    "gpt-4.1",
    "gpt-4.1-mini",
    "gpt-4.1-nano",
    "gpt-4o-mini"
];

export function OpenAIConfig({settings, onChange}: ConfigProps) {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-3">
                <Label className="whitespace-nowrap">Name:</Label>
                <Input type="text" className="rounded-lg" placeholder={settings.models.join(", ") || "Evaluated Models"} value={settings.name} onChange={(e) => onChange({ name: e.target.value })}/>
            </div>

            <div className="flex flex-row gap-3">
                <Label>Endpoint:</Label>
                <Input type="text" className="rounded-lg" placeholder="https://api.openai.com/v1" value={settings.endpoint} onChange={(e) => onChange({ endpoint: e.target.value })}/>
            </div>

            <div className="flex flex-row gap-3">
                <Label className="whitespace-nowrap">API Key:</Label>
                <Input type="password" className="rounded-lg" placeholder="sk-proj-abc123def..." value={settings.apiKey} onChange={(e) => onChange({ apiKey: e.target.value })}/>
            </div>

            <ModelList models={settings.models} templates={templates} onChange={(models) => onChange({ models })}/>
        </div>
    );
}