import styles from "./ProjectDetails.module.css";
import VideoSection from "../VideoSection/VideoSection";
import SectionIntroArea from "@/components/SectionIntroArea/SectionIntroArea";
import Button from "@/components/Button/Button";

interface Props {
  project: {
    title: string;
    description: string;
    video?: string;
  };
}

export default function ProjectDetails({ project }: Props) {
  return (
    <div className={styles.container}>
      <SectionIntroArea
        sectionTitle='E-commerce'
        heading={project.title}
        border='greyBorder'
        smallHeading='smallHeading'
      />
      
      <div className={styles.video}>
        {project.video && <VideoSection video={project.video} />}
      </div>
        <div className={styles.btnContainer}>
          <Button href='/' btnType='black' text='Live Site' />
        </div>
    </div>
  );
}
