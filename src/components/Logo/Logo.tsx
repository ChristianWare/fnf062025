import styles from "./Logo.module.css";
import Link from "next/link";
import Thunder from "@/icons/Thunder/Thunder";

interface Props {
  size?: string;
  color?: string;
  backgroundColor?: string;
  title: string;
}

const Logo = ({
  size = "",
  color = "",
  title,
  backgroundColor = "",
}: Props) => {
  return (
    <Link
      href='/'
      className={`${styles.logo} ${styles[size]} ${styles[color]} ${styles[backgroundColor]}`}
    >
      <div className={styles.svgContainer}>
        <svg
          viewBox='0 0 16 16'
          preserveAspectRatio='none'
          className={styles.svgNotch}
        >
          <use href='#svg-815591482_180' />
        </svg>
      </div>
      <Thunder /> {title}
    </Link>
  );
};

export default Logo;
