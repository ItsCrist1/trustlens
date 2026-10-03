import {useEffect, useState} from "react";

export function useEndpointModels(rawEndpoint: string, apiKey = "", settingId = ""): string[] | null {
    const [fetched, setFetched] = useState<{ endpoint: string; models: string[] | null } | null>(null);
    const endpoint = rawEndpoint.trim();

    useEffect(() => {
        if (!endpoint) return;
        const controller = new AbortController();
        const timer = setTimeout(async () => {
            try {
                const res = await fetch("/api/models", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ endpoint, apiKey, settingId }),
                    signal: controller.signal,
                });
                const { models } = await res.json();
                setFetched({ endpoint, models });
            } catch {
                if (!controller.signal.aborted) setFetched({ endpoint, models: null });
            }
        }, 500);
        return () => { clearTimeout(timer); controller.abort(); };
    }, [endpoint, apiKey, settingId]);

    return fetched?.endpoint === endpoint ? fetched.models : null;
}