import styles from "./ListOfServices.module.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import SectionIntroArea from "@/components/SectionIntroArea/SectionIntroArea";
import SectionHeading2 from "@/components/SectionHeading2/SectionHeading2";
import { pricingData } from "@/lib/data";

export default function ListOfServices() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.sectionHeadingContainer}>
            <SectionHeading2 title='Services + Pricing' color='tan' />
          </div>
        </div>
        <div className={styles.content}>
          {pricingData.map((a) => (
            <div key={a.id} className={styles.section}>
              <div className={styles.bottom}>
                <div className={styles.imgContainer}>
                  <SectionIntroArea
                    sectionTitle={`service ${a.id}`}
                    heading={a.service}
                    border='taniiiBorder'
                    smallHeading='smallHeading'
                    copy={a.desc}
                    height='height100'
                    copyColor='grayiiCopyColor'
                    paddingRight='paddingRight'
                  />
                </div>
                {a.servicesInclude.map((b) => (
                  <div key={b.id} className={styles.card}>
                    <div className={styles.cardContent}>
                      <div className={styles.cardTop}>
                        <h3 className={styles.serviceName}>{b.serviceName}</h3>
                      </div>
                      <div className={styles.cardBottom}>
                        <p className={styles.description}>{b.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className={styles.sectionIntroAreaBox}>
                  <SectionIntroArea
                    sectionTitle='Core Build:'
                    heading={a.price}
                    border='taniiiBorder'
                    height='height100'
                    smallHeading='smallHeading'
                  />
                </div>
              </div>
              <div className={styles.addonSection}>
                <div className={styles.addonSectionTop}>
                  <h3 className={styles.addonsHeading}>
                    Expansion blocks and price add-ons
                  </h3>
                </div>
                <div className={styles.addonSectionBottom}>
                  <div className={styles.addonSectionTableHeadings}>
                    <h4 className={styles.title}>Expansion Block</h4>
                    <h4 className={styles.title}>When it Triggers</h4>
                    <h4 className={styles.title}>Add-on fee (USD)</h4>
                  </div>
                  <div className={styles.mapData}>
                    {a.addonSectionData.map((x) => (
                      <div
                        key={x.id}
                        className={styles.addonSectionBottomContainer}
                      >
                        {" "}
                        <div>
                          <h4 className={styles.titleMobile}>
                            Expansion Block:
                          </h4>
                          <h5 className={styles.titleii}>{x.expansionblock}</h5>
                        </div>
                        <div>
                          <h4 className={styles.titleMobile}>
                            When it Triggers:
                          </h4>
                          <p className={styles.info}>{x.details}</p>
                        </div>
                        <div>
                          <h4 className={styles.titleMobile}>
                            Add-on fee (USD):
                          </h4>
                          <p className={styles.info}>{x.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
}
