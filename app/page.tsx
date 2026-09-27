import { ProviderSelect } from "@/components/providers/provider-select";
import ProviderEntry from "@/components/providers/provider-entry";

export default function Home() {
    return (
        <div className="flex gap-10 p-4">
            <ProviderSelect/>
            <div className="w-200 flex gap-10">
                <ProviderEntry name="this is the name" provider="openrouter" models={[ "openai/gpt-69", "anthropic/claude-fable-59238" ]} endpoint="this is an endpoint"/>
                <ProviderEntry name="gpt" provider="openai" models={[ "gpt-69432", "gpt-100" ]} endpoint="this is an endpoint"/>
            </div>
        </div>
    );
}