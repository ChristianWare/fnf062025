import styles from "./Logo.module.css";
import Link from "next/link";
import Thunder from "../../icons/lightning.svg";

interface Props {
  size?: string;
  color?: string;
}

const Logo = ({ size = "", color = "" }: Props) => {
  return (
    <Link
      href={"/"}
      className={`${styles.logo} ${styles[size]} ${styles[color]}`}
    >
      <Thunder className={styles.icon} />
    </Link>
  );
};
export default Logo;
