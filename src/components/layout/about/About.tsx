import Image from "next/image";
import Learn from "./Learn";

import "./About.css";

export default function About() {
    return (
        <section aria-label="About us and our mission.">

            <div className="mt-9 mb-9  pl-4 pr-4 flex max-w-375 justify-around items-center ml-auto mr-auto">

                <div className="flex">
                    <Image src="/imgs/home/about/BuddhismWheelOfDharma.jpg"
                           alt="Buddhism's wheel of dharma."
                           width={1024}
                           height={1024}
                           className="w-17.5 h-17.5
                                      md:w-20 md:h-20
                                      lg:w-25 lg:h-25"/>

                    <div aria-label="Mission statement." className="ml-3 mr-3 sm:max-w-120">
                        <h2 className="font-bold text-(--primary) text-(length:--text-h2)">Our Mission</h2>
                        <p className="text-(length:--text-p)">
                            We inspire the youth to cultivate wisdom, compassion, and mindfulness through Buddha's teachings and service to others.
                        </p>

                        <Learn />
                    </div>

                </div>

                <div className="about-image-container hidden shrink-0 rounded-2xl h-auto
                                sm:block sm:w-70 sm:h-45
                                md:w-90
                                lg:w-120 lg:h-70
                                xl:w-150
                                2xl:w-200"
                     aria-label="This container displays an image of a vow ceremony to officially recognize new youth leaders"/>
            </div>

        </section>
    );
}