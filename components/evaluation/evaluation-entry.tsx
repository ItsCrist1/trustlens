"use client";

import useModelSelection, { type ChatConfig } from "@/components/llm-interface/chat-config";
import ModelPicker from "@/components/llm-interface/model-picker";
import {Label} from "@/components/ui/label";

export default function EvaluationEntry({configs}: {configs: ChatConfig[]}) {
    const llmConfigs = configs.filter((c) => c.kind === "llm");

    const victim = useModelSelection(llmConfigs);
    const attacker = useModelSelection(llmConfigs);
    const evaluator = useModelSelection(configs);

    return (
        <div className="flex flex-col gap-2 bg-accent p-4 rounded-lg">
            <div className="flex flex-row gap-2">
                <Label>Tested Model:</Label>
                <ModelPicker {...victim}/>
            </div>

            <div className="flex flex-row gap-2">
                <Label>Attacker Model:</Label>
                <ModelPicker {...attacker}/>
            </div>

            <div className="flex flex-row gap-2">
                <Label>Evaluator Model:</Label>
                <ModelPicker {...evaluator}/>
            </div>
        </div>
    );
}