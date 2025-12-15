import Hero from "@/components/home/Hero";
import Statistics from "@/components/home/Statistics";
import Expertise from "@/components/home/Expertise";
import Subsidiaries from "@/components/home/Subsidiaries";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center text-white font-open-sans">
      <Hero />
      <Statistics />
      <Expertise />
      <Subsidiaries />
      <About />
      <Contact />
    </main>
  );
}
