import styles from "./HowItWorks.module.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import Image from "next/image";
import Img1 from "../../../../../public/images/how.jpg";

const data = [
  {
    id: 1,
    feature: "Quality over quantity",
    desc: "We take on a limited number of projects to ensure each client receives our full attention and the highest quality work.",
  },
  {
    id: 2,
    feature: "Clear Transparency",
    desc: "We believe in open communication about processes, timelines, and outcomes.",
  },
  {
    id: 3,
    feature: "Measurable results",
    desc: "We focus on metrics that matter to your business, not just vanity statistics.",
  },
  {
    id: 4,
    feature: "Long-term partnerships",
    desc: "We build relationships with our clients that extend beyond the initial project launch.",
  },
  {
    id: 5,
    feature: "Continuous learning",
    desc: "The e-commerce landscape is constantly evolving, and we stay at the forefront of industry developments.",
  },
];

const HowItWorks = () => {
  return (
    <section className={styles.container}>
      <div className={styles.parent}>
        <LayoutWrapper>
          <div className={styles.box}>
            <div className={styles.middle}>
              <h2 className={styles.heading}>
                Our Values: <br /> What Drives Us
              </h2>
            </div>
            <div className={styles.bottom}>
              {data.map((x) => (
                <div key={x.id} className={styles.card}>
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
