import FontsandFooters from "@/components/FontsandFooters/FontsandFooters";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import Why from "@/components/Why/Why";
import Support from "@/components/Support/Support";
import ContactHero from "@/components/ContactHero/ContactHero";
import Process from "@/components/Process/Process";
import AboutIntro from "@/components/AboutIntro/AboutIntro";
import ListOfServices from "@/components/ListOfServices/ListOfServices";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Faq from "@/components/Faq/Faq";
import Problem from "@/components/Problem/Problem";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer/Footer";
import ReviewSection from "@/components/ReviewSection/ReviewSection";
import ProjectPreview from "./work/components/ProjectPreview/ProjectPreview";

export default function Home() {
  return (
    <main>
      <div className={styles.scrollContainer}>
        <Hero />
        <FontsandFooters />
        <AboutIntro />
        <Problem />
        <ProjectPreview />
        <Support />
        <HowItWorks />
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
