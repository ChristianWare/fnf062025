import styles from "./ProjectDetails.module.css";
import VideoSection from "../VideoSection/VideoSection";

interface Props {
  project: {
    title: string;
    video?: string;
  };
}

export default function ProjectDetails({ project }: Props) {
  return (
    <section className={styles.container}>
      {project.video && <VideoSection video={project.video} />}
      <h2 className={styles.title}>{project.title}</h2>
    </section>
  );
}
