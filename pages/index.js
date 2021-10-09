/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "../styles/Home.module.scss";
import AnimatedLetters from "../components/AnimatedLetters";
import AnimatedWords from "../components/AnimatedWords";
import Marquee from "../components/Marquee";
import Image from "next/image";
import Link from "next/link";
import workDetails from "../utils/work-details";
import WorkComponent from "../components/WorkComponent";
import MagneticButton from "../components/MagneticButton";
import HeadTag from "../components/HeadTag";

const animText = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const [preloader, setPreloader] = useState(true);
  const animation = useAnimation();

  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

  const variants = {
    visible: {
      opacity: 1,
      //height: 800,
      clipPath: "circle(130.0% at 83% 100%)",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    hidden: {
      //height: 0,
      opacity: 0,
      clipPath: "circle(43.6% at 83% 100%)",
    },
  };

  // useEffect(() => {
  //   if (typeof window === "undefined") {
  //     return;
  //   }
  //   const scroll = import("locomotive-scroll").then((LocomotiveScroll) => {
  //     new LocomotiveScroll.default({
  //       el: document.querySelector("#scroll-container"),
  //       smooth: true,
  //       class: "is-reveal",
  //     });
  //   });
  // }, []);

  return (
    <motion.div
      className={styles.container}
      id="scroll-container"
      data-scroll-container
      exit={{ opacity: 0 }}
      transition={transition}
    >
      <HeadTag />
      <>
        <section className={styles.heroSection} data-scroll-section>
          <motion.div className="banner-row" data-scroll>
            <AnimatedWords text="Hey, my name is Nivedin P Suryan" tag="p" />
          </motion.div>
          <motion.div className="banner-row" data-scroll>
            <AnimatedLetters text="Front End" tag="h1" />
          </motion.div>
          <motion.div className="banner-row" data-scroll>
            <AnimatedLetters text="Developer" tag="h1" />
          </motion.div>
        </section>
        <section data-scroll-section>
          <Marquee text="WORK <span>WORK</span> WORK <span>WORK</span> WORK <span>WORK</span> WORK" />
          <div className={styles.workSection}>
            {workDetails.map(
              (work) =>
                work.featured && (
                  <WorkComponent
                    key={work.id}
                    id={work.id}
                    name={work.name}
                    smallDescription={work.smallDescription}
                    tools={work.tools}
                    images={work.images}
                  />
                )
            )}
          </div>
          <MagneticButton text="More Work" link="/work" />
        </section>
        <section data-scroll-section className={styles.aboutMainSection}>
          <Marquee text="<span>ABOUT</span> ME <span>ABOUT</span> ME <span>ABOUT</span> ME <span>ABOUT</span> ME" />
          <div className={styles.aboutSection}>
            <h3>
              I am a self-taught full-stack web developer focused more on
              front-end. I like to make things minimal and work with the latest
              web technologies.
            </h3>
          </div>
          <div className={styles.workImages}>
            <img
              src="/images/common/about-img-1.png"
              alt="about-work-img"
              data-scroll
              data-scroll-speed="3"
              className={styles.aboutImg1}
            />
            <img
              src="/images/common/about-img-2.png"
              alt="about-work-img"
              data-scroll
              data-scroll-speed="3"
              className={styles.aboutImg2}
            />
            <img
              src="/images/common/about-img-3.png"
              alt="about-work-img"
              data-scroll
              data-scroll-speed="3"
              className={styles.aboutImg3}
            />
            <img
              src="/images/common/hamburgerAnimGif.gif"
              alt="about-work-img"
              data-scroll
              data-scroll-speed="3"
              className={styles.aboutImg4}
            />
            <MagneticButton text="About" link="/about" />
          </div>
        </section>
        {/* <section
          style={{
            minHeight: "50vh",
            background: "transparent",
            width: "100%",
            pointerEvents: "none",
          }}
          data-scroll-section
        ></section> */}
      </>
    </motion.div>
  );
}
