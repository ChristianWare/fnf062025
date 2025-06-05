import styles from './SectionHeading2.module.css'

interface Props {
  title?: string;
}


export default function SectionHeading2({ title }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
              <h2 className={styles.title}>{title}</h2>
      </div>
    </div>
  );
}
