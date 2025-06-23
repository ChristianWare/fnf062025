

import styles from "./Focus.module.css";
import LayoutWrapper from "../LayoutWrapper";
import SectionIntro from "../SectionIntro/SectionIntro";
import ParallaxImage from "../ParallaxImage/ParallaxImage";
import Img1 from '../../../public/images/aboutiv.jpg'

const data = [
  {
    id: 1,
    title: "AI at your service",
    description:
      "AI transformation designed to streamline your shift and enhance efficiency.",
  },
  {
    id: 2,
    title: "All-access pass",
    description:
      "Generate reports, run processes, submit service tickets and more–all using AI.",
  },
  {
    id: 3,
    title: "Relentless support",
    description:
      "Our comprehensive SLA ensures systems run smoothly and questions are answered promptly.",
  },
];


export default function Focus() {
 

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <SectionIntro title='About Us' />
          <h2 className={styles.heading}>
            Your Shortcut To Innovation Starts Here
          </h2>
        </div>
        <div className={styles.middle}>
          <p className={styles.copy}>
            Fonts & Footers exists exclusively for small to mid-sized businesses
            that sell physical products online. Whether you move five SKUs or
            five thousand, we concentrate on headless Shopify and custom Next.js
            storefronts that scale with you.
          </p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.mpaDataContent}>
            {data.map((x) => (
              <div className={styles.card} key={x.id}>
                <h3 className={styles.title}>{x.title}</h3>
                <p className={styles.desc}>{x.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.imgContainer}>
          <ParallaxImage
            src={Img1}
            alt='Fonts & Footers office'
            title='Fonts & Footers'
            color="white"
            // border='taniiiBorder'
          />
        </div>
      </LayoutWrapper>
    </section>
  );
}
