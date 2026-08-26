import { Approach } from "@/components/approach";
import { Audiences } from "@/components/audiences";
import { About } from "@/components/about";
import { Credibility } from "@/components/credibility";
import { Cta } from "@/components/cta";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Services } from "@/components/services";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <div className="flex flex-col md:h-[calc(100svh-4.75rem)]">
          <Hero />
          <Credibility />
        </div>
        <About />
        <Services />
        <Experience />
        <Approach />
        <Audiences />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
