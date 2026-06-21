import Navbar from "@/components/layout/navigation/Navbar";
import Canvas from "@/components/layout/canvas/Canvas";

export default function Header() {
    return (
        <section aria-label="Header section of the page. It displays the navigation bar and image canvas."
                 className="relative">

            <Navbar />
            <Canvas />
        </section>
    );

}