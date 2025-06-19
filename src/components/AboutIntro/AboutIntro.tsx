import styles from "./AboutIntro.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Img1 from "../../../public/images/aboutIntro.jpg";
import Image from "next/image";
import SectionIntroArea from "../SectionIntroArea/SectionIntroArea";

const services = [
  { id: 1, name: "Full-Build Storefronts" },
  { id: 2, name: "Performance Rescue" },
  { id: 3, name: "Conversion Optimization & A/B Testing" },
  { id: 4, name: "Maintenance & Growth Partnership" },
];

const lightningMaskURI =
  "url(\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2027.793%2027.793'%3E%3Cpolygon%20fill='white'%20points='20.972%200%205.076%2015.803%2010.972%2015.803%206.44%2027.793%2022.716%2011.989%2016.819%2011.989'/%3E%3C/svg%3E\")";

export default function AboutIntro() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <LayoutWrapper>
            <div className={styles.leftContent}>
              {/* <div className={styles.sectionHeadingContainer}>
                <SectionHeading2 title='About Us' color='tan' />
              </div> */}
              <SectionIntroArea
                sectionTitle='Our Story'
                heading='About Fonts & Footers'
                copy='Founded by a team of e-commerce enthusiasts with backgrounds in
                both design and development, Fonts &amp; Footers was born from
                the recognition that successful online stores require both
                beautiful aesthetics and robust functionality.'
                color='yellow'
                border='taniiBorder'
              />
              <p className={styles.copy}>
                We exist exclusively for small to mid-sized businesses that sell
                physical products online. Whether you move five SKUs or five
                thousand, we concentrate on headless Shopify and custom Next.js
                storefronts that scale with you. By niching down, we stay
                razor-sharp on e-commerce trends, checkout psychology, and
                back-office integrations that matter most to merchants—not
                generic “all-in-one” web services.
              </p>
              <span className={styles.servicesHeading}>We Specialize in:</span>
              <ul className={styles.servicesContainer}>
                {services.map((x) => (
                  <li className={styles.service} key={x.id}>
                    {x.name}
                    <span className={styles.blackDot} />
                  </li>
                ))}
              </ul>
            </div>
          </LayoutWrapper>
        </div>

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
