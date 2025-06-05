import styles from "./page.module.css";
import AboutIntro from "@/components/AboutIntro/AboutIntro";
import Focus from "@/components/Focus/Focus";
import Hero from "@/components/Hero/Hero";
import ProblemsWeSolve from "@/components/ProblemsWeSolve/ProblemsWeSolve";

export default function Home() {
  return (
    <main>
      <div className={styles.scrollContainer}>
        <Hero />
        <AboutIntro />
        <ProblemsWeSolve />
        <Focus />
      </div>
    </main>
  );
}
