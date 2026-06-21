import NavItemData from "@/types/NavItemData";

import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdEvent, MdEmail } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";

export const NAV_ITEMS : NavItemData[] = [
    {
        label: "Home",
        href: "/",
        icon: AiOutlineHome
    },
    {
        label: "About",
        href: "/",
        icon: CgProfile
    },
    {
        label: "Events",
        href: "/",
        icon:MdEvent
    },
    {
        label: "Contact",
        href: "/",
        icon: MdEmail
    },
    {
        label: "Resources",
        href: "/",
        icon: MdMenuBook
    }
];