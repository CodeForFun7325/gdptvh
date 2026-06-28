import Link from "next/link";

export default function Learn() {
    return (
        <Link href="/"
              className="block bg-(--accent) text-(length:--text-button) text-(--background)
                         w-40 pt-2 pb-2 text-center mt-2 mb-2 rounded-lg">
            Learn More
        </Link>
    );
}