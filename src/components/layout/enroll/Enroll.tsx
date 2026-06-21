import Link from "next/link";

export default function Enroll() {
    return (
        <Link href="/public"
              className="text-(--background) bg-(--accent) text-[1.5rem]
                         w-62.5 pt-4 pb-4 text-center rounded-lg"
        >
            Join Us
        </Link>
    );
}