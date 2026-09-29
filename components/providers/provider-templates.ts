const universal: string[] = [
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
];

const openrouter_nonfree: string[] = [
    // openai
    "openai/gpt-6-astra",
    "openai/gpt-6-astra-pro",
    "openai/gpt-6-sol",
    "openai/gpt-6-sol-pro",
    "openai/gpt-6-luna",
    "openai/gpt-6-luna-pro",
    "openai/gpt-5.6-luna",

    // anthropic
    "anthropic/claude-opus-5.5",
    "anthropic/claude-sonnet-5.5",
    "anthropic/claude-fable-5.1",
    "anthropic/claude-opus-5",
    "anthropic/claude-sonnet-5",
    "anthropic/claude-fable-5",
    "anthropic/claude-opus-4.8",

    // google
    "google/gemini-3.8-flash",
    "google/gemini-3.7-flash",
    "google/gemini-3.6-flash",
    "google/gemini-3.5-flash",
    "google/gemini-3.5-flash-lite",

    // z-ai
    "z-ai/glm-5.3-prime",
    "z-ai/glm-5.3",
    "z-ai/glm-5.3-flash",
    "z-ai/glm-5.3-flashx",
    "z-ai/glm-5.2",
    "z-ai/glm-5.1",

    // deepseek
    "deepseek/deepseek-v4.1-flash",
    "deepseek/deepseek-v4-pro",
    "deepseek/deepseek-v4-flash",
    "deepseek/deepseek-v3.2",

    // qwen
    "qwen/qwen3.8-max-prime",
    "qwen/qwen3.8-max-0902",
    "qwen/qwen3.8-flash",
    "qwen/qwen3.8-omni-flash",
    "qwen/qwen3.8-27b",
    "qwen/qwen3.7-plus",

    // x-ai
    "x-ai/grok-4.7",
    "x-ai/grok-4.6",
    "x-ai/grok-4.5",
    "x-ai/grok-4.20",
    "x-ai/grok-build-0.1",

    // meta / meta-llama
    "meta/muse-spark-1.3",
    "meta/muse-glimmer-30b",
    "meta-llama/llama-4-maverick",
    "meta-llama/llama-4-scout",
    "meta-llama/llama-3.3-70b-instruct",

    // amazon
    "amazon/nova-2-lite-v1",
    "amazon/nova-premier-v1",
    "amazon/nova-pro-v1",
    "amazon/nova-lite-v1",
    "amazon/nova-micro-v1",

    // mistralai
    "mistralai/mistral-medium-3-5",
    "mistralai/mistral-large-2512",
    "mistralai/mistral-small-2603",
    "mistralai/devstral-2512",
    "mistralai/ministral-14b-2512",
    "mistralai/ministral-8b-2512",

    // moonshotai
    "moonshotai/kimi-k3",
    "moonshotai/kimi-k2.7-code",
    "moonshotai/kimi-k2.6",
    "moonshotai/kimi-k2-thinking",

    // tencent
    "tencent/hy4-preview",
    "tencent/hy3",
    "tencent/hunyuan-a13b-instruct",

    // nvidia
    "nvidia/nemotron-3-ultra-550b-a55b",
    "nvidia/nemotron-3-super-120b-a12b",
    "nvidia/nemotron-3.5-lightning",
    "nvidia/nemotron-3-nano-30b-a3b",

    // xiaomi
    "xiaomi/mimo-v2.6-pro",
    "xiaomi/mimo-v2.6-pro-ultraspeed",
    "xiaomi/mimo-v2.6-flash",
    "xiaomi/mimo-v2.5-pro",

    // perplexity
    "perplexity/sonar",
    "perplexity/sonar-pro",
    "perplexity/sonar-pro-search",
    "perplexity/sonar-reasoning-pro",
    "perplexity/sonar-deep-research",

    // minimax
    "minimax/minimax-m3",
    "minimax/minimax-m2.7",
    "minimax/minimax-m2.5",

    // microsoft
    "microsoft/phi-4",

    // nousresearch
    "nousresearch/hermes-4-405b",
    "nousresearch/hermes-3-llama-3.1-405b",
];

const openrouter_free: string[] = [
    "stealth/space-bunny-alpha",
    "inclusionai/ling-3.0-flash-sante:free",
    "qwen/qwen3.8-27b:free",
    "dots-studio/dots-3-note-preview:free",
    "liquid/lfm-2.5-2.6b:free",
    "nvidia/nemotron-3.5-lightning:free",
    "poolside/laguna-s-2.1:free",
    "poolside/laguna-xs-2.1:free",
    "cohere/north-mini-code:free",
    "nvidia/nemotron-3-ultra-550b-a55b:free",
    "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
    "google/gemma-4-26b-a4b-it:free",
    "google/gemma-4-31b-it:free",
    "nvidia/nemotron-3-super-120b-a12b:free",
]

