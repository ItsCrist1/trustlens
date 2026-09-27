import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";

export type ChatMsg = { role: "user" | "assistant"; content: string };

export function ChatMessage({ role, content }: ChatMsg) {
    return (
        <div className={cn(
            "rounded-lg px-4 py-3 max-w-[80%]",
            role === "user" ? "self-end bg-primary text-primary-foreground" : "self-start bg-accent"
        )}>
            {role === "assistant"
                ? <div className="prose prose-sm dark:prose-invert max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                </div>
                : <p className="whitespace-pre-wrap">{content}</p>}
        </div>
    );
}