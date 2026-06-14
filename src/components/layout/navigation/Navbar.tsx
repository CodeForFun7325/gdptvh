"use client";

// Components
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import MobileNavOverlay from "@/components/layout/navigation/mobile-navigation/MobileNavOverlay";
import DesktopNav from "@/components/layout/navigation/desktop-navigation/DesktopNav";
import {useState} from "react";

// Constants
import { NAV_ITEMS } from "@/constants/Navigation";

// Styling
import "./Navbar.css";

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const clickedHamburger = () => {
        setMenuOpen(!isMenuOpen);
    }

    return (
        <nav className={`transition-colors duration-300 relative w-full flex justify-between items-center p-3.5 h-15
                         ${ !isMenuOpen ? "bg-(--background)": "bg-(--accent)"}`}>
            {/* Logo: Clicking on this will take you back to the home page*/}
            <Link href="/" className="flex items-center">
                <Image
                    src={ isMenuOpen ? "/imgs/Logo/HoaSenWhite.png" : "/imgs/Logo/HoaSenGreen.png"}
                    alt="Logo"
                    width={32}
                    height={32}
                    className="mr-1.5"
                />
                <h1 className={`font-bold ${ isMenuOpen ? "text-(--background)" : "text-(--foreground)"}`}>GĐPT Vạn Hạnh</h1>
            </Link>

            {/* Render navigation links */}
            <FiMenu onClick={clickedHamburger} className={`w-8 h-8 ${isMenuOpen ? "text-(--background)" : "text-(--foreground)"}`}/>
            {/*<DesktopNav navItems={NAV_ITEMS} />*/}
            <MobileNavOverlay navItems={NAV_ITEMS} isMenuOpen={isMenuOpen} />
        </nav>
    );
}