"use server"

import { auth } from "@/auth"
import { db } from "@/db"
import { providerSettings } from "@/db/schema"
import { and, eq, desc } from "drizzle-orm"
import {revalidatePath} from "next/cache";
import {toast} from "sonner";

async function requireUserId() {
    const session = await auth()
    if(!session?.user?.id) throw new Error("Not signed in");
    return session.user.id;
}

export async function listSettings() {
    const userId = await requireUserId();
    return db.select().from(providerSettings).where(eq(providerSettings.userId, userId)).orderBy(desc(providerSettings.createdAt));
}

export async function createSetting(data: {
    name: string; provider: string; endpoint?: string; apiKey?: string; models?: string[]
}) {
    const userId = await requireUserId();
    try {
        const [row] = await db.insert(providerSettings).values({...data, userId}).returning();
        revalidatePath("/");
        return { ok: true as const, message: `Saved "${row.name}"`, row }
    } catch (e) {
        console.error(e)
        return { ok: false as const, message: "Couldn't save setting" }
    }
}

export async function deleteSetting(id: string) {
    const userId = await requireUserId();
    try {
        await db.delete(providerSettings).where(and(eq(providerSettings.id, id), eq(providerSettings.userId, userId)));
        revalidatePath("/");
        return { ok: true as const, message: `Provider ${id} deleted` };
    } catch (e) {
        console.error(e);
        return { ok: false as const, message: `Couldn't delete provider ${id}` };
    }
}