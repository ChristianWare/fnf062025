"use client";

import styles from "./ContactHero.module.css";
import Button from "../Button/Button";
import Circle from "../Circle/Circle";
import LayoutWrapper from "@/components/LayoutWrapper";
// import ContactForm from "@/components/ContactForm/ContactForm";
// import { InlineWidget } from "react-calendly";
// import SectionIntro from "@/components/SectionIntro/SectionIntro";

export default function ContactHero() {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>
            Ready to improve <br /> your online store ?
          </h2>
          <div className={styles.btnContainer}>
            <Button href='/contact' btnType='outline' text='Contact us' />
            <Button
              text='Get Started'
              btnType='primary'
              href='/contact'
              marquee
            />{" "}
          </div>
          <Circle />
        </div>
        {/* <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.sectionIntroContainer1}>
              <SectionIntro
                title='Send a Message'
                color='black'
                dotColor='blackDot'
              />
            </div>
            <ContactForm />
          </div>
          <div className={styles.right}>
            <div className={styles.iframeWrapper}>
              <div className={styles.sectionIntroContainer2}>
                <SectionIntro
                  title='Book a call'
                  color='black'
                  dotColor='blackDot'
                />
              </div>
              <InlineWidget
                url='https://calendly.com/fontsandfooters/discovery-call'
                styles={{
                  height: "700px",
                }}
              />
            </div>
          </div>
        </div> */}
      </LayoutWrapper>
    </div>
  );
}
