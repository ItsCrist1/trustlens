import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ConfigProps } from "@/components/providers/provider-select";
import ModelList from "@/components/providers/model-list";
import {templates} from "@/components/providers/provider-templates";
import {useEndpointModels} from "@/components/providers/use-endpoint-models";
import EndpointInput from "@/components/providers/endpoint-input";

export default function OpenAIConfig({settings, onChange, isLLM}: ConfigProps) {
    const liveModels = useEndpointModels(settings.endpoint, settings.apiKey);

    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-3">
                <Label className="whitespace-nowrap">Name:</Label>
                <Input type="text" className="rounded-lg" placeholder={settings.models.filter(Boolean).join(", ") || "Evaluated Models"} value={settings.name} onChange={(e) => onChange({ name: e.target.value })}/>
            </div>

            <div className="flex flex-row gap-3">
                <Label>Endpoint:</Label>
                <EndpointInput value={settings.endpoint} onChange={(v) => onChange({ endpoint: v })} isLLM={isLLM}/>
            </div>

            <div className="flex flex-row gap-3">
                <Label className="whitespace-nowrap">API Key:</Label>
                <Input type="password" className="rounded-lg" placeholder="sk-proj-abc123def..." value={settings.apiKey} onChange={(e) => onChange({ apiKey: e.target.value })}/>
            </div>

            <ModelList models={settings.models} templates={liveModels ?? templates[isLLM ? "openai" : "openai_sys1"]} displayLabel={true} onChange={(models) => onChange({ models })} isEndpoint={true}/>
        </div>
    );
}