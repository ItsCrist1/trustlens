import type {listSettings} from "@/app/actions/settings";
import ProviderEntry from "@/components/providers/provider-entry";

type Setting = Awaited<ReturnType<typeof listSettings>>[number];

export default function ProvidersEntryList({ list }: { list: Setting[]}) {
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
