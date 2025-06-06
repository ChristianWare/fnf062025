"use client";

import styles from "./Support.module.css";
import LayoutWrapper from "../LayoutWrapper";
// import Explain from "../Explain/Explain";

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
    feature: "Multi-vendor marketplaces",
    desc: "→ Platforms hosting multiple sellers, perfect for community marketplaces, industry-specific exchanges, and businesses looking to create their own Amazon or Etsy-like ecosystem.",
  },
  {
    id: 7,
    feature: "Rental platforms",
    desc: "→ Temporary-use item booking systems ideal for equipment rental businesses, property managers, vehicle rentals, and peer-to-peer sharing economy ventures.",
  },
];

export default function Support() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>End-to-end support</h2>
          {/* <Explain /> */}
        </div>
        <div className={styles.content}>
          <div className={styles.right}>
            {data.map((x) => (
              <div className={styles.card} key={x.id}>
                <div className={styles.cardTop}>
                  <span className={styles.id}>0{x.id}.</span>
                </div>
                <div className={styles.cardBottom}>
                  <h4 className={styles.feature}>{x.feature}</h4>
                  <p className={styles.desc}>{x.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
