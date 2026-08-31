import Link from "next/link";
import CalendarSquare from "./CalendarSquare";

export default function MiniEvents({ event, fromDate, toDate, location, hideTopBorder } :
                                   { event: string, fromDate: Date, toDate: Date, location:string, hideTopBorder: boolean }) {

    return (
        <Link href="/public" className={`flex items-center w-screen text-[#A5D6A7] pt-2 pb-2 
                            ${hideTopBorder ? "" : "border-t-2 border-(--quaternary)"}`}>

            <CalendarSquare fromDate={fromDate} toDate={toDate}/>
            <div className="pl-4 pr-4">
                <h5 className="font-semibold text-(--secondary) text-(length:--text-h5)">{event}</h5>
                <p className="text-[#3E424B]">{location}</p>
            </div>
        </Link>
    );
}