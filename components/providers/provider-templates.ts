export const templates: Record<string, string[]> = {
    universal: [
        // openai
        "openai/gpt-6-astra",
        "openai/gpt-6-sol",
        "openai/gpt-6-luna",
        "openai/gpt-5.6-sol",
        "openai/gpt-5.6-terra",
        "openai/gpt-5.6-luna",
        "openai/gpt-5.5",

        // anthropic
        "anthropic/claude-opus-5-5",
        "anthropic/claude-fable-5-1",
        "anthropic/claude-sonnet-5",
        "anthropic/claude-opus-5",
        "anthropic/claude-opus-4-8",
        "anthropic/claude-haiku-4-5",
        "anthropic/claude-sonnet-4-6",

        // google
        "google/gemini-3.8-flash",
        "google/gemini-3.8-live",
        "google/gemini-3.1-pro-preview",
        "google/gemini-3-flash-preview",
        "google/gemini-3.7-flash",
        "google/gemini-3.5-flash",
        "google/gemini-2.5-pro",

        // z-ai
        "z-ai/glm-5.3",
        "z-ai/glm-5.3-flash",
        "z-ai/glm-5.3-flashx",
        "z-ai/glm-5.2",
        "z-ai/glm-5.1",
        "z-ai/glm-5",
        "z-ai/glm-4.7",

        // deepseek
        "deepseek/deepseek-flash",
        "deepseek/deepseek-v4-pro",
        "deepseek/deepseek-v4.1-flash",

        // qwen
        "qwen/qwen3.8-max",
        "qwen/qwen3.8-flash",
        "qwen/qwen3.7-plus",
        "qwen/qwen3.7-flash",
        "qwen/qwen3.8-omni-flash",
        "qwen/qwen3.5-plus",

        // x-ai
        "x-ai/grok-4.7",
        "x-ai/grok-4.6",
        "x-ai/grok-4.5",
        "x-ai/grok-4.20",
        "x-ai/grok-4.3",
        "x-ai/grok-4-fast-reasoning",
        "x-ai/grok-code-fast-1",

        // meta / meta-llama
        "meta/muse-spark-1.3",
        "meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8",
        "meta-llama/Llama-4-Scout-17B-16E-Instruct-FP8",
        "meta-llama/Llama-3.3-70B-Instruct",
        "meta-llama/Llama-3.3-8B-Instruct",

        // bytedance
        "bytedance/doubao-seed-2-1-pro-260915",
        "bytedance/doubao-seed-2-1-turbo-260628",
        "bytedance/doubao-seed-2-0-lite-260428",
        "bytedance/doubao-seed-2-0-mini-260428",
        "bytedance/doubao-seed-evolving",

        // amazon
        "amazon/amazon.nova-premier-v1:0",
        "amazon/amazon.nova-pro-v1:0",
        "amazon/amazon.nova-lite-v1:0",
        "amazon/amazon.nova-micro-v1:0",
        "amazon/nova-2-lite-v1",
        "amazon/nova-2-sonic-v1",

        // mistralai
        "mistralai/mistral-medium-3-5",
        "mistralai/mistral-large-3",
        "mistralai/mistral-small-4",
        "mistralai/ministral-3-14b",
        "mistralai/ministral-3-8b",
        "mistralai/codestral",
        "mistralai/mistral-small-2603",

        // moonshotai
        "moonshotai/kimi-k3",
        "moonshotai/kimi-k2.7-code",
        "moonshotai/kimi-k2.7-code-highspeed",
        "moonshotai/kimi-k2.6",

        // tencent
        "tencent/hy4-preview",
        "tencent/hy3",
        "tencent/hunyuan-turbo",
        "tencent/hunyuan-large",

        // nvidia
        "nvidia/nemotron-3-ultra",
        "nvidia/nemotron-3-super-120b-a12b",
        "nvidia/nemotron-3-nano-30b-a3b",
        "nvidia/nemotron-3.5-lightning-30b-a3b",

        // xiaomi
        "xiaomi/mimo-v2.6-pro",
        "xiaomi/mimo-v2.6-flash",
        "xiaomi/mimo-v2.6-pro-ultraspeed",
        "xiaomi/mimo-v2.5-pro",
        "xiaomi/mimo-v2.5",

        // perplex
        "perplexity/sonar",
        "perplexity/sonar-pro",
        "perplexity/sonar-reasoning-pro",
        "perplexity/sonar-deep-research",

        // minimax
        "minimax/MiniMax-M3.1-Flash-Preview",
        "minimax/MiniMax-M3",
        "minimax/MiniMax-M2.7",
        "minimax/MiniMax-M2.7-highspeed",
        "minimax/MiniMax-M2.5",
        "minimax/MiniMax-M2.5-highspeed",

        // microsoft
        "microsoft/Phi-4",
        "microsoft/Phi-4-mini-instruct",
        "microsoft/Phi-4-multimodal-instruct",
        "microsoft/Phi-4-reasoning",
        "microsoft/Phi-4-mini-reasoning",

        // nousresearch
        "nousresearch/Hermes-4-Llama-3.1-405B",
        "nousresearch/Hermes-4-Llama-3.1-70B",
        "nousresearch/Hermes-4-14B",
        "nousresearch/Hermes-4.3-Seed-36B",
        "nousresearch/DeepHermes-3-Mistral-24B-Preview"
    ],

    openrouter: [
        "anthropic/claude-sonnet-5", "anthropic/claude-opus-5.5", "anthropic/claude-fable-5.1", "openai/gpt-6-astra", "openai/gpt-6-sol",
        "openai/gpt-6-luna", "openai/gpt-5.6-sol", "openai/gpt-5.6-luna", "openai/gpt-5.5", "google/gemini-3.8-flash",
        "google/gemini-2.5-pro", "google/gemini-2.5-flash", "deepseek/deepseek-v4.1-flash", "deepseek/deepseek-v4-pro-0813", "deepseek/deepseek-v4-flash",
        "z-ai/glm-5.3-flash", "z-ai/glm-5.3", "z-ai/glm-5.2", "qwen/qwen3.8-max-0902", "qwen/qwen-2.5-coder-32b-instruct",
        "x-ai/grok-4.7", "x-ai/grok-4-fast", "moonshotai/kimi-k3", "tencent/hy4-preview", "tencent/hy3",
        "meta-llama/llama-3.3-70b-instruct", "meta-llama/llama-3.1-405b-instruct", "nvidia/nemotron-3-ultra-550b-a55b:free", "xiaomi/mimo-v2.5", "upstage/solar-pro4",
        "poolside/laguna-s-2.1", "minimax/minimax-m3", "meta/muse-spark-1.3-contributor", "mistralai/mistral-large", "mistralai/pixtral-large-2411",
        "cohere/command-r-plus", "microsoft/phi-4", "ai21/jamba-1-5-large", "amazon/nova-pro-v1", "liquid/lfm-40b",
        "nousresearch/hermes-3-llama-3.1-405b", "01-ai/yi-large", "databricks/dbrx-instruct", "perplexity/sonar-reasoning", "cognitivecomputations/dolphin-mixtral-8x7b",
        "openchat/openchat-7b", "writer/palmyra-x-004", "allenai/olmo-7b-instruct", "togethercomputer/stripedhyena-nous-7b", "thinkingmachines/inkling-small:free"
    ]
};