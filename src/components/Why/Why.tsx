import styles from "./Why.module.css";
import ParallaxImage from "../ParallaxImage/ParallaxImage";
import Img1 from "../../../public/images/serviceii.jpg";
import LayoutWrapper from "../LayoutWrapper";
import SectionIntroArea from "../SectionIntroArea/SectionIntroArea";

const data = [
  {
    id: 4,
    title: "Slow Page",
    desc: "A slow website frustrates customers and leads to abandoned carts, costing you sales and damaging your brand's reputation.",
  },
  {
    id: 5,
    title: "Bad Mobile Experience",
    desc: "Many e-commerce sites struggle to deliver a seamless shopping experience on mobile devices.",
  },
  {
    id: 6,
    title: "Complicated Checkout",
    desc: "A confusing or lengthy checkout process causes potential buyers to abandon their carts, leaving revenue on the table.",
  },
  {
    id: 8,
    title: "Poor Inventory",
    desc: "Managing products, stock levels, and updates can become overwhelming, leading to mistakes and unhappy customers.",
  },
  {
    id: 7,
    title: "Low Search",
    desc: "Without proper optimization, your website fails to rank on search engines, making it hard for potential customers to find you online.",
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
