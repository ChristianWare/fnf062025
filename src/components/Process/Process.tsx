import styles from "./Process.module.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import SectionIntroArea from "@/components/SectionIntroArea/SectionIntroArea";

const data = [
  {
    id: 1,
    feature: "Mobile-first responsive design",
    desc: "→ Every page adapts fluidly to phones, tablets, and desktops, ensuring faster mobile checkout and higher Google ranking.",
  },
  {
    id: 2,
    feature: "Performance & Core Web Vitals",
    desc: "→ Code and image pipelines tuned for sub-1.5 s Largest Contentful Paint and >90 Lighthouse scores out of the box.",
  },
  {
    id: 3,
    feature: "SEO & schema foundations",
    desc: "→ Clean URL structure, JSON-LD product or service schema, and meta-tag automation so search engines understand and index your site from day one.",
  },
  {
    id: 4,
    feature: "Accessible UI components",
    desc: "→ WCAG-compliant colour contrast, keyboard navigation, and ARIA labels so every customer can shop or book with ease.",
  },
  {
    id: 5,
    feature: "Secure payment & data hygiene",
    desc: "→ PCI-compliant Stripe or Shopify Payments integration, HTTPS everywhere, and GDPR-ready consent banners.",
  },
  {
    id: 6,
    feature: "Self-serve content manager",
    desc: "→ Headless CMS or Shopify metafields that let your team edit copy, images, and pricing without touching code.",
  },
  {
    id: 7,
    feature: "Launch training & 14-day support",
    desc: "→ Recorded walk-through, step-by-step manuals, and two weeks of bug-fix coverage to keep your go-live stress-free.",
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
                    sectionTitle="What's included"
                    heading='Everything we build comes with...'
                    border='tanBorder'
                    copy='Every Fonts & Footers build—whether it’s an online store, a booking portal, or a rental platform—ships with this same quality baseline. That means clients don’t pay extra for fundamentals like mobile speed, security, accessibility, or search visibility; they’re woven into the code from the first commit, letting you focus your proposal on the strategic add-ons that truly differentiate each project.'
                  />
                </div>
              </div>
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
