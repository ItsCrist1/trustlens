import { Input } from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import type { ConfigProps } from "@/components/provider-select";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import ModelList from "@/components/provider-configs/model-list";

const templates = [
    "anthropic/claude-sonnet-5", "anthropic/claude-opus-5.5", "anthropic/claude-fable-5.1", "openai/gpt-6-astra", "openai/gpt-6-sol",
    "openai/gpt-6-luna", "openai/gpt-5.6-sol", "openai/gpt-5.6-luna", "openai/gpt-5.5", "google/gemini-3.8-flash",
    "google/gemini-2.5-pro", "google/gemini-2.5-flash", "deepseek/deepseek-v4.1-flash", "deepseek/deepseek-v4-pro-0813", "deepseek/deepseek-v4-flash",
    "z-ai/glm-5.3-flash", "z-ai/glm-5.3", "z-ai/glm-5.2", "qwen/qwen3.8-max-0902", "qwen/qwen-2.5-coder-32b-instruct",
    "x-ai/grok-4.7", "x-ai/grok-4-fast", "moonshotai/kimi-k3", "tencent/hy4-preview", "tencent/hy3",
    "meta-llama/llama-3.3-70b-instruct", "meta-llama/llama-3.1-405b-instruct", "nvidia/nemotron-3-ultra-550b-a55b:free", "xiaomi/mimo-v2.5", "upstage/solar-pro4",
    "poolside/laguna-s-2.1", "minimax/minimax-m3", "meta/muse-spark-1.3-contributor", "mistralai/mistral-large", "mistralai/pixtral-large-2411",
    "cohere/command-r-plus", "microsoft/phi-4", "ai21/jamba-1-5-large", "amazon/nova-pro-v1", "liquid/lfm-40b",
    "nousresearch/hermes-3-llama-3.1-405b", "01-ai/yi-large", "databricks/dbrx-instruct", "perplex/sonar-reasoning", "cognitivecomputations/dolphin-mixtral-8x7b",
    "openchat/openchat-7b", "writer/palmyra-x-004", "allenai/olmo-7b-instruct", "togethercomputer/stripedhyena-nous-7b", "thinkingmachines/inkling-small:free"
];

export function OpenRouterConfig({settings, onChange}: ConfigProps) {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-3">
                <Label className="whitespace-nowrap">API Key:</Label>
                <Input type="password" className="rounded-lg" placeholder="OpenRouter API Key" value={settings.apiKey} onChange={(e) => onChange({ apiKey: e.target.value })}/>
            </div>

            <ModelList models={settings.models} templates={templates} onChange={(models) => onChange({ models })}/>
        </div>
    );
}