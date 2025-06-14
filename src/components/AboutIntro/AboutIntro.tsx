import styles from "./AboutIntro.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Img1 from "../../../public/images/aboutIntro.jpg";
import Image from "next/image";
import SectionHeading2 from "@/components/SectionHeading2/SectionHeading2";

const lightningMaskURI =
  "url(\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2027.793%2027.793'%3E%3Cpolygon%20fill='white'%20points='20.972%200%205.076%2015.803%2010.972%2015.803%206.44%2027.793%2022.716%2011.989%2016.819%2011.989'/%3E%3C/svg%3E\")";

export default function AboutIntro() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* ───────────── Left column ───────────── */}
        <div className={styles.left}>
          <LayoutWrapper>
            <div className={styles.leftContent}>
              <div className={styles.sectionHeadingContainer}>
                <SectionHeading2 title='About Us' color='tan' />
              </div>

              <p className={styles.heading}>
                Founded by a team of e-commerce enthusiasts with backgrounds in
                both design and development, Fonts &amp; Footers was born from
                the recognition that successful online stores require both
                beautiful aesthetics and robust functionality.
              </p>

              <p className={styles.copy}>
                Our name represents this philosophy – &ldquo;Fonts&rdquo;
                symbolizes the design elements that create emotional connections
                with your customers, while &ldquo;Footers&rdquo; represents the
                solid technical foundation that supports your business growth.
              </p>

              <p className={styles.copy}>
                Since our founding, we&apos;ve helped businesses across various
                industries establish and grow their e-commerce presence, always
                with a focus on creating solutions that convert visitors into
                customers and customers into advocates.
              </p>
            </div>
          </LayoutWrapper>
        </div>

        {/* ───────────── Right column (masked image) ───────────── */}
        <div className={styles.right}>
          <div
            className={styles.imgContainer}
            style={{
              /* Chrome / Safari */
              WebkitMaskImage: lightningMaskURI,
              WebkitMaskPosition: "center",
              WebkitMaskSize: "cover",
              WebkitMaskRepeat: "no-repeat",

              /* Firefox / Edge */
              maskImage: lightningMaskURI,
              maskPosition: "center",
              maskSize: "cover",
              maskRepeat: "no-repeat",
            }}
          >
            <Image src={Img1} fill title='' alt='' className={styles.img} />
          </div>
        </div>
      </div>
    </section>
  );
}
