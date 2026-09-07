import Link from "next/link";
import CalendarSquare from "@/components/layout/events/minimal-events/CalendarSquare";

import "./DetailEvents.css";

export default function DetailEvents({ eventName, eventFromDate, eventToDate, location } :
                                     { eventName: string, eventFromDate: Date, eventToDate: Date, location:string }) {


    const dateFormatter : Intl.DateTimeFormat = new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "2-digit",
        hour: "numeric",
        minute: "2-digit",
        hour12: false
    })

    return (
        <div className="flex flex-col flex-[0_0_400] mt-2 mb-2 justify-center items-center">
            {/* Event Picture */}
            <div className="event-picture"/>

            {/* Event Details */}
            <div className="flex shadow-lg rounded-b-[10px] w-93.75 p-3 min-h-37.5">
                <CalendarSquare fromDate={eventFromDate} toDate={eventToDate} />
                <div>
                    <h5 className="font-semibold text-(--primary) text-(length:--text-h5)">{eventName}</h5>
                    {/*<p>{`${eventFromDate} - ${eventToDate}`}</p>*/}
                    <p>{`${dateFormatter.formatRange(eventFromDate, eventToDate)}`}</p>
                    <Link href="/">Learn More</Link>
                </div>
            </div>
        </div>
    );
}