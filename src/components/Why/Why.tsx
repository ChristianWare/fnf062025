import styles from "./Why.module.css";
import ParallaxImage from "../ParallaxImage/ParallaxImage";
import Img1 from "../../../public/images/serviceii.jpg";
import LayoutWrapper from "../LayoutWrapper";
import SectionIntroArea from "../SectionIntroArea/SectionIntroArea";

const data = [
  {
    id: 1,
    title: "Tailored Design",
    desc: "Every pixel is crafted around your brand and products, not crammed into a generic theme, so shoppers feel they’re on a store made just for them.",
  },
  {
    id: 3,
    title: "Smooth Interactions",
    desc: "Subtle animations and intuitive transitions guide visitors naturally from discovery to checkout, boosting engagement and sales.",
  },
  {
    id: 4,
    title: "Future-Proof Flexibility",
    desc: "A clean, modular architecture lets you add features or integrations later without costly rebuilds or platform limitations.",
  },
  {
    id: 5,
    title: "True Ownership",
    desc: "You control every line of code—no monthly template fees, no lock-in—so scaling or moving platforms is always your choice.",
  },
  {
    id: 2,
    title: "Lightning-Fast Performance",
    desc: "Hand-written code removes unnecessary bloat, letting pages load in under a second and keeping potential buyers from bouncing away.",
  },
];

export default function Why() {
  return (
    <section className={styles.container} id='about'>
      <LayoutWrapper>
        <div className={styles.parent}>
          <div className={styles.bottom}>
            <div className={styles.bottomLeft}>
              <div className={styles.sectionIntroAreaBox}>
                <SectionIntroArea
                  sectionTitle='Why Fonts & Footers?'
                  heading='Why Work with us?'
                />
              </div>
              <div className={styles.imgContainer}>
                <ParallaxImage
                  src={Img1}
                  alt='Fonts & Footers office'
                  title='Fonts & Footers'
                  color='tan'
                  border='taniiiBorder'
                />
              </div>
            </div>
            <div className={styles.bottomRight}>
              {data.map((item) => (
                <div className={styles.card} key={item.id}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.desc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
