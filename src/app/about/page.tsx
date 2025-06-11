import AboutIntro from "@/components/AboutIntro/AboutIntro";
import AboutHero from "./components/AboutHero/AboutHero";
import Contact2 from "@/components/Contact2/Contact2";
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
      <Contact2 />
    </main>
  );
}
