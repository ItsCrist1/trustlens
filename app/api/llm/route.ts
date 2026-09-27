import { auth } from "@/auth";
import { db } from "@/db";
import { providerSettings } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import {createTextStreamResponse, streamText, toTextStream} from "ai";
import {error} from "next/dist/build/output/log";

const OPENROUTER_URL = "https://openrouter.ai/api/v1";

export async function POST(req: Request) {
    const session = await auth();
    if (!session?.user?.id) return Response.json({ error: "Not signed in" }, { status: 401 });

    const { settingId, model, prompt, messages } = await req.json();

    const [setting] = await db.select().from(providerSettings)
        .where(and(eq(providerSettings.id, settingId), eq(providerSettings.userId, session.user.id)));
    if (!setting) return Response.json({ error: "Setting not found" }, { status: 404 });

    const baseURL = setting.provider === "openrouter" ? OPENROUTER_URL : setting.endpoint;
    if (!baseURL) return Response.json({ error: "Setting has no endpoint" }, { status: 400 });

    const provider = createOpenAICompatible({ name: setting.provider, baseURL, apiKey: setting.apiKey });

    try {
        const start = Date.now();
        const result = streamText({
            model: provider(model ?? setting.models[0]),
            ...(messages ? {messages} : {prompt}),
            onError: ({ error }) => console.error(error)
        });
        return createTextStreamResponse({ stream: toTextStream({ stream: result.stream }) });
    } catch (e) {
        return Response.json({ error: e instanceof Error ? e.message : String(e) }, { status: 502 });
    }
}