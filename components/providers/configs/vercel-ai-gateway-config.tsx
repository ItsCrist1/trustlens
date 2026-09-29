import { Input } from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import type { ConfigProps } from "@/components/providers/provider-select";
import ModelList from "@/components/providers/model-list";
import { templates } from "@/components/providers/provider-templates";

export function VercelAIGatewayConfig({settings, onChange}: ConfigProps) {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-3">
                <Label className="whitespace-nowrap">Name:</Label>
                <Input type="text" className="rounded-lg" placeholder={settings.models.filter(Boolean).map((s) => s.split('/').pop()).join(", ") || "Evaluated Models"} value={settings.name} onChange={(e) => onChange({ name: e.target.value })}/>
            </div>

            <div className="flex flex-row gap-3">
                <Label className="whitespace-nowrap">API Key:</Label>
                <Input type="password" className="rounded-lg" placeholder="Vercel AI Gateway API Key" value={settings.apiKey} onChange={(e) => onChange({ apiKey: e.target.value })}/>
            </div>

            <ModelList models={settings.models} templates={templates["vercel-ai-gateway"]} displayLabel={true} onChange={(models) => onChange({ models })}/>
        </div>
    );
}