import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TopBar } from "@/components/nav/top-bar";
import Providers from "@/components/providers"
import { Toaster } from "@/components/ui/sonner";

import { cookies } from "next/headers";
import { SideBar } from "@/components/nav/side-bar";
import { ORIENTATION_COOKIE, type Orientation } from "@/components/nav/orientation";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

export const metadata: Metadata = {
    title: "TrustLens",
    description: "AI Powered AI Safety",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
    const orientation: Orientation =
        (await cookies()).get(ORIENTATION_COOKIE)?.value === "vertical" ? "vertical" : "horizontal";

    return (
        <html lang="en"
              suppressHydrationWarning
              className={cn("h-full", "antialiased", "font-mono", jetbrainsMono.variable)}>

        <body className="min-h-full flex flex-col">
        <Providers>
            <ThemeProvider>
                <Toaster/>
                <TopBar orientation={orientation}/>
                <div className="flex flex-1">
                    {orientation === "vertical" && <SideBar/>}
                    <main className="flex-1 min-w-0">{children}</main>
                </div>
            </ThemeProvider>
        </Providers>
        </body>

        </html>
    );
}
