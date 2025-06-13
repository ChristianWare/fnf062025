import Faq from "@/components/Faq/Faq";
import FAQPageIntro from "./components/FAQPageIntro/FAQPageIntro";
import ContactHero from "@/components/ContactHero/ContactHero";

export default function FAQPage() {
  return (
    <main>
      <FAQPageIntro />
      <Faq />
      <ContactHero />
    </main>
  );
}
