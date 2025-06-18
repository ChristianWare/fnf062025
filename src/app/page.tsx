import FontsandFooters from "@/components/FontsandFooters/FontsandFooters";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import Why from "@/components/Why/Why";
import Support from "@/components/Support/Support";
import ContactHero from "@/components/ContactHero/ContactHero";
import Process from "./services/components/Process/Process";
import AboutIntro from "@/components/AboutIntro/AboutIntro";
import ListOfServices from "./services/components/ListOfServices/ListOfServices";
// import HowItWorks from "./about/components/HowItWorks/HowItWorks";
import Faq from "@/components/Faq/Faq";
import Problem from "./about/components/Problem/Problem";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer/Footer";
import ReviewSection from "@/components/ReviewSection/ReviewSection";

export default function Home() {
  return (
    <main>
      <div className={styles.scrollContainer}>
        <Hero />
        <FontsandFooters />
        <AboutIntro />
        {/* <HowItWorks /> */}
        <Problem />
        <ProjectSection />
        <Support />
        <Why />
        <ListOfServices />
        <Process />
        <ReviewSection />
        <Faq />
        <ContactHero />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
