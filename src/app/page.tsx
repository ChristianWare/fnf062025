import FontsandFooters from "@/components/FontsandFooters/FontsandFooters";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import Why from "@/components/Why/Why";
import Support from "@/components/Support/Support";

export default function Home() {
  return (
    <main>
      <div className={styles.scrollContainer}>
        <Hero />
        <FontsandFooters />
        <ProjectSection />

        <Why />
        <Support />

        {/* Support to go here */}
      </div>
    </main>
  );
}
