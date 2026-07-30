import Header from "@/components/layout/header/Header";
import About from "@/components/layout/about/About";
import EventsDashboard from "@/app/events/components/events-dashboard/EventsDashboard";

export default function Home() {
  return (
      <>
          <Header />
          <About />
          <EventsDashboard />
      </>
  );
}
