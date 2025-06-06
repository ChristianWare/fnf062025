import FontsandFooters from "@/components/FontsandFooters/FontsandFooters";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import Why from "@/components/Why/Why";
import Focus from "@/components/Focus/Focus";
import Contact2 from "@/components/Contact2/Contact2";

export default function Home() {
  return (
    <main>
      <div className={styles.scrollContainer}>
        <Hero />
        <FontsandFooters />
        <ProjectSection />
        <Why />
        <Focus />
        <Contact2 />
        {/* <Support /> */}
        {/* <AboutIntro />
        <ListOfServices /> */}
        {/* How it works */}
      </div>
    </main>
  );
}
