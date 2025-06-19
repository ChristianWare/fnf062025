import SectionIntroArea from "../SectionIntroArea/SectionIntroArea";
import styles from "./Problem.module.css";
import LayoutWrapper from "@/components/LayoutWrapper";

const Problem = () => {
  const data = [
    {
      title: "Slow Page Loading Times",
      description:
        "A slow website frustrates customers and leads to abandoned carts, costing you sales and damaging your brand's reputation.",
    },
    {
      title: "Bad Mobile Phone Experience",
      description:
        "Many e-commerce sites struggle to deliver a seamless shopping experience on mobile devices.",
    },
    {
      title: "Complicated Checkout Process",
      description:
        "A confusing or lengthy checkout process causes potential buyers to abandon their carts, leaving revenue on the table.",
    },
    {
      title: "Low Search Engine Visibility",
      description:
        "Without proper optimization, your website fails to rank on search engines, making it hard for potential customers to find you online.",
    },
    {
      title: "Poor Inventory Management",
      description:
        "Managing products, stock levels, and updates can become overwhelming, leading to mistakes and unhappy customers.",
    },
  ];

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.problemContainer}>
            {/* <h2 className={styles.heading}>Problems we solve</h2>
            <p className={styles.copy}>
              Shoppers leave slow, cluttered storefronts in seconds. Generic
              templates and bloated plugins cripple performance, frustrate
              visitors, and drain ad budgets. You deserve a store engineered for
              speed, stability, and storytelling—without hiring an in-house tech
              team or wading through freelance uncertainty.
            </p> */}
            <SectionIntroArea
              sectionTitle='Our Solutions'
              heading='Problems we solve'
              copy='Shoppers leave slow, cluttered storefronts in seconds. Generic
              templates and bloated plugins cripple performance, frustrate
              visitors, and drain ad budgets. You deserve a store engineered for
              speed, stability, and storytelling—without hiring an in-house tech
              team or wading through freelance uncertainty.'
              border='grayBorder'
              color='tan'
              dotColor='tanDot'
              copyColor='tanCopy'
            />
          </div>
        </div>
        <div className={styles.bottom}>
          {data.map((x, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.blackDot} />
              <span className={styles.index}>0{index + 1}</span>
              <div className={styles.cardRight}>
                <h3 className={styles.title}>{x.title}</h3>
                <p className={styles.description}>{x.description}</p>
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default Problem;
