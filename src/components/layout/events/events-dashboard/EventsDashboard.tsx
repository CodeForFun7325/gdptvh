import MiniEvents from "@/components/layout/events/minimal-events/MiniEvents";

import EventsData from "@/types/events/Events";

export default function EventsDashboard() {

    // This data is only used for development purposes.
    // Once we can actually use real data then we will swap this out.
    const tempData : EventsData[] = [
        {
            eventName: "Summer Camp",
            eventFromDate: new Date(2020, 7, 20),
            eventToDate: new Date(2020, 8, 24), 
            location: "Seattle, WA"
        },
        {
            eventName: "Training Camp",
            eventFromDate: new Date(2020, 8, 20),
            eventToDate: new Date(2020, 9, 24),
            location: "Renton, WA"
        },
        {
            eventName: "Fundraiser",
            eventFromDate: new Date(2020, 9, 9),
            eventToDate: new Date(2020, 9, 9), 
            location: "Kent, WA"
        }
    ];

    let MiniEventComponents = tempData.map((event, index) => {
        const isFirst : boolean = index == 0;

        return (
            <MiniEvents key={event.eventName}
                        event={event.eventName}
                        fromDate={event.eventFromDate}
                        toDate={event.eventToDate}
                        location={event.location}
                        hideTopBorder={isFirst}/>
        );
    });

    let DetailedEventComponents = null;

    return (
        <section aria-label="Showcases all the upcoming events"
                 className="mt-(--home-page-section-margin-top)
                            mb-(--home-page-section-margin-bottom)
                            ml-(--home-page-section-margin-left)
                            mr-(--home-page-section-margin-right)
                            pl-(--home-page-section-padding-left)
                            pr-(--home-page-section-padding-right)
                            max-w-(--home-page-max-section-width)">
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