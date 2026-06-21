"use client";

// Components
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import MobileNavOverlay from "@/components/layout/navigation/mobile-navigation/MobileNavOverlay";
import DesktopNav from "@/components/layout/navigation/desktop-navigation/DesktopNav";
import { useState, useEffect } from "react";

// Constants
import { NAV_ITEMS } from "@/constants/navigation/Navigation";
import { SOCIAL_MEDIA } from "@/constants/navigation/SocialMedia";

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isLargeScreen, setLargeScreen] = useState(false);

    // Close the mobile menu once the screen has been re-sized to a larger screen
    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");

        const handleResize = (e:MediaQueryListEvent) => {
            if (e.matches) {
                setMenuOpen(false);
                setLargeScreen(true);
            } else {
                setLargeScreen(false);
            }
        }

        mediaQuery.addEventListener("change", handleResize);

        return () => {
            mediaQuery.removeEventListener("change", handleResize);
        }
    });

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isMenuOpen]);

    const clickedHamburger = () => {
        setMenuOpen(previousState => !previousState);
    }

    return (
        <nav className={`transition-colors duration-300 relative w-full flex justify-between items-center p-3.5 h-15 z-50
                         ${ !isMenuOpen ? "bg-(--background)": "bg-(--tertiary) border-b border-(--accent)"} 
                         lg:bg-transparent lg:text-(--background)`}>

            {/* Logo: Clicking on this will take you back to the home page*/}
            <Link href="/" className="flex items-center">
                <Image
                    src={ isMenuOpen || isLargeScreen ? "/imgs/Logo/HoaSenWhite.png" : "/imgs/Logo/HoaSenGreen.png"}
                    alt="GDPT Logo - An 8 pedal lotus flower"
                    width={35}
                    height={35}
                    className="mr-1.5"
                />
                <h1 className={`text-[1.3rem] font-bold ${ isMenuOpen ? "text-(--background)" : "text-(--foreground)"} lg:text-(--background)`}>GĐPT Vạn Hạnh</h1>
            </Link>

            {/* Render navigation links */}
            <button className="block lg:hidden" onClick={clickedHamburger} aria-label="Hamburger menu">
                <FiMenu className={`w-8 h-8 ${isMenuOpen ? "text-(--background)" : "text-(--foreground)"}`}/>
            </button>

            <DesktopNav navItems={NAV_ITEMS} />
            <MobileNavOverlay navItems={NAV_ITEMS} socialMediaLinks={SOCIAL_MEDIA} isMenuOpen={isMenuOpen} />
        </nav>
    );
}