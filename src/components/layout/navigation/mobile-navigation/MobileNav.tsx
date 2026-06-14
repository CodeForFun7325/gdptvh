import NavItemData from "@/types/NavItemData";
import Link from "next/link";
import { ReactElement } from "react";

export default function MobileNav({ navItems } : { navItems:NavItemData[] }) {
    const links : ReactElement[] = navItems.map(item => {
        return (
            <Link
                key={item.label}
                href={item.href}
                className="text-(--background)"
            >
                {item.label}
            </Link>
        );
    });

    return (
        <nav className="flex flex-col h-screen justify-around bg-transparent">
            {links}
        </nav>
    );
}