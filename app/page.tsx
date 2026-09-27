import { ProviderSelect } from "@/components/providers/provider-select";
import ProviderEntryList from "@/components/providers/providers-entry-list";

export default function Home() {
    return (
        <div className="flex gap-10 p-4">
            <ProviderSelect/>
            <ProviderEntryList/>
        </div>
    );
}