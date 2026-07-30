import Link from "next/link";

export default function MiniEvents({ event, fromDate, toDate, hideTopBorder } :
                                   { event: string, fromDate: Date, toDate: Date, hideTopBorder: boolean }) {

    return (
        <Link href="/" className={`flex items-center w-screen text-[#A5D6A7] ${hideTopBorder ? "" : "border-t-2 border-(--quaternary)"}`}>
            <div className="w-full pt-4 pb-4">
                <h5 className="font-semibold text-(--secondary) text-(length:--text-h5)">{event}</h5>
                <p className="text-[#3E424B]">{fromDate.toDateString()} - {toDate.toDateString()}</p>
            </div>
        </Link>
    );
}