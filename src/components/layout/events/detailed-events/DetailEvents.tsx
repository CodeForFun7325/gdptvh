import Link from "next/link";
import Image from "next/image";

export default function DetailEvents() {
    return (
        <Link href="/" className="flex flex-[0_0_400]">
            <Image
                src="/imgs/home/about/FamilyPhoto.jpg"
                alt="temp picture"
                width={375}
                height={200}
                className="rounded-l-2xl rounded-r-2xl mt-4 mb-4 ml-1 mr-1"
            />
        </Link>
    );
}