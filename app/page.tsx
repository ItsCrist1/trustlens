import { ProviderSelect } from "@/components/providers/provider-select";
import ProviderEntryList from "@/components/providers/providers-entry-list";
import ChatInterface from "@/components/llm-interface/chat-interface";
import {listSettings} from "@/app/actions/settings";
import {auth} from "@/auth";
import EvaluationEntry from "@/components/evaluation/evaluation-entry";

export default async function Home() {
    const session = await auth();
    const list = session?.user ? await listSettings() : [];
    const configs = list.map(({ id, name, provider, models, kind }) => ({ id, name, provider, models, kind }));

    return (
        <div className="flex flex-row gap-10 p-4">
            <ProviderSelect/>
            <ProviderEntryList list={list}/>
            <ChatInterface configs={configs}/>
            { /* <EvaluationEntry configs={configs}/> */ }
        </div>
    );
}
