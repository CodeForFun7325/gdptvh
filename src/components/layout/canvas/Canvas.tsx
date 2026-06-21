import Enroll from "@/components/layout/enroll/Enroll";
import "./Canvas.css";

export default function Canvas() {

    return (
        <section aria-label="A canvas to display images and mission statements"
                 className="relative -top-15 left-0">

            <div className="absolute image-container w-screen h-125 brightness-40"/>

            <div className="relative top-20 w-screen text-(--background) p-3">
                <div>
                    <h2 className="font-bold text-3xl">
                        <span>Growing in</span>
                        <span>Wisdom.</span>
                        <span>Compassion.</span>
                        <span>Community.</span>
                    </h2>
                    <br/>
                    <p>
                        <span>A place for youth to learn, grow,</span>
                        <span>and make a positive in the world.</span>
                    </p>
                </div>

                <div className="flex mt-5">
                    <Enroll />
                </div>

            </div>
        </section>
    );
}