import styles from "./HomePageSolutions.module.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import SectionHeading2 from "@/components/SectionHeading2/SectionHeading2";
import SectionIntro from "@/components/SectionIntro/SectionIntro";
import Image from "next/image";
import Img1 from "../../../../../public/images/easy.jpg";

const data = [
  {
    id: 1,
    title: "Brand Storytelling",
    desc: "Emotion-led visuals and copy embed your value prop in shoppers’ minds—averaging a 28 % lift in time‑on‑page.",
    span: "one",
  },
  {
    id: 2,
    title: "Conversion-Focused Design",
    desc: "UX patterns and micro-interactions guide buyers from browse to checkout, lifting add‑to‑cart rates 15‑30 %.",
    span: "two",
  },
  {
    id: 3,
    title: "Performance‑First Engineering",
    desc: "Mobile‑first code ships sub‑1 s LCP and 90 + Lighthouse scores, so speed never costs you a sale.",
    span: "three",
  },
  {
    id: 4,
    title: "Seamless System Integration",
    desc: "Shopify, ERP, CRM, and fulfillment flow in one loop—zero manual re‑keying, fewer stockouts, happier ops.",
    span: "four",
  },
  // {
  //   id: 5,
  //   title: "Data‑Driven Optimisation",
  //   desc: "30‑day analytics → A/B → deploy cycles compound small wins into sustained revenue growth.",
  //   span: "five",
  // },
];

export default function HomePageSolutions() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <SectionIntro title='How it works' />
          <br />
          <div className={styles.sectionHeadingContainer}>
            <SectionHeading2
              title='we make working with us easy'
              color='yellow'
            />
          </div>
        </div>
        <div className={styles.bottom}>
          {data.map((x) => (
            <div key={x.id} className={`${styles.card} ${styles[x.span]}`}>
              <h3 className={styles.title}>{x.title}</h3>
              <p className={styles.desc}>{x.desc}</p>
            </div>
          ))}
          <div className={styles.imgContainer}>
            <Image src={Img1} fill alt='' title='' className={styles.img} />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
