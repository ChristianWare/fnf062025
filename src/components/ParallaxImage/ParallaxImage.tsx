import styles from "./ParallaxImage.module.css";
import Image, { StaticImageData } from "next/image";
import SectionIntro from "../SectionIntro/SectionIntro";

interface ParallaxImageProps {
  src: string | StaticImageData;
  alt: string;
  title: string;
  color?: string;
  border?: string;
}

export default function ParallaxImage({
  src,
  alt,
  title,
  color = "",
  border = "",
}: ParallaxImageProps) {
  return (
    <div className={styles.parent}>
      <div className={`${styles.top} ${styles[color]} ${styles[border]}`}>
        <SectionIntro title={title} color='black' dotColor='blackDot' />
      </div>

      <div className={`${styles.container} ${styles[color]} ${styles[border]}`}>
        <div className={styles.imgContainer}>
          <Image
            fill
            src={typeof src === "string" ? src : src.src}
            alt={alt}
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
}
