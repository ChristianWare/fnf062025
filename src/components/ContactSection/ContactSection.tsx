"use client";

import { useState } from "react";
import styles from "./ContactSection.module.css";
import LayoutWrapper from "../LayoutWrapper";
import toast from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import Email from "@/icons/Email/Email";
import Arrow from "@/icons/Arrow/Arrow";
import Calendar from "@/icons/Calendar/Calendar";
import FalseButton from "../FalseButton/FalseButton";
import SectionIntroArea from "../SectionIntroArea/SectionIntroArea";

interface Inputs {
  firstName: string;
  lastName: string;
  senderEmail: string;
  companyName: string;
  currentWebsiteUrl: string;
  message: string;
}

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => res.json());

    if (response.messageId) {
      toast.success("Email sent successfully!");
      reset();
    } else {
      toast.error("Oops! Please try again");
    }

    setLoading(false);
  };

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            {/* <h2 className={styles.heading}>Contact Us</h2>
            <p className={styles.copy}>
              Reach out to us anytime. Our dedicated team is ready to assist you
              with bookings, inquiries, and personalized travel solutions.
              We&#39;re just a message or call away.
            </p> */}
            <SectionIntroArea
              sectionTitle='Contact Us'
              heading='Get In Touch'
              copy='Reach out to us anytime. Our dedicated team is ready to assist you
              with bookings, inquiries, and personalized travel solutions.
              We&#39;re just a message or call away.'
            />
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <div className={styles.letsTalkContainer}>
                <h3>Let&#39;s talk</h3>
                <div className={styles.iconInfoContainer}>
                  <Email className={styles.icon} />
                  <span className={styles.info}>
                    reservations@niertransportation.com
                  </span>
                </div>
                {/* <div className={styles.iconInfoContainer}>
                  <Phone className={styles.icon} />
                  <span className={styles.info}>480-300-6003</span>
                </div> */}
               
                <div className={styles.iconInfoContainer}>
                  <Arrow className={styles.iconii} />
                  <span className={styles.info}>Follow Us On LinkedIn</span>
                </div>
                <div className={styles.iconInfoContainer}>
                  <Calendar className={styles.icon} />
                  <span className={styles.info}>Schedule a Meeting</span>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.namesContainer}>
                  <div className={styles.labelInputBox}>
                    <label htmlFor='firstName'>
                      First Name <span className={styles.required}>*</span>
                    </label>
                    <input
                      id='firstName'
                      type='text'
                      {...register("firstName", { required: true })}
                    />
                    {errors.firstName && (
                      <span className={styles.error}>
                        *** First Name is required
                      </span>
                    )}
                  </div>
                  <div className={styles.labelInputBox}>
                    <label htmlFor='lastName'>
                      Last Name <span className={styles.required}>*</span>
                    </label>
                    <input
                      id='lastName'
                      type='text'
                      {...register("lastName", { required: true })}
                    />
                    {errors.lastName && (
                      <span className={styles.error}>
                        *** Last Name is required
                      </span>
                    )}
                  </div>
                </div>
                <div className={styles.everythingElse}>
                  <div className={styles.labelInputBox}>
                    <label htmlFor='senderEmail'>
                      Email <span className={styles.required}>*</span>
                    </label>
                    <input
                      id='senderEmail'
                      type='email'
                      {...register("senderEmail", {
                        required: true,
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Entered value does not match email format",
                        },
                      })}
                      placeholder='So we can respond. We won&#39;t send you spam.'
                      maxLength={500}
                    />
                    {errors.senderEmail && (
                      <span className={styles.error}>
                        *** Email is required
                      </span>
                    )}
                  </div>
                  <div className={styles.labelInputBox}>
                    <label htmlFor='companyName'>Group Size</label>
                    <input
                      id='companyName'
                      type='text'
                      {...register("companyName")}
                    />
                  </div>
                  <div className={styles.labelInputBox}>
                    <label htmlFor='currentWebsiteUrl'>Length of Stay</label>
                    <input
                      id='currentWebsiteUrl'
                      type='text'
                      {...register("currentWebsiteUrl")}
                    />
                  </div>
                  <div className={styles.labelInputBox}>
                    <label htmlFor='message'>
                      Message <span className={styles.required}>*</span>
                    </label>
                    <textarea
                      id='message'
                      {...register("message", { required: true })}
                      maxLength={5000}
                      placeholder='No solicitations, please.'
                    />
                    {errors.message && (
                      <span className={styles.error}>
                        *** Message is required
                      </span>
                    )}
                  </div>
                </div>
                <div className={styles.btnBtnContainer}>
                  {/* <button className={styles.btn} type='submit'>
                    {loading ? "Sending..." : "Submit"}
                  </button> */}
                  <FalseButton
                    text={loading ? "Sending..." : "Submit"}
                    btnType='primary'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
