import SectionIntro from "../SectionIntro/SectionIntro";
import styles from "./SectionIntroArea.module.css";

interface Props {
  sectionTitle: string;
  heading: string;
  color?: string;
  copy?: string;
  copyColor?: string;
  dotColor?: string;
  border?: string;
  borderBottom?: string;
  height?: string;
  smallHeading?: string;
}

export default function SectionIntroArea({
  sectionTitle,
  heading,
  copy,
  color = "",
  copyColor = "",
  dotColor = "",
  border = "",
  borderBottom = "",
  height = "",
  smallHeading = "",
}: Props) {
  return (
    <div
      className={`${styles.container} ${styles[border]} ${styles[borderBottom]} ${styles[height]}`}
    >
      <div className={styles.sectionHeadingContainer}>
        <SectionIntro title={sectionTitle} color={color} dotColor={dotColor} />
      </div>
      <div className={styles.headingClip}>
        <h2 className={`${styles.heading} ${styles[color]} ${styles[smallHeading]}`}>{heading}</h2>
        {copy && (
          <p className={`${styles.copy} ${styles[copyColor]}`}>{copy}</p>
        )}
      </div>
    </div>
  );
}
