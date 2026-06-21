import Link from "next/link";

export default function Enroll() {
    return (
        <Link href="/public"
              className="text-(--background) bg-(--accent) text-[1.5rem]
                         w-62.5 pb-3 pt-3 text-center rounded-lg m-2"
        >
            Join Us
        </Link>
    );
}