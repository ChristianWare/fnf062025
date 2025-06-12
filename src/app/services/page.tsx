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
    </main>
  );
}
