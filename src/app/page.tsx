import About from "@/components/layout/about/About";
import EventsDashboard from "@/components/layout/events/events-dashboard/EventsDashboard";
import HomeHero from "@/components/layout/hero/HomeHero";

export default function Home() {
  return (
    <div className="overflow-x-clip">
      <HomeHero />
      <About />
      <EventsDashboard />
    </div>
  );
}
