import { Approach } from "@/components/approach";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { People } from "@/components/people";
import { Proof } from "@/components/proof";
import { Services } from "@/components/services";
import { Story } from "@/components/story";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Story />
        <Services />
        <People />
        <Approach />
        <Proof />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
