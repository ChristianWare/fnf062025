import FontsandFooters from "@/components/FontsandFooters/FontsandFooters";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import Why from "@/components/Why/Why";
import Support from "@/components/Support/Support";
import Focus from "@/components/Focus/Focus";
import ContactHero from "@/components/ContactHero/ContactHero";
import Process from "./services/components/Process/Process";

export default function Home() {
  return (
    <main>
      <div className={styles.scrollContainer}>
        <Hero />
        <FontsandFooters />
        <Focus />
        <ProjectSection />
        <Support />
        <Why />
        <Process />        
        <ContactHero />
      </div>
    </main>
  );
}
