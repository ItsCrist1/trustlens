import { ProviderSelect } from "@/components/providers/provider-select";
import ProviderEntry from "@/components/providers/provider-entry";

export default function Home() {
    return (
        <div className="flex gap-10 p-4">
            <ProviderSelect/>
            <div className="w-100">
                <ProviderEntry name="this is the name" provider="openrouter" model={[ "model1", "model2" ]} endpoint="this is an endpoint"/>
            </div>
        </div>
    );
}