import { Input } from "@/components/ui/input";
import {
    Combobox,
    ComboboxContent,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox";
import {useState} from "react";
import {Label} from "@/components/ui/label";
import type { ConfigProps } from "@/components/provider-select";

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

export function OpenAIConfig({settings, onChange}: ConfigProps) {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-3">
                <Label>Endpoint:</Label>
                <Input type="text" className="rounded-lg" placeholder="/api.openai.com/v1/chat/completions/" value={settings.endpoint} onChange={(e) => onChange({ apiKey: e.target.value })}/>
            </div>

            <div className="flex flex-row gap-3">
                <Label className="whitespace-nowrap">API Key:</Label>
                <Input type="text" className="rounded-lg" placeholder="sk-proj-abc123def..." value={settings.apiKey} onChange={(e) => onChange({ endpoint: e.target.value })}/>
            </div>

            <div className="flex flex-row gap-3">
                <Label className="whitespace-nowrap">Model:</Label>

                <Combobox
                    inputValue={settings.model}
                    onInputValueChange={(model) => onChange({ model })}
                    items={templates}
                    openOnInputClick={false}>
                    <ComboboxInput className="flex-1 rounded-lg" placeholder="Enter or choose a model" />

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
        </div>
    );
}