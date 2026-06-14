import { IconType } from "react-icons";
import Link from "next/link";
import Enroll from "@/components/layout/navigation/Enroll";

import NavItemData from "@/types/NavItemData";
import SocialMediaData from "@/types/SocialMediaData";

export default function MobileNav({ navItems, socialMediaLinks } : { navItems:NavItemData[], socialMediaLinks:SocialMediaData[] }) {

    // Nav Link Component
    function NavLink({label, href, icon: Icon} : {label: string, href: string, icon: IconType }) {
        return (
            <Link
                href={href}
                className="flex flex-row items-center text-(--background) text-[1.5rem] m-3"
            >
                <Icon className="m-2.5"/>
                {label}
            </Link>
        );
    }

    function SocialMediaLink({href, icon: Icon} : SocialMediaData) {
        return(
            <Link href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--background) text-[1.5rem] m-3"
            >
                <Icon />
            </Link>
        );
    }

    // Parse out site navigation navLinks
    const navLinks = navItems.map(item => {
        return (
            <NavLink key={item.label} label={item.label} href={item.href} icon={item.icon}/>
        );
    });

    // Parse out social media navLinks
    const socialLinks = socialMediaLinks.map(item => {
        return (
            <SocialMediaLink key={item.href} href={item.href} icon={item.icon} />
        )
    });

    return (
        <nav className="flex flex-col h-screen justify-around bg-transparent pb-12">
            {/* Navigation Links */}
            <section className="flex flex-col justify-around">
                {navLinks}
            </section>

            {/* Enrollment Link */}
            <section className="flex justify-around">
                <Enroll />
            </section>

            {/* Social Media Links */}
            <section className="flex justify-around">
                {socialLinks}
            </section>
        </nav>
    );
}