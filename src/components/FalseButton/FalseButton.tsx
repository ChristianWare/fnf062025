import { ReactNode, MouseEventHandler } from "react";
import styles from "./FalseButton.module.css";

interface FalseButtonProps {
  text?: string;
  btnType?: "primary" | "secondary" | string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  marquee?: boolean; // optional flag you’re already passing
}

export default function FalseButton({
  text,
  btnType = "primary",
  children,
  onClick,
}: FalseButtonProps) {
  const content = text ?? children;

  return (
    <button
      className={styles.container}
      onClick={onClick}
      type='button'
    >
      <div className={`${styles.btn} ${styles[btnType]}`}>{content}</div>
    </button>
  );
}
