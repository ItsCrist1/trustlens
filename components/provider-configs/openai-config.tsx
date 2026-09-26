import { Input } from "@/components/ui/input";
import {
    Combobox,
    ComboboxContent,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox";
import {useState} from "react";

type OpenAIConfigProps = {

}

const templates = [
    "gpt-6-sol",
    "gpt-6-luna",
    "gpt-6-astra",
    "gpt-5.6-sol",
    "gpt-5.6-terra",
    "gpt-5.6-luna",
    "gpt-5.5",
    "gpt-5.5-pro",
    "gpt-5.4",
    "gpt-5.4-mini",
    "gpt-5.4-nano",
    "gpt-5.3",
    "gpt-5.2",
    "gpt-5.1",
    "gpt-5.0",
    "gpt-4.5-preview",
    "gpt-4.1",
    "gpt-4.1-mini",
    "gpt-4.1-nano",
    "gpt-4o-mini"
];

export function OpenAIConfig({}: OpenAIConfigProps) {
    const [model, setModel] = useState("");

    return (
        <div>
            <Input type="text" className="rounded-lg" placeholder="OpenAI API Key"/>

            <Combobox
                inputValue={model}
                onInputValueChange={setModel}
                items={templates}
                openOnInputClick={false}>
                <ComboboxInput className="rounded-lg" placeholder="Enter or choose a model" />

                <ComboboxContent className="rounded-lg">
                    <ComboboxList>
                        {(template: string) => (
                            <ComboboxItem key={template} value={template}>
                                {template}
                            </ComboboxItem>
                        )}
                    </ComboboxList>
                </ComboboxContent>
            </Combobox>
        </div>
    );
}