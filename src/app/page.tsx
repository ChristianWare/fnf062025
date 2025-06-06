import FontsandFooters from "@/components/FontsandFooters/FontsandFooters";
import styles from "./page.module.css";
// import AboutIntro from "@/components/AboutIntro/AboutIntro";
// import Focus from "@/components/Focus/Focus";
import Hero from "@/components/Hero/Hero";
// import ListOfServices from "@/components/ListOfServices/ListOfServices";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import Support from "@/components/Support/Support";
import Why from "@/components/Why/Why";

export default function Home() {
  return (
    <main>
      <div className={styles.scrollContainer}>
        <Hero />
        <FontsandFooters />
        <ProjectSection />
        <Why />
        <Support />
        {/* <AboutIntro />
        <Focus />
        <ListOfServices /> */}
        {/* How it works */}
      </div>
    </main>
  );
}
