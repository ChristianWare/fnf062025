"use client";

import styles from "./ContactHero.module.css";
import dynamic from "next/dynamic";
import Button from "../Button/Button";
import LayoutWrapper from "@/components/LayoutWrapper";
import Contact2 from "../Contact2/Contact2";
import Thunder from "../../../public/icons/lightning.svg";
import SectionIntro from "../SectionIntro/SectionIntro";
// import ContactForm from "@/components/ContactForm/ContactForm";
// import { InlineWidget } from "react-calendly";
// import SectionIntro from "@/components/SectionIntro/SectionIntro";

const Silk = dynamic(() => import("../Silk/Silk"), { ssr: false });

export default function ContactHero() {
  return (
    <div className={styles.container}>
      {/* flowing shader canvas */}
      <div className={styles.silkBg}>
        <Silk
          speed={4}
          scale={1.4}
          color='#7B7481'
          noiseIntensity={1.2}
          rotation={0}
        />
      </div>

      <LayoutWrapper>
        <div className={styles.top}>
          <SectionIntro title='FONTS & FOOTERS' color='tan' dotColor='tanDot' />

          <h2 className={styles.heading}>
            Ready to improve <br /> your online store&nbsp;?
          </h2>

          <div className={styles.btnContainer}>
            <Button href='/contact' btnType='tanOutline' text='Contact us' />
            <Button href='/contact' btnType='primary' text='Get Started' />
          </div>
          <Thunder className={styles.icon} />
          <Contact2 />
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
