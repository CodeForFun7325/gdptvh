import Enroll from "@/components/layout/enroll/Enroll";
import Events from "@/components/layout/events/Events";
import "./Canvas.css";

export default function Canvas() {

    return (
        <section aria-label="A canvas to display images and mission statements"
                 className="relative -top-15 left-0">

            <div className="absolute image-container w-screen h-125 brightness-40 lg:h-140" aria-label="hidden"/>

            <div className="relative flex flex-col space-around justify-center p-3 h-100 top-20 w-screen text-(--background) lg:w-[60vw] lg:items-center">
                <div>
                    <h2 className="font-bold text-3xl md:text-5xl">
                        <span>Growing in Wisdom.</span>
                        <span>Compassion. Courage.</span>
                    </h2>
                    <br/>
                    <p className="md:text-[1.5rem]">
                        <span>A place for youth to learn, grow, and</span>
                        <span>make a positive in the world.</span>
                    </p>
                </div>

                <div className="flex flex-col mt-5 md:flex-row">
                    <Enroll />
                    <Events />
                </div>

            </div>
        </section>
    );
}