import NavItemData from "@/types/NavItemData";
import Link from "next/link";
import { ReactElement } from "react";

export default function MobileNav({ navItems } : { navItems:NavItemData[] }) {
    const links : ReactElement[] = navItems.map(item => {
        return (
            <Link key={item.label} href={item.href}>{item.label}</Link>
        );
    });

    return (
        <nav>
            {links}
        </nav>
    );
}