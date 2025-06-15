import styles from "./ListOfServices.module.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import Image from "next/image";
import Devlopment from "../../../../../public/images/servicesHero.jpg";
import Booking from "../../../../../public/images/bookingii.jpg";
import Button from "@/components/Button/Button";
import SectionHeading2 from "@/components/SectionHeading2/SectionHeading2";

const data = [
  {
    id: 3,
    service: "E-commerce Development",
    headline: "Building robust, scalable online stores",
    desc: "Our development team brings your e-commerce vision to life with clean, efficient code and seamless integrations. We build on industry-leading platforms while customizing the functionality to meet your specific business requirements.",
    src: Devlopment,
    price: "$5,900",
    servicesInclude: [
      {
        id: 3.1,
        serviceName: "Custom e-commerce development",
        description:
          "We build tailored e-commerce solutions that address your unique business requirements and customer needs.",
      },
      {
        id: 3.2,
        serviceName: "Platform migration (Shopify, WooCommerce, etc.)",
        description:
          "We seamlessly transition your existing store to a new platform while preserving your data, SEO, and customer experience.",
      },
      {
        id: 3.3,
        serviceName: "Payment gateway integration",
        description:
          "We implement secure, reliable payment processing options that support your customers' preferred payment methods.",
      },
      {
        id: 3.4,
        serviceName: "Shipping and tax configuration",
        description:
          "We set up accurate shipping calculations and tax applications to prevent checkout surprises and abandoned carts.",
      },
      // {
      //   id: 3.5,
      //   serviceName: "Inventory management",
      //   description:
      //     "We implement systems to track and display product availability in real-time across all your sales channels.",
      // },
      // {
      //   id: 3.6,
      //   serviceName: "Product data import and setup",
      //   description:
      //     "We efficiently organize and import your product catalog with all necessary attributes, variations, and media.",
      // },
    ],
  },
  {
    id: 4,
    service: "Booking‑Site Development",
    headline: "Fast, friction‑free scheduling & reservations",
    desc: "We build conversion‑focused booking platforms for service brands—salons, luxury car services, vacation rentals, clinics, and more. Each site delivers a seamless, mobile‑first flow from availability search to paid confirmation, fully integrated with your back‑office tools.",
    src: Booking,
    price: "$4,500",
    servicesInclude: [
      {
        id: 4.1,
        serviceName: "Custom booking‑flow design",
        description:
          "We map and code a user journey that matches your service logic—single appointments, multi‑step rentals, or group sessions—so guests book in under 60 seconds.",
      },
      {
        id: 4.2,
        serviceName: "Real‑time calendar & resource sync",
        description:
          "Your online availability pulls live data from Google Calendar, Microsoft 365, or PMS (Property‑Management System) APIs, eliminating double‑bookings.",
      },
      {
        id: 4.3,
        serviceName: "Integrated payments & deposits",
        description:
          "Stripe and Square gateways handle deposits, full charges, or split payments while keeping you PCI compliant.",
      },
      {
        id: 4.4,
        serviceName: "Automated reminders & no‑show protection",
        description:
          "SMS and email reminders reduce no‑shows by up to 40 %. Optional card‑on‑file or late‑cancel fees protect revenue.",
      },
      // {
      //   id: 4.5,
      //   serviceName: "Multi‑location & staff management",
      //   description:
      //     "We build admin dashboards where you assign services, set staff hours, and manage pricing per location—all in one place.",
      // },
      // {
      //   id: 4.6,
      //   serviceName: "Analytics & occupancy reporting",
      //   description:
      //     "Custom dashboards surface key KPIs like utilisation rate, average booking value, and repeat‑guest percentage so you can optimise pricing and staffing.",
      // },
      // {
      //   id: 4.7,
      //   price: "$5,900",
      // },
    ],
  },
];

export default function ListOfServices() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.sectionHeadingContainer}>
            <SectionHeading2 title='Services + Pricing' />
          </div>
        </div>
        <div className={styles.content}>
          {data.map((a) => (
            <div key={a.id} className={styles.section}>
              <h3 className={styles.title}>{a.service}</h3>
              {/* <p className={styles.desc}>{a.desc}</p> */}
              <div className={styles.bottom}>
                <div className={styles.imgContainer}>
                  <Image
                    src={a.src}
                    alt=''
                    title=''
                    fill
                    className={styles.img}
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
                <div className={styles.priceContainer}>
                  <h4 className={styles.price}>{a.price}</h4>
                </div>
              </div>
              <div className={styles.btnContainer}>
                <Button
                  text='Start My Project'
                  btnType='primary'
                  href='/contact'
                />
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
}
