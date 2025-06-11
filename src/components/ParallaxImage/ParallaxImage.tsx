
/* eslint-disable @next/next/no-img-element */
import styles from "./ParallaxImage.module.css";
import { StaticImageData } from "next/image";
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
  border = ""
}: ParallaxImageProps) {
  

  return (
    <div className={styles.parent}>
      <div className={`${styles.top} ${styles[color]} ${styles[border]}`}>
        <SectionIntro title={title} color='black' dotColor='blackDot' />
      </div>
      <div className={`${styles.container} ${styles[color]} ${styles[border]}`}>
        <div className={styles.parallaxWrapper}>
          <div className={styles.imgContainer}>
            <img
              src={typeof src === "string" ? src : src.src}
              alt={alt}
              style={{
                willChange: "transform",
                transform: "translateY(0) scale(1.5)",
              }}
              className={styles.img}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
