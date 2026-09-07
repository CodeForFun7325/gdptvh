import CarouselProps from "@/types/events/EventCarousel";

export default function EventsCarousel( { events } : CarouselProps ) {
    return (
        <div className="hidden xs:flex mt-1 mb-1 ml-auto mr-auto overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex items-center justify-center ml-auto mr-auto">
                { events }
            </div>
        </div>
    )
}