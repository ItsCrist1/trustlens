import {
    ComboboxContent,
    ComboboxInput,
    ComboboxList,
} from "@/components/ui/combobox";
import {Button} from "@/components/ui/button";
import {Minus, Plus} from "lucide-react";
import {Label} from "@/components/ui/label";
import Image from "next/image";
import {getPic, Pic, pics_corpos, pics_endpoints, pics_models} from "@/components/providers/pics";
import {cn} from "cn";
import {Autocomplete} from "@base-ui/react";
import {InputGroupAddon} from "@/components/ui/input-group";

function ModelRow({value, onChange, onRemove, isAlone, templates, isEndpoint}: { value: string, onChange: (v: string) => void; onRemove: () => void, isAlone: boolean, templates: string[], isEndpoint: boolean}) {
    const source = isEndpoint ? pics_endpoints : pics_corpos;
    const pic = getPic(value, isEndpoint);

    return (
        <div className="flex flex-row gap-3">
            <Autocomplete.Root
                value={value}
                onValueChange={onChange}
                items={templates}>
                <ComboboxInput className="flex-1 rounded-lg" placeholder="Enter or choose a model">
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
                            const corpo = getPic(template, isEndpoint);

                            return (
                                <Autocomplete.Item key={template} value={template}
                                                   className="flex flex-row items-center gap-2 cursor-pointer rounded-md px-2 py-1.5 text-xs outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground">
                                    <Image src={corpo?.icon ?? "/icons/llm.svg"}
                                           alt={corpo?.alt ?? "Unknown"}
                                           className={cn("mr-2", corpo ? corpo.className : "dark:invert")}
                                           width={16} height={16}/>
                                    {template}
                                </Autocomplete.Item>
                            );
                        }}
                    </ComboboxList>
                </ComboboxContent>
            </Autocomplete.Root>

            <Button className="rounded-lg cursor-pointer" onClick={onRemove} disabled={isAlone}><Minus/></Button>
        </div>
    );
}

export default function ModelList({ models, templates, onChange, displayLabel, isEndpoint }: {
    models: string[];
    templates: string[];
    onChange: (models: string[]) => void;
    displayLabel: boolean;
    isEndpoint: boolean;
}) {
    return (
        <>
            <div className="flex items-center gap-2">
                {displayLabel && <Label className="whitespace-nowrap">{(models.length === 1 ? "Model" : "Models") + ':'}</Label> }
                <Button className="rounded-lg ml-auto cursor-pointer" onClick={() => onChange([...models, ""])}>
                    <Plus/>
                </Button>
            </div>

            {models.map((m, i) => (
                <ModelRow
                    key={i}
                    value={m}
                    onChange={(v) => onChange(models.map((x, j) => (j === i ? v : x)))}
                    onRemove={() => onChange(models.filter((_, j) => j !== i))}
                    isAlone={models.length === 1}
                    templates={templates}
                    isEndpoint={isEndpoint}/>
            ))}
        </>
    );
}
