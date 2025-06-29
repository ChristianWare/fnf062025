import { ReactNode } from "react";
import styles from "./SectionArea.module.css";

interface Props {
  sectionTitle: string;
  children: ReactNode
}

export default function SectionArea({ sectionTitle, children }: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.parent}>
        <h2>{sectionTitle}</h2>
        {children}
      </div>
    </section>
  );
}
