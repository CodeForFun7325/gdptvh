import MobileNav from "@/components/layout/navigation/mobile-navigation/MobileNav";

import NavItemData from "@/types/navigation/NavItemData";
import SocialMediaData from "@/types/navigation/SocialMediaData";

export default function MobileNavOverlay({ navItems, socialMediaLinks, isMenuOpen }:
                                        { navItems:NavItemData[], socialMediaLinks:SocialMediaData[], isMenuOpen: boolean }) {
    return (
        <div className={`fixed transition-all duration-300 w-screen h-screen top-15 left-0 flex flex-col items-center p-3
                        ${ isMenuOpen ? "bg-(--tertiary) translate-x-0 opacity-100 pointer-events-auto" 
                                      : "bg-transparent -translate-x-full opacity-0 pointer-events-none"}`}>

            <MobileNav navItems={navItems} socialMediaLinks={socialMediaLinks}/>
        </div>
    );
}