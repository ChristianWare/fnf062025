import WorkPageIntro from "./components/WorkPageIntro/WorkPageIntro";
import ContactHero from "@/components/ContactHero/ContactHero";
import ProjectPreview from "./components/ProjectPreview/ProjectPreview";
import Support from "@/components/Support/Support";

export default function WorkPage() {
  return (
    <main>
      <WorkPageIntro />
      <ProjectPreview />
      <Support />
      <ContactHero />
    </main>
  );
}
