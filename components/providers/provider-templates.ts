const openai_endpoint_fallback: string[] = [
    // openai
    "gpt-6-astra",
    "gpt-6-sol",
    "gpt-6-luna",
    "gpt-5.6-sol",
    "gpt-5.6-terra",
    "gpt-5.6-luna",
    "gpt-5.5",

    // anthropic
    "claude-opus-5-5",
    "claude-fable-5-1",
    "claude-sonnet-5.5",
    "claude-sonnet-5",
    "claude-opus-5",
    "claude-opus-4-8",
    "claude-haiku-4-5",
    "claude-sonnet-4-6",

    // google
    "gemini-3.8-flash",
    "gemini-3.8-live",
    "gemini-3.1-pro-preview",
    "gemini-3-flash-preview",
    "gemini-3.7-flash",
    "gemini-3.5-flash",
    "gemini-2.5-pro",

    // z-ai
    "glm-5.3",
    "glm-5.3-flash",
    "glm-5.3-flashx",
    "glm-5.2",
    "glm-5.1",
    "glm-5",
    "glm-4.7",

    // deepseek
    "deepseek-flash",
    "deepseek-v4-pro",
    "deepseek-v4.1-flash",

    // qwen
    "qwen3.8-max",
    "qwen3.8-flash",
    "qwen3.7-plus",
    "qwen3.7-flash",
    "qwen3.8-omni-flash",
    "qwen3.5-plus",

    // x-ai
    "grok-4.7",
    "grok-4.6",
    "grok-4.5",
    "grok-4.20",
    "grok-4.3",
    "grok-4-fast-reasoning",
    "grok-code-fast-1",

    // meta / meta-llama
    "muse-spark-1.3",
    "Llama-4-Maverick-17B-128E-Instruct-FP8",
    "Llama-4-Scout-17B-16E-Instruct-FP8",
    "Llama-3.3-70B-Instruct",
    "Llama-3.3-8B-Instruct",

    // bytedance
    "doubao-seed-2-1-pro-260915",
    "doubao-seed-2-1-turbo-260628",
    "doubao-seed-2-0-lite-260428",
    "doubao-seed-2-0-mini-260428",
    "doubao-seed-evolving",

    // amazon
    "amazon.nova-premier-v1:0",
    "amazon.nova-pro-v1:0",
    "amazon.nova-lite-v1:0",
    "amazon.nova-micro-v1:0",
    "nova-2-lite-v1",
    "nova-2-sonic-v1",

    // mistralai
    "mistral-medium-3-5",
    "mistral-large-3",
    "mistral-small-4",
    "ministral-3-14b",
    "ministral-3-8b",
    "codestral",
    "mistral-small-2603",

    // moonshotai
    "kimi-k3",
    "kimi-k2.7-code",
    "kimi-k2.7-code-highspeed",
    "kimi-k2.6",

    // tencent
    "hy4-preview",
    "hy3",
    "hunyuan-turbo",
    "hunyuan-large",

    // nvidia
    "nemotron-3-ultra",
    "nemotron-3-super-120b-a12b",
    "nemotron-3-nano-30b-a3b",
    "nemotron-3.5-lightning-30b-a3b",

    // xiaomi
    "mimo-v2.6-pro",
    "mimo-v2.6-flash",
    "mimo-v2.6-pro-ultraspeed",
    "mimo-v2.5-pro",
    "mimo-v2.5",

    // perplex
    "sonar",
    "sonar-pro",
    "sonar-reasoning-pro",
    "sonar-deep-research",

    // minimax
    "MiniMax-M3.1-Flash-Preview",
    "MiniMax-M3",
    "MiniMax-M2.7",
    "MiniMax-M2.7-highspeed",
    "MiniMax-M2.5",
    "MiniMax-M2.5-highspeed",

    // microsoft
    "Phi-4",
    "Phi-4-mini-instruct",
    "Phi-4-multimodal-instruct",
    "Phi-4-reasoning",
    "Phi-4-mini-reasoning",
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

const sys1_models = [
    "typesafe:jev-1.13.0",
    "typesafe:jev-mini",
    "typesafe:jev-fast",

    "typesafe/systemone-adapter-v1",
    "openrouter/typesafe:jev-1.13",
    "cloudflare/typesafe-jev-gateway"
];

export const templates: Record<string, string[]> = {
    openrouter: [...new Set([...openrouter_free, ...openrouter_nonfree])],
    openai: openai_endpoint_fallback,
    openai_sys1: sys1_models,
    "vercel-ai-gateway": vercel_ai_gateway,
    endpoints_llm: [
        "https://api.openai.com/v1",
        "https://api.anthropic.com/v1",
        "https://generativelanguage.googleapis.com/v1beta/openai",
        "https://api.x.ai/v1",
        "https://api.z.ai/api/paas/v4",
        "https://api.deepseek.com/v1",
        "https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
        "https://api.moonshot.ai/v1",
        "https://api.mistral.ai/v1",
        "https://api.minimax.io/v1",
        "https://api.xiaomimimo.com/v1",
        "https://api.hunyuan.cloud.tencent.com/v1",
        "https://ark.ap-southeast.bytepluses.com/api/v3",
        "https://api.llama.com/compat/v1",
        "https://integrate.api.nvidia.com/v1",
        "https://api.perplexity.ai",
        "https://inference-api.nousresearch.com/v1",
        "https://inference.poolside.ai/v1",
        "https://openrouter.ai/api/v1",
        "https://ai-gateway.vercel.sh/v1",
    ],

    endpoints_sys1: [
        "https://api.typesafe.ai/v1/systemone",
        "https://openrouter.ai/api/v1/chat/completions",
        "https://gateway.ai.cloudflare.com/v1/account/gateway/typesafe",
        "https://gateway.vercel.ai/v1/typesafe",
        "https://api.truefoundry.com/v1/typesafe/systemone"
    ]
};