import styles from "./SectionHeading2.module.css";

interface Props {
  title?: string;
  color?: string;
}

export default function SectionHeading2({ title, color = "" }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={`${styles[color]} ${styles.title}`}>{title}</h2>
      </div>
    </div>
  );
}
