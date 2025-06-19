import styles from "./HowItWorks.module.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import Image from "next/image";
import Img1 from "../../../public/images/how.jpg";
import SectionIntroArea from "@/components/SectionIntroArea/SectionIntroArea";

const data = [
  {
    id: 1,
    feature: "Discovery & Goal Mapping",
    desc: "A quick strategy call and analytics review to pin down revenue targets, customer pain points, and brand voice before any design work begins.",
  },
  {
    id: 2,
    feature: "Strategic Blueprint",
    desc: "You receive a detailed project roadmap—site architecture, milestones, and fixed pricing—so you know exactly what’s coming and when.",
  },
  {
    id: 3,
    feature: "Interactive Prototype",
    desc: "We build a clickable Figma prototype of every page and interaction, allowing you to test user flows and request tweaks before code is written.",
  },
  {
    id: 4,
    feature: "Build & Integrate",
    desc: "Our developers turn the prototype into a high-performance storefront, integrating payment gateways, inventory systems, and marketing tools.",
  },
  {
    id: 5,
    feature: "Launch & Growth Tune-Ups",
    desc: "After go-live we monitor performance, run quick-win A/B tests, and provide 30 days of complimentary support to ensure the site hits your KPIs.",
  },
];

const HowItWorks = () => {
  return (
    <section className={styles.container}>
      <div className={styles.parent}>
        <LayoutWrapper>
          <div className={styles.box}>
            <div className={styles.middle}>
              <SectionIntroArea
                sectionTitle='The process'
                heading='how it works'
              />
            </div>
            <div className={styles.bottom}>
              {data.map((x) => (
                <div key={x.id} className={styles.card}>
                  <span className={styles.blackDot} />
                  <div className={styles.indexContainer}>
                    <span className={styles.index}>{x.id}</span>
                  </div>
                  <div>
                    <h3 className={styles.feature}>{x.feature}</h3>
                    <p className={styles.desc}>{x.desc}</p>
                  </div>
                </div>
              ))}
              <div className={styles.imgContainer}>
                <Image src={Img1} alt='' title='' fill className={styles.img} />
              </div>
            </div>
          </div>
        </LayoutWrapper>
      </div>
    </section>
  );
};
export default HowItWorks;
