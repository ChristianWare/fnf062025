import FontsandFooters from "@/components/FontsandFooters/FontsandFooters";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import Why from "@/components/Why/Why";
import Support from "@/components/Support/Support";
// import AboutIntro from "@/components/AboutIntro/AboutIntro";
import Focus from "@/components/Focus/Focus";

export default function Home() {
  return (
    <main>
      <div className={styles.scrollContainer}>
        <Hero />
        <FontsandFooters />
        <ProjectSection />

        <Why />
        <Support />
        <Focus />
        {/* <AboutIntro /> */}
      </div>
    </main>
  );
}
