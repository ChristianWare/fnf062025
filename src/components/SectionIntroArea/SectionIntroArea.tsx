import SectionIntro from "../SectionIntro/SectionIntro";
import styles from "./SectionIntroArea.module.css";

interface Props {
  sectionTitle: string;
  heading: string;
  color?: string;
  copy?: string;
  dotColor?: string;
  border?: string;
  borderBottom?: string;
}

export default function SectionIntroArea({
  sectionTitle,
  heading,
  copy,
  color = "",
  dotColor = "",
  border = "",
  borderBottom = "",
}: Props) {
  return (
    <div
      className={`${styles.container} ${styles[border]} ${styles[borderBottom]}`}
    >
      <div className={styles.sectionHeadingContainer}>
        <SectionIntro title={sectionTitle} color={color} dotColor={dotColor} />
      </div>
      <div className={styles.headingClip}>
        <h2 className={`${styles.heading} ${styles[color]}`}>{heading}</h2>
        {copy && <p className={`${styles.copy} ${styles[color]}`}>{copy}</p>}
      </div>
    </div>
  );
}
