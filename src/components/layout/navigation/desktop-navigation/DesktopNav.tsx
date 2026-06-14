import NavItemData from "@/types/NavItemData";
import Link from "next/link";
import { ReactElement } from "react";

export default function DesktopNav({ navItems } : { navItems:NavItemData[] }) {

    const links : ReactElement[] = navItems.map(item => {
         return (
            <Link key={item.label} href={item.href}>{item.label}</Link>
         );
    });

    return (
        <nav className="DesktopNav">
            {links}
        </nav>
    );
}