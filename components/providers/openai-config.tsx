import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ConfigProps } from "@/components/providers/provider-select";
import ModelList from "@/components/providers/model-list";
import {templates} from "@/components/providers/provider-templates";

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

            <ModelList models={settings.models} templates={templates["universal"]} displayLabel={true} onChange={(models) => onChange({ models })}/>
        </div>
    );
}