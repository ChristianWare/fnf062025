import AboutIntro from "@/components/AboutIntro/AboutIntro";
import AboutHero from "./components/AboutHero/AboutHero";
import ContactHero from "@/components/ContactHero/ContactHero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Problem from "./components/Problem/Problem";
import HomePageSolutions from "./components/HomePageSolutions/HomePageSolutions";
// import Circle from "@/components/Circle/Circle";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutIntro />
      <HowItWorks />
      <Problem />
      <HomePageSolutions />
      <ContactHero />
    </main>
  );
}
