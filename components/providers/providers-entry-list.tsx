import {listSettings} from "@/app/actions/settings";
import ProviderEntry from "@/components/providers/provider-entry";

export default async function ProvidersEntryList() {
    const list = await listSettings();

    return (
        <div className="flex flex-col gap-4">
            { list.map((item) => (
                <ProviderEntry key={item.id}
                               id={item.id}
                               name={item.name}
                               provider={item.provider}
                               endpoint={item.endpoint}
                               models={item.models}/>
            ))}
        </div>
    );
}