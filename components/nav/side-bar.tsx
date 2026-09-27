import { NavTabs } from "@/components/nav/nav-tabs";

export function SideBar() {
    return (
        <aside className="sticky top-14 h-[calc(100vh-3.5rem)] w-52 shrink-0 border-r bg-sidebar p-3">
            <NavTabs orientation="vertical"/>
        </aside>
    );
}