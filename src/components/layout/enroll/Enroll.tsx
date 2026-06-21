import Link from "next/link";

export default function Enroll() {
    return (
        <Link href="/"
              className="text-(--background) bg-(--accent) text-[1.5rem]
                                pl-20 pr-20 pt-4 pb-4
                                rounded-lg lg:pl-4 lg:pr-4 lg:pt-2 lg:pb-2 lg:text-[1rem] lg:ml-4 lg:mr-4"
        >
            Join Us
        </Link>
    );
}