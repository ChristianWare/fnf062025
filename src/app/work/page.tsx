import Contact2 from "@/components/Contact2/Contact2";
import WorkPageIntro from "./components/WorkPageIntro/WorkPageIntro";
import ContactHero from "@/components/ContactHero/ContactHero";
import ProjectPreview from "./components/ProjectPreview/ProjectPreview";

export default function WorkPage() {
  return (
    <main>
      <WorkPageIntro />
      <ProjectPreview />
      <ContactHero />
      <Contact2 />
    </main>
  );
}
