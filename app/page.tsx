import Hero from "@/components/hero";
import About from "@/components/about";
import Speakers from "@/components/speakers";
import Schedule from "@/components/schedule";
import Sponsors from "@/components/sponsors";
import CTA from "@/components/cta";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Speakers />
      <Schedule />
      <Sponsors />
      <CTA />
    </div>
  );
}