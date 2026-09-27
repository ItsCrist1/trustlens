import { ProviderSelect } from "@/components/providers/provider-select";
import ProviderEntryList from "@/components/providers/providers-entry-list";
import ChatInterface from "@/components/llm-interface/chat-interface";
import {listSettings} from "@/app/actions/settings";
import {auth} from "@/auth";

export default async function Home() {
    const session = await auth();
    const configs = session?.user
        ? (await listSettings()).map(({ id, name, provider, models }) => ({ id, name, provider, models }))
        : [];

    return (
        <div className="flex gap-10 p-4">
            <ProviderSelect/>
            <ProviderEntryList/>
            <ChatInterface configs={configs}/>
        </div>
    );
}