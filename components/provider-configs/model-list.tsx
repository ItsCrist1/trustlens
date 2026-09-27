import {
    Combobox,
    ComboboxContent,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox";
import {Button} from "@/components/ui/button";
import {Minus, Plus} from "lucide-react";
import {Label} from "@/components/ui/label";

function ModelRow({value, onChange, onRemove, isAlone, templates}: { value: string, onChange: (v: string) => void; onRemove: () => void, isAlone: boolean, templates: string[] }) {
    return (
        <div className="flex flex-row gap-3">
            <Combobox
                inputValue={value}
                onInputValueChange={onChange}
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

            <Button className="rounded-lg" onClick={onRemove} disabled={isAlone}><Minus/></Button>
        </div>
    );
}

export default function ModelList({ models, templates, onChange }: {
    models: string[];
    templates: string[];
    onChange: (models: string[]) => void;
}) {
    return (
        <>
            <Label className="whitespace-nowrap">{(models.length === 1 ? "Model" : "Models") + ':'}</Label>

            {models.map((m, i) => (
                <ModelRow
                    key={i}
                    value={m}
                    onChange={(v) => onChange(models.map((x, j) => (j === i ? v : x)))}
                    onRemove={() => onChange(models.filter((_, j) => j !== i))}
                    isAlone={models.length === 1}
                    templates={templates}
                />
            ))}

            <Button className="rounded-lg" onClick={() => onChange([...models, ""])}>
                <Plus/> Add Model
            </Button>
        </>
    );
}
