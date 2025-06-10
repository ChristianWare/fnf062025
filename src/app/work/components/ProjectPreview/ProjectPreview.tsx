// ProjectPreview.tsx
import styles from "./ProjectPreview.module.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import { projects } from "@/lib/data";
import ProjectDetails from "../ProjectDetails/ProjectDetails";

export default function ProjectPreview() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.bottom}>
          {projects.map((project) => (
            <ProjectDetails key={project.id} project={project} />
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
}
