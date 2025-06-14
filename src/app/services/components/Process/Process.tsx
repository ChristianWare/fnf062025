import styles from "./Process.module.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import SectionIntroArea from "@/components/SectionIntroArea/SectionIntroArea";

const data = [
  {
    id: 1,
    feature: "B2C storefronts",
    desc: "→ Direct-to-consumer online shops ideal for retail brands, specialty goods, and independent artisans looking to sell products directly to end consumers.",
  },
  {
    id: 2,
    feature: "B2B portals",
    desc: "→ Business-focused platforms perfect for wholesalers, manufacturers, industrial suppliers, and service providers who primarily sell to other businesses rather than consumers.",
  },
  {
    id: 3,
    feature: "Subscription services",
    desc: "→ Recurring billing platforms ideal for software companies (SaaS), content creators, box subscription services, and membership organizations requiring regular payment processing.",
  },
  {
    id: 4,
    feature: "Digital product delivery",
    desc: "→ Platforms for selling and distributing non-physical goods, perfect for educational content creators, software developers, digital artists, and e-book publishers.",
  },
  {
    id: 5,
    feature: "Service booking platforms",
    desc: "→ Appointment and reservation systems ideal for consultants, healthcare providers, beauty professionals, fitness instructors, and event venues needing to manage client scheduling.",
  },
  {
    id: 6,
    feature: "Rental platforms",
    desc: "→ Temporary-use item booking systems ideal for equipment rental businesses, property managers, vehicle rentals, and peer-to-peer sharing economy ventures.",
  },
  {
    id: 7,
    feature: "Multi-vendor marketplaces",
    desc: "→ Platforms hosting multiple sellers, perfect for community marketplaces, industry-specific exchanges, and businesses looking to create their own Amazon or Etsy-like ecosystem.",
  },
];

export default function Process() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.leftContent}>
              <div className={styles.sectionHeadingContainer}>
                <div className={styles.sectionIntroAreaBox}>
                  <SectionIntroArea
                    sectionTitle='Why Fonts & Footers?'
                    heading='What we build'
                    copy="Whether you're selling directly to consumers, building a
                B2B portal, or creating a multi-vendor marketplace, we have the
                expertise to build the perfect solution for your business model:"
                  />
                </div>
              </div>
              {/* <p className={styles.heading}>
                Whether you&apos;re selling directly to consumers, building a
                B2B portal, or creating a multi-vendor marketplace, we have the
                expertise to build the perfect solution for your business model:
              </p> */}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.mapDataBox}>
              {data.map((x) => (
                <div className={styles.card} key={x.id}>
                  <span className={styles.blackDot} />
                  <div className={styles.cardLeft}>
                    <span className={styles.id}>0{x.id}.</span>
                  </div>
                  <div className={styles.cardRight}>
                    <h4 className={styles.feature}>{x.feature}</h4>
                    <p className={styles.desc}>{x.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
