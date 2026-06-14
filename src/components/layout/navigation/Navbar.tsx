// Components
import Image from "next/image";
import Link from "next/link";
import MobileNav from "@/components/layout/navigation/mobile-navigation/MobileNav";
import DesktopNav from "@/components/layout/navigation/desktop-navigation/DesktopNav";

// Constants
import { NAV_ITEMS } from "@/constants/Navigation";

// Styling
import "./Navbar.css";

export default function Navbar() {

    return (
        <nav>
            {/* Logo: Clicking on this will take you back to the home page*/}
            <Link href="/public" className="flex items-center">
                <Image
                    src="/imgs/Logo/HoaSen.png"
                    alt="Logo"
                    width={64}
                    height={64}
                    className=""
                />
                <h1 className="font-bold">GĐPT Vạn Hạnh</h1>
            </Link>

            {/* Render navigation links */}
            <DesktopNav navItems={NAV_ITEMS} />
            <MobileNav navItems={NAV_ITEMS}/>
        </nav>
    );
}