const vercel_ai_gateway: string[] = [
    // openai
    "openai/gpt-6-astra",
    "openai/gpt-6-sol",
    "openai/gpt-6-luna",
    "openai/gpt-5.6-sol",
    "openai/gpt-5.6-terra",
    "openai/gpt-5.6-luna",
    "openai/gpt-5.5",
    "openai/gpt-5.5-pro",

    // anthropic
    "anthropic/claude-opus-5.5",
    "anthropic/claude-sonnet-5.5",
    "anthropic/claude-fable-5.1",
    "anthropic/claude-opus-5",
    "anthropic/claude-sonnet-5",
    "anthropic/claude-fable-5",
    "anthropic/claude-opus-4.8",
    "anthropic/claude-haiku-4.5",

    // google
    "google/gemini-3.8-flash",
    "google/gemini-3.8-live",
    "google/gemini-3.7-flash",
    "google/gemini-3.6-flash",
    "google/gemini-3.5-flash",
    "google/gemini-3.5-flash-lite",
    "google/gemma-4-31b-it",
    "google/gemma-4-26b-a4b-it",

    // alibaba (qwen)
    "alibaba/qwen3.8-max-prime",
    "alibaba/qwen3.8-max",
    "alibaba/qwen3.8-flash",
    "alibaba/qwen3.8-omni-flash",
    "alibaba/qwen3.8-27b",
    "alibaba/qwen3.7-plus",
    "alibaba/qwen3.7-flash",

    // spacexai (grok)
    "spacexai/grok-4.7",
    "spacexai/grok-4.6",
    "spacexai/grok-4.5",
    "spacexai/grok-4.3",
    "spacexai/grok-4.20-reasoning",
    "spacexai/grok-build-0.1",

    // zai
    "zai/glm-5.3",
    "zai/glm-5.3-flash",
    "zai/glm-5.3-flashx",
    "zai/glm-5.2",
    "zai/glm-5.1",

    // deepseek
    "deepseek/deepseek-v4.1-flash",
    "deepseek/deepseek-v4-pro",
    "deepseek/deepseek-v4-flash",
    "deepseek/deepseek-v3.2",
    "deepseek/deepseek-v3.2-thinking",

    // meta
    "meta/muse-spark-1.3",
    "meta/muse-glimmer-30b",
    "meta/llama-4-maverick",
    "meta/llama-4-scout",
    "meta/llama-3.3-70b",

    // amazon
    "amazon/nova-2-lite",
    "amazon/nova-pro",
    "amazon/nova-lite",
    "amazon/nova-micro",

    // bytedance
    "bytedance/seed-2.1-turbo",
    "bytedance/seed-1.8",

    // mistral
    "mistral/mistral-medium-3.5",
    "mistral/mistral-large-3",
    "mistral/mistral-small",
    "mistral/ministral-14b",
    "mistral/ministral-8b",
    "mistral/codestral",

    // moonshotai
    "moonshotai/kimi-k3",
    "moonshotai/kimi-k2.7-code",
    "moonshotai/kimi-k2.6",
    "moonshotai/kimi-k2-thinking",

    // tencent
    "tencent/hy4-preview",
    "tencent/hy3",

    // nvidia
    "nvidia/nemotron-3-ultra-550b-a55b",
    "nvidia/nemotron-3-super-120b-a12b",
    "nvidia/nemotron-3.5-lightning",
    "nvidia/nemotron-3-nano-30b-a3b",

    // xiaomi
    "xiaomi/mimo-v2.6-pro",
    "xiaomi/mimo-v2.6-pro-ultraspeed",
    "xiaomi/mimo-v2.6-flash",
    "xiaomi/mimo-v2.5-pro",

    // minimax
    "minimax/minimax-m3",
    "minimax/minimax-m2.7",
    "minimax/minimax-m2.5",

    // perplexity
    "perplexity/sonar",

    // free
    "inclusionai/ling-3.0-flash-sante-free",
    "poolside/laguna-s-2.1-free",
];

export const templates: Record<string, string[]> = {
    openrouter: [...new Set([...openrouter_free, ...openrouter_nonfree])],
    openai: universal,
    "vercel-ai-gateway": vercel_ai_gateway
};