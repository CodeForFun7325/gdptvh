import Header from "@/components/layout/header/Header";
import About from "@/components/layout/about/About";
import EventsDashboard from "@/components/layout/events/events-dashboard/EventsDashboard";
import Testimonies from "@/components/layout/testimonies/Testimonies";

export default function Home() {
  return (
      <div className="overflow-x-clip">
          <Header />
          <About />
          <EventsDashboard />
          <Testimonies />
      </div>
  );
}
