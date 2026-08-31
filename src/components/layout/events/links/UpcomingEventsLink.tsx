/**
 * This component is the Upcoming Links on the main home page dashboard.
 * When the user clicks on this link, they should be taken to the events page
 * where they will see the full calendar and read events in full detail.
 */

import Link from "next/link";

export default function UpcomingEventsLink() {
    return (
        <Link href="/"
              className="text-(--background) bg-transparent text-(length:--text-button)
                         w-62.5 pb-3 pt-3 text-center rounded-lg border m-2">
            Upcoming Events
        </Link>
    );
}