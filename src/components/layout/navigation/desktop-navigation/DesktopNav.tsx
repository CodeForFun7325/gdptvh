import NavItemData from "@/types/navigation/NavItemData";
import Link from "next/link";
import { ReactElement } from "react";
import Enroll from "@/components/layout/enroll/Enroll";

export default function DesktopNav({ navItems } : { navItems:NavItemData[] }) {

    const links : ReactElement[] = navItems.map(item => {
         return (
            <Link className="ml-4 mr-4 font-bold" key={item.label} href={item.href}>{item.label}</Link>
         );
    });

    return (
        <nav className="hidden lg:block">
            {links}
        </nav>
    );
}