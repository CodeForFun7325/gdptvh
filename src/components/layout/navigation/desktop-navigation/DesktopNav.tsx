import NavItemData from "@/types/navigation/NavItemData";
import Link from "next/link";
import { ReactElement } from "react";
import EnrollLink from "@/components/layout/enroll/EnrollLink";

export default function DesktopNav({ navItems } : { navItems:NavItemData[] }) {

    const links : ReactElement[] = navItems.map(item => {
         return (
            <Link className="ml-4 mr-4 text-[1.1rem] font-medium" key={item.label} href={item.href}>{item.label}</Link>
         );
    });

    return (
        <nav className="hidden lg:block">
            {links}
        </nav>
    );
}