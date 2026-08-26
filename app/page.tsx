import { Approach } from "@/components/approach";
import { Audiences } from "@/components/audiences";
import { ContactProvider } from "@/components/contact-provider";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Services } from "@/components/services";
import { Why } from "@/components/why";

export default function HomePage() {
  return (
    <ContactProvider>
      <Navbar />
      <main id="main" className="overflow-x-hidden">
        <Hero />
        <Services />
        <Why />
        <Approach />
        <Audiences />
        <Cta />
      </main>
      <Footer />
    </ContactProvider>
  );
}
