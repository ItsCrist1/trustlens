import {Combobox, ComboboxContent, ComboboxInput, ComboboxItem, ComboboxList} from "@/components/ui/combobox";
import {InputGroupAddon} from "@/components/ui/input-group";
import Image from "next/image";
import {getProvider} from "@/components/providers/provider-select";
import {pics_corpos} from "@/components/providers/pics";
import type {ChatConfig} from "@/components/llm-interface/chat-config";

type ModelConfig = {
    configs: ChatConfig[],
    config: ChatConfig | null,
    setConfigId: (id: string | null) => void,
    model: string | null,
    setModel: (model: string | null) => void
};

export default function ModelPicker({ configs, config, setConfigId, model, setModel }: ModelConfig) {
    const selectedProvider = config ? getProvider(config.provider) : undefined;
    const selectedCorpo = model ? pics_corpos[model.split("/")[0]] : undefined;

    return (
        <div className="flex flex-row gap-4">
            <Combobox
                items={configs}
                value={config}
                onValueChange={(c) => {
                    setConfigId(c?.id ?? null);
                    setModel(null);
                }}
                itemToStringLabel={(c) => c.name}>

                <ComboboxInput className="rounded-lg w-48" placeholder="Pick a provider">
                    {selectedProvider && (
                        <InputGroupAddon align="inline-start">
                            <Image src={selectedProvider.icon} alt={selectedProvider.alt}
                                   width={16} height={16} className={selectedProvider.iconClass}/>
                        </InputGroupAddon>
                    )}
                </ComboboxInput>

                <ComboboxContent>
                    <ComboboxList>
                        {(c: ChatConfig) => {
                            const p = getProvider(c.provider);

                            return (
                                <ComboboxItem key={c.id} value={c}>
                                    {p && <Image src={p.icon} alt={p.alt} width={16} height={16} className={p.iconClass}/>}
                                    {c.name}
                                </ComboboxItem>
                            );
                        }}
                    </ComboboxList>
                </ComboboxContent>
            </Combobox>

            <Combobox
                items={config?.models ?? []}
                value={model}
                onValueChange={(m) => setModel(m)}
                disabled={!config}>
                <ComboboxInput className="rounded-lg w-56" placeholder="Pick a model">
                    {model && (
                        <InputGroupAddon align="inline-start">
                            <Image src={selectedCorpo?.icon ?? "/icons/llm.svg"} alt={selectedCorpo?.alt ?? "Unknown"}
                                   width={16} height={16} className={selectedCorpo ? selectedCorpo.className : "dark:invert"}/>
                        </InputGroupAddon>
                    )}
                </ComboboxInput>

                <ComboboxContent>
                    <ComboboxList>
                        {(m: string) => {
                            const corpo = pics_corpos[m.split('/')[0]];
                            return (
                                <ComboboxItem key={m} value={m}>
                                    <Image src={corpo?.icon ?? "/icons/llm.svg"} alt={corpo?.alt ?? "Unknown"}
                                           width={16} height={16} className={corpo ? corpo.className : "dark:invert"}/>
                                    {m}
                                </ComboboxItem>
                            );
                        }}
                    </ComboboxList>
                </ComboboxContent>
            </Combobox>
        </div>
    );
}