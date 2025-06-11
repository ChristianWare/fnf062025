import Contact2 from "@/components/Contact2/Contact2";
import ServicesHero from "./components/ServicesHero/ServicesHero";
import ContactHero from "@/components/ContactHero/ContactHero";
import ListOfServices from "./components/ListOfServices/ListOfServices";
import Why from "@/components/Why/Why";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ListOfServices />
      <Why />
      <ContactHero />
      <Contact2 />
    </main>
  );
}
