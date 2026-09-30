import {Autocomplete} from "@base-ui/react";
import {ComboboxContent, ComboboxInput, ComboboxList} from "@/components/ui/combobox";
import {InputGroupAddon} from "@/components/ui/input-group";
import {pics_endpoints} from "@/components/providers/pics";
import {templates} from "@/components/providers/provider-templates";
import Image from "next/image";
import {cn} from "cn";

export default function EndpointInput({value, onChange}: { value: string, onChange: (v: string) => void }) {
    const host = (() => { try { return new URL(value.trim()).hostname; } catch { return ""; } })();
    const pic = pics_endpoints[host];

    return (
        <Autocomplete.Root value={value}
                           onValueChange={onChange}
                           items={templates["endpoints"]}>
            <ComboboxInput className="flex-1 rounded-lg" placeholder="https://api.openai.com/v1">
                {value && (
                    <InputGroupAddon align="inline-start">
                        <Image src={pic?.icon ?? "/icons/llm.svg"}
                               alt={pic?.alt ?? "Unknown"}
                               className={pic ? pic?.className : "dark:invert"}
                               width={16} height={16}/>
                    </InputGroupAddon>
                )}
            </ComboboxInput>

            <ComboboxContent className="rounded-lg">
                <ComboboxList>
                    {(template: string) => {
                        const endpoint = pics_endpoints[new URL(template).hostname];

                        return (
                          <Autocomplete.Item key={template} value={template}
                                             className="flex flex-row items-center gap-2 cursor-pointer rounded-md px-2 py-1.5 text-xs outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground">
                              <Image src={endpoint?.icon ?? "/icons/llm.svg"}
                                     alt={endpoint?.alt ?? "Unknown"}
                                     className={cn("w-4 h-4", endpoint ? endpoint.className : "dark:invert")}
                                     width={16} height={16}/>
                              {template}
                          </Autocomplete.Item>
                        );
                    }}
                </ComboboxList>
            </ComboboxContent>
        </Autocomplete.Root>
    );
}
