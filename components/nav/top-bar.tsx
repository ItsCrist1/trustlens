import { ThemeToggle } from "@/components/theme/theme-toggle";
import LoginButton from "@/components/auth/auth";
import { NavTabs } from "@/components/nav/nav-tabs";
import type { Orientation } from "@/components/nav/orientation";
import {OrientationToggle} from "@/components/nav/orientation-toggle";

export function TopBar() {
    return (
        <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b bg-background/70 px-4 backdrop-blur">
            <div className="flex items-center gap-6">
                <span className="font-semibold">TrustLens</span>
                <NavTabs orientation="horizontal"/>
            </div>

            <div className="flex items-center gap-4">
                <OrientationToggle orientation="horizontal"/>
                <ThemeToggle/>
                <LoginButton/>
            </div>
        </header>
    );
}