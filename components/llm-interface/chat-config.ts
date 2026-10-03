import {useState} from "react";

export type ChatConfig = {
    id: string; name: string; provider: string; models: string[], kind: string;
};

export default function useModelSelection(configs: ChatConfig[]) {
    const [configId, setConfigId] = useState<string | null>(null);
    const config = configs.find((c) => c.id === configId) ?? configs[0] ?? null;

    const [pickedModel, setModel] = useState<string | null>(null);
    const model = pickedModel && config?.models.includes(pickedModel) ? pickedModel : config?.models[0] ?? null;

    return { configs, config, setConfigId, model, setModel };
}