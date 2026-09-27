"use client"

import {ChartBar, FlaskConical, LucideIcon, Plug} from "lucide-react";
import {usePathname} from "next/navigation";
import {cn} from "cn";
import Link from "next/link"

const tabs = [
    { href: "/", label: "Providers", icon: Plug },
    { href: "/evals", label: "Evals", icon: FlaskConical },
    { href: "/results", label: "Results", icon: ChartBar },
] satisfies { href: string; label: string; icon: LucideIcon }[]

export function NavTabs({ orientation }: { orientation: "horizontal" | "vertical" }) {
    const pathname = usePathname()
    return (
        <nav className={cn("flex gap-5", orientation === "vertical" ? "flex-col" : "flex-row")}>
            {tabs.map(t => (
                <Link key={t.href} href={t.href}
                      aria-current={pathname === t.href ? "page" : undefined}
                      className="... aria-[current=page]:bg-accent rounded-lg">
                    <div className="flex items-center gap-2">
                        <t.icon/>
                        {t.label}
                    </div>
                </Link>
            ))}
        </nav>
    )
}