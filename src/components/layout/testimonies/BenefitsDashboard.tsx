import { IconType } from "react-icons";

import { BENEFITS } from "@/constants/benefits/Benefits";
import BenefitData from "@/types/benefits/BenefitData";

export default function BenefitsDashboard() {

    // Benefit Card Component
    function BenefitCard({ icon: Icon, benefit, description } : BenefitData) {
        return (
            <div className="border-2 border-(--quaternary) rounded-md flex flex-col items-center w-89.75 m-1 p-3">
                <Icon size={80} color="var(--accent)" className="mt-3 mb-3"/>
                <h5 className="text-(length:--text-h5) text-(--primary)">{benefit}</h5>
                <p>{description}</p>
            </div>
        );
    }

    const benefitCards = BENEFITS.map((item, index) => {
        return (
            <BenefitCard key={index}
                         icon={item.icon}
                         benefit={item.benefit}
                         description={item.description}/>
        )

    });

    return (
        <div aria-label="Benefits of being a GDPT member."
             className="flex flex-wrap justify-center items-center">
            { benefitCards }
        </div>
    );
}