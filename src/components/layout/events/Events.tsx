import Link from "next/link";

export default function Events() {
    return (
        <Link href="/"
              className="text-(--background) bg-transparent text-(length:--text-button)
                         w-62.5 pb-3 pt-3 text-center rounded-lg border m-2">
            Upcoming Events
        </Link>
    );
}