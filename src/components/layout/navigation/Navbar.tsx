"use client";

// Components
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import MobileNavOverlay from "@/components/layout/navigation/mobile-navigation/MobileNavOverlay";
import DesktopNav from "@/components/layout/navigation/desktop-navigation/DesktopNav";
import { useState, useEffect } from "react";

// Constants
import { NAV_ITEMS } from "@/constants/Navigation";
import { SOCIAL_MEDIA } from "@/constants/SocialMedia";

// Styling
import "./Navbar.css";

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");

        const handleResize = (e:MediaQueryListEvent) => {
            if (e.matches) {
                setMenuOpen(false);
            }
        }

        mediaQuery.addEventListener("change", handleResize);

        return () => {
            mediaQuery.removeEventListener("change", handleResize);
        }
    });

    const clickedHamburger = () => {
        setMenuOpen(previousState => !previousState);
    }

    return (
        <nav className={`transition-colors duration-300 relative w-full flex justify-between items-center p-3.5 h-15
                         ${ !isMenuOpen ? "bg-(--background)": "bg-(--tertiary) border-b-1 border-(--accent)"}`}>

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
            <button className="block lg:hidden" onClick={clickedHamburger} >
                <FiMenu className={`w-8 h-8 ${isMenuOpen ? "text-(--background)" : "text-(--foreground)"}`}/>
            </button>

            {/*<DesktopNav navItems={NAV_ITEMS} />*/}
            <MobileNavOverlay navItems={NAV_ITEMS} socialMediaLinks={SOCIAL_MEDIA} isMenuOpen={isMenuOpen} />
        </nav>
    );
}