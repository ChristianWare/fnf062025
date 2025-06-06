import Explain from "../Explain/Explain";
import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <section className={styles.container}>
      <Explain />
    </section>
  );
}
