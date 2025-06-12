import { ReactNode } from "react";
import styles from "./FalseButton.module.css";

interface FalseButtonProps {
  text?: string;
  btnType?: "primary" | "secondary" | string;
  children?: ReactNode;
}

export default function FalseButton({
  text,
  btnType = "primary",
  children,
}: FalseButtonProps) {
  const content = text || children;

  return (
    <button className={styles.container}>
      <div className={`${styles.btn} ${styles[btnType]}`}>{content}</div>
    </button>
  );
}
