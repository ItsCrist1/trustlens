import { ThemeToggle } from "@/components/theme-toggle";

export function TopBar() {
    return (
        <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b bg-background/80 px-4 backdrop-blur">
            <span className="font-semibold">TrustLens</span>
            <ThemeToggle/>
        </header>
    );
}