import SectionIntro from "../SectionIntro/SectionIntro";
import styles from "./SectionIntroArea.module.css";

interface Props {
  sectionTitle: string;
  heading: string;
  copy?: string;
}

export default function SectionIntroArea({
  sectionTitle,
  heading,
  copy,
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.sectionHeadingContainer}>
        <SectionIntro title={sectionTitle} />
      </div>
      <div className={styles.headingClip}>
        <h2 className={styles.heading}>{heading}</h2>
        {copy && <p className={styles.copy}>{copy}</p>}
      </div>
    </div>
  );
}
