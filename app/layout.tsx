import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TopBar } from "@/components/nav/top-bar";
import Providers from "@/components/providers/providers"
import { Toaster } from "@/components/ui/sonner";

import { cookies } from "next/headers";
import { SideBar } from "@/components/nav/side-bar";
import { ORIENTATION_COOKIE, SIDEBAR_WIDTH_COOKIE, clampSidebarWidth, type Orientation } from "@/components/nav/orientation";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.floweratrustlens.tech"),
    title: {
        default: "Flowera TrustLens",
        template: "%s · TrustLens",
    },
    description: "AI Powered AI Safety",

    icons: {
        icon: [
            { url: "/icons/flowera.png", media: "(prefers-color-scheme: light)" },
            { url: "/icons/flowera_white.png", media: "(prefers-color-scheme: dark)" },
        ],

        apple: "/icons/flowera_white.png"
    },

    applicationName: "TrustLens",
    openGraph: {
        type: "website",
        siteName: "TrustLens",
        title: "Flowera TrustLens",
        description: "Evaluate how trustworthy your AI models really are.",
        url: "/",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Flowera TrustLens",
        description: "Evaluate how trustworthy your AI models really are.",
    },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
    const cookieStore = await cookies();

    const orientation: Orientation = cookieStore.get(ORIENTATION_COOKIE)?.value === "vertical" ? "vertical" : "horizontal";
    const width = clampSidebarWidth(Number(cookieStore.get(SIDEBAR_WIDTH_COOKIE)?.value ?? NaN));

    return (
        <html lang="en"
              suppressHydrationWarning
              className={cn("h-full", "antialiased", "font-mono", jetbrainsMono.variable)}>

        <body className="min-h-full flex flex-col">
        <Providers>
            <ThemeProvider>
                <Toaster/>
                <div className={cn("flex flex-1", orientation === "horizontal" ? "flex-col" : "flex-row")}>
                    {orientation === "horizontal" ? <TopBar/> : <SideBar width={width}/>}
                    <main className="flex-1 min-w-0">{children}</main>
                </div>
            </ThemeProvider>
        </Providers>
        </body>

        </html>
    );
}
