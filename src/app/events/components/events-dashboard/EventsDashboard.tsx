import MiniEvents from "@/app/events/components/minimal-events/MiniEvents";

import EventsData from "@/types/events/Events";

export default function EventsDashboard() {

    // This data is only used for development purposes.
    // Once we can actually use real data then we will swap this out.
    const tempData : EventsData[] = [
        {
            eventName: "Summer Camp",
            eventFromDate: new Date(2020, 7, 20),
            eventToDate: new Date(2020, 7, 24)
        },
        {
            eventName: "Training Camp",
            eventFromDate: new Date(2020, 8, 20),
            eventToDate: new Date(2020, 8, 24)
        },
        {
            eventName: "Fundraiser",
            eventFromDate: new Date(2020, 9, 9),
            eventToDate: new Date(2020, 9, 10)
        }
    ];

    let MiniEventComponents = tempData.map((event, index) => {
        const isFirst : boolean = index == 0;

        return (
            <MiniEvents key={event.eventName}
                        event={event.eventName}
                        fromDate={event.eventFromDate}
                        toDate={event.eventToDate}
                        hideTopBorder={isFirst}/>
        );
    });

    let DetailedEventComponents = null;

    return (
        <section aria-label="Showcases all the upcoming events"
                 className="p-4">
            <h3 className="font-bold text-(--primary) text-(length:--text-h3)">Upcoming Events</h3>

            <div className="flex flex-col sm:hidden">
                { MiniEventComponents }
            </div>

            <div className="hidden sm:flex flex-col pl-2 pr-2">
                { DetailedEventComponents }
            </div>

        </section>
    );
}