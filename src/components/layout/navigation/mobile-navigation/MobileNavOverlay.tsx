import MobileNav from "@/components/layout/navigation/mobile-navigation/MobileNav";

import NavItemData from "@/types/NavItemData";

export default function MobileNavOverlay({ navItems, isMenuOpen }: { navItems:NavItemData[], isMenuOpen: boolean }) {
    return (
        <div className={`fixed transition-all duration-300 w-screen h-screen top-15 left-0 flex flex-col items-center
                        ${ isMenuOpen ? "bg-(--accent) translate-x-0 opacity-100" 
                                      : "bg-transparent -translate-x-full opacity-0"}`}>

            <MobileNav navItems={navItems} />
        </div>
    );
}