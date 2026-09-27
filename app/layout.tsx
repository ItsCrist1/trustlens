import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TopBar } from "@/components/top-bar";
import Providers from "@/components/providers"
import { Toaster } from "@/components/ui/sonner";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "TrustLens",
    description: "AI Powered AI Safety",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en"
              suppressHydrationWarning
              className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-mono", jetbrainsMono.variable)}>

        <body className="min-h-full flex flex-col">
        <Providers>
            <ThemeProvider>
                <Toaster/>
                <TopBar/>
                {children}
            </ThemeProvider>
        </Providers>
        </body>

        </html>
    );
}
