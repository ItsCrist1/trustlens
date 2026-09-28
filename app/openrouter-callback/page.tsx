"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

function Callback() {
    const params = useSearchParams();
    const [status, setStatus] = useState("Connecting to OpenRouter…");
    const started = useRef(false);

    useEffect(() => {
        if(started.current)
            return;

        started.current = true;

        async function exchange() {
            const code = params.get("code");
            const verifier = localStorage.getItem("or_verifier");
            localStorage.removeItem("or_verifier");

            if(!code || !verifier) {
                setStatus("Missing code or verifier. Close this tab and try again.");
                return;
            }

            try {
                const res = await fetch("https://openrouter.ai/api/v1/auth/keys", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ code, code_verifier: verifier, code_challenge_method: "S256" }),
                });

                if(!res.ok)
                    throw new Error(`OpenRouter responded ${res.status}`);

                const { key } = await res.json();

                const ch = new BroadcastChannel("openrouter");
                ch.postMessage({ key });
                ch.close();

                setStatus("Connected! You can close this tab.");
                window.close();
            } catch (e) {
                setStatus(`Couldn't get a key: ${e instanceof Error ? e.message : String(e)}`);
            }
        }

        exchange();
    }, [params]);

    return <p className="p-6 text-center">{status}</p>;
}

export default function OpenRouterCallbackPage() {
    return (
        <Suspense>
            <Callback/>
        </Suspense>
    );
}