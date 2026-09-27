"use client"

import { useRouter } from "next/navigation";
import { PanelLeft, PanelTop } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ORIENTATION_COOKIE, type Orientation } from "@/components/nav/orientation";

export function OrientationToggle({ orientation }: { orientation: Orientation }) {
    const router = useRouter();
    const next = orientation === "horizontal" ? "vertical" : "horizontal";

    return (
        <Button variant="outline" size="icon" className="size-10 rounded-full cursor-pointer"
                aria-label={`Switch to ${next} tabs`}
                onClick={() => {
                    document.cookie = `${ORIENTATION_COOKIE}=${next}; path=/; max-age=31536000`;
                    router.refresh();
                }}>
            {orientation === "horizontal" ? <PanelLeft/> : <PanelTop/>}
        </Button>
    );
}