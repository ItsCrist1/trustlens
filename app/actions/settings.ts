"use server"

import { auth } from "@/auth"
import { db } from "@/db"
import { providerSettings } from "@/db/schema"
import { and, eq, desc } from "drizzle-orm"
import {revalidatePath} from "next/cache";

async function requireUserId() {
    const session = await auth()
    if(!session?.user?.id) throw new Error("Not signed in");
    return session.user.id;
}

export async function listSettings() {
    const userId = await requireUserId();
    return db.select().from(providerSettings).where(eq(providerSettings.userId, userId)).orderBy(desc(providerSettings.createdAt));
}

export async function updateSetting(id: string, data: { name: string; endpoint: string; models: string[], apiKey?: string }) {
    try {
        const userId = await requireUserId();
        const [row] = await db.update(providerSettings)
            .set({ name: data.name, endpoint: data.endpoint, models: data.models, ...(data.apiKey ? { apiKey: data.apiKey } : {}) })
            .where(and(eq(providerSettings.id, id), eq(providerSettings.userId, userId)))
            .returning({ name: providerSettings.name });

        if(!row)
            return { ok: false as const, message: "Provider not found" };

        revalidatePath("/");

        return { ok: true as const, message: `Saved "${row.name}"` };
    } catch (e) {
        console.error(e);
        return { ok: false as const, message: "Couldn't save changes" };
    }
}

export async function createSetting(data: {
    name: string; provider: string; endpoint?: string; apiKey?: string; models?: string[]
}) {

    try {
        const userId = await requireUserId();
        const [row] = await db.insert(providerSettings).values({...data, userId}).returning();
        revalidatePath("/");
        return { ok: true as const, message: `Saved "${row.name}"`, row }
    } catch (e) {
        console.error(e)
        return { ok: false as const, message: "Couldn't save setting" }
    }
}

export async function deleteSetting(id: string) {
    try {
        const userId = await requireUserId();
        await db.delete(providerSettings).where(and(eq(providerSettings.id, id), eq(providerSettings.userId, userId)));
        revalidatePath("/");
        return { ok: true as const, message: `Provider ${id} deleted` };
    } catch (e) {
        console.error(e);
        return { ok: false as const, message: `Couldn't delete provider ${id}` };
    }
}