import Link from "next/link";
import CalendarSquare from "./CalendarSquare";

export default function MiniEvents({ eventName, eventFromDate, eventToDate, location, hideTopBorder } :
                                   { eventName: string, eventFromDate: Date, eventToDate: Date, location:string, hideTopBorder: boolean }) {

    return (
        <Link href="/public" className={`flex items-center w-[90vw] text-[#A5D6A7] pt-2 pb-2 
                            ${hideTopBorder ? "" : "border-t-2 border-(--quaternary)"}`}>

            <CalendarSquare fromDate={eventFromDate} toDate={eventToDate} />
            <div className="pl-4 pr-4">
                <h5 className="font-semibold text-(--secondary) text-(length:--text-h5)">{eventName}</h5>
                <p className="text-[#3E424B]">{location}</p>
            </div>
        </Link>
    );
}