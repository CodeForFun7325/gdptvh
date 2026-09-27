import BenefitData from "@/types/benefits/BenefitData";

import { PiBookOpenLight } from "react-icons/pi";
import { PiFlowerLotusLight } from "react-icons/pi";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { MdPeopleOutline } from "react-icons/md";

export const BENEFITS : BenefitData[] = [
    {
        icon: PiBookOpenLight,
        benefit: "Dharma Learning",
        description: "Deepen your knowledge of Buddhism"
    },
    {
        icon: PiFlowerLotusLight,
        benefit: "Meditation",
        description: "Cultivate mindfulness and inner peace"
    },
    {
        icon: LiaHandsHelpingSolid,
        benefit: "Community Service",
        description: "Serve others and create positive change"
    },
    {
        icon: MdPeopleOutline,
        benefit: "Fellowship",
        description: "Build life-time friendships"
    }
]