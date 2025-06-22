import styles from "./Logo.module.css";
import Link from "next/link";
import Thunder from "@/icons/Thunder/Thunder";

interface Props {
  size?: string;
  color?: string;
}

const Logo = ({ size = "", color = "" }: Props) => {
  return (
    <Link
      href='/'
      className={`${styles.logo} ${styles[size]} ${styles[color]}`}
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
      <Thunder /> Fonts & Footers
    </Link>
  );
};

export default Logo;
