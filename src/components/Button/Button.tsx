import { ReactNode } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

interface Props {
  href: string;
  text?: string;
  btnType: string;
  target?: string;
  disabled?: boolean;
  children?: ReactNode;
}

export default function Button({
  href = "",
  text,
  btnType,
  target = "",
  disabled,
  children,
}: Props) {
  const content = text || children;

  return (
    <button className={styles.container} disabled={disabled}>
      <Link
        href={href}
        className={`${styles.btn} ${styles[btnType]}`}
        target={target}
      >
        {content}
      </Link>
    </button>
  );
}
