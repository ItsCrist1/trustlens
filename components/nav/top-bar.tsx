import { ThemeToggle } from "@/components/theme/theme-toggle";
import LoginButton from "@/components/auth/auth";
import { NavTabs } from "@/components/nav/nav-tabs";
import type { Orientation } from "@/components/nav/orientation";

export function TopBar({ orientation }: { orientation: Orientation }) {
    return (
        <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b bg-background/80 px-4 backdrop-blur">
            <div className="flex items-center gap-6">
                <span className="font-semibold">TrustLens</span>
                {orientation === "horizontal" && <NavTabs orientation="horizontal"/>}
            </div>

            <div className="flex items-center gap-4">
                <ThemeToggle/>
                <LoginButton/>
            </div>
        </header>
    );
}