import styles from "../styles/About.module.scss";
import { useGlobalDispatchContext } from "../context/globalContext";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeadTag from "../components/HeadTag";
import MagneticButton from "../components/MagneticButton";
import workHistory from "../utils/work-history";
import SingleWorkItem from "../components/SingleWorkItem";

function AboutPage() {
  const dispatch = useGlobalDispatchContext();

  const [workHover, setWorkHover] = useState({
    hover: false,
    workItem: "",
    image: "",
  });

  const [mouseHovePosition, setMouseHoverPosition] = useState({ x: 0, y: 0 });

  const [isMobile, setMobile] = useState(true);

  const [time, setTime] = useState(new Date().getSeconds());

  const [helloWord, setHelloWord] = useState("Hey");

  let helloWords = [
    "Hey",
    "Hola",
    "Nǐ hǎo",
    "Namaste",
    "Ciao",
    "Salut",
    "Olá",
    "Cześć",
    "Salve",
  ];

  useEffect(() => {
    window.innerWidth < 800 ? setMobile(true) : setMobile(false);

    const interval = setInterval(() => setTime(Date.now()), 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setHelloWord(helloWords[Math.floor(Math.random() * helloWords.length)]);
  }, [time]);

  const handleMouseMove = (e) => {
    let mouseX = (window.innerWidth - e.pageX * -7) / 100;
    let mouseY = (window.innerHeight - e.pageY * -7) / 100;

    setMouseHoverPosition({ x: mouseX, y: mouseY });

    //console.log("mouse", mouseX, mouseY);
  };

  const handleWorkHover = (workItem) => {
    if (workItem === "hoppscotch") {
      dispatch({
        type: "CURSOR_STYLES",
        cursorStyles: "link-hoppscotch",
      });
    } else if (workItem === "ditalvault") {
      dispatch({
        type: "CURSOR_STYLES",
        cursorStyles: "link-digitalvault",
      });
    } else if (workItem === "myservicecube") {
      dispatch({
        type: "CURSOR_STYLES",
        cursorStyles: "link-quantek",
      });
    } else if (workItem === "sapne") {
      dispatch({
        type: "CURSOR_STYLES",
        cursorStyles: "link-sapne",
      });
    } else {
      dispatch({
        type: "CURSOR_STYLES",
        cursorStyles: "default",
      });
    }
  };

  const handleWorkNotHover = () => {
    dispatch({
      type: "CURSOR_STYLES",
      cursorStyles: "default",
    });
  };

  const imageVariants = {
    initial: {
      scale: isMobile ? 0.5 : 1.5,
      height: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      height: "100%",

      transition: {
        duration: 1,
        ease: "easeInOut",
        delayChildren: 0.4,
        staggerChildren: 0.2,
      },
    },
    exit: {
      y: -50,
      scale: 0.8,
    },
  };

  //console.log(imageVariants.initial.scale);

  const textVariant = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className={styles.about}>
      <HeadTag title="About" />
      <section className={styles.aboutPageContainer} data-scroll-section>
        <div
          className={styles.imageContainer}
          data-scroll
          data-scroll-speed="3"
        >
          <motion.img
            priority={true}
            src="/nivedin-image.jpeg"
            alt="Nivedin-image"
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover={{
              scale: 1.2,
              transition: { duration: 1, ease: "easeInOut" },
            }}
            whileTap={{
              scale: 0.9,
              transition: { duration: 1, ease: "easeInOut" },
            }}
            // loading="eager"
            // width={150}
            // height={200}
            // layout="responsive"
          />
        </div>
        <div className={styles.aboutTextContainer}>
          <motion.h1
            data-scroll
            data-scroll-speed="2"
            variants={textVariant}
            initial={{
              opacity: 0,
              y: 200,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 0.4,
            }}
          >
            {" "}
            <span className={styles.handHey}>
              <span className={styles.handTexts}>
                <Image
                  priority="true"
                  src="/wave-hello.gif"
                  alt="hand"
                  layout="fill"
                />
              </span>
              {helloWord},
            </span>
            <span className={styles.aboutName}> I&apos;m Nivedin P Suryan</span>
          </motion.h1>

          <motion.div
            className={styles.aboutTextAnim}
            variants={textVariant}
            initial={{
              opacity: 0,
              y: 200,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1.2,
              delay: 0.4,
            }}
          >
            <p data-scroll data-scroll-speed="3">
              A Front End Developer working remotely for{" "}
              <a
                href="https://hoppscotch.io"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() =>
                  dispatch({ type: "CURSOR_STYLES", cursorStyles: "link" })
                }
                onMouseLeave={() =>
                  dispatch({ type: "CURSOR_STYLES", cursorStyles: "default" })
                }
              >
                <span>Hoppscotch</span>
              </a>{" "}
              having 2 years of experience in web development, mostly with
              Front-end but working on backend as well.
              <br /> <br />
              Even though I stumbled upon code by accident, it's something I've
              come to really like. But like they say, good things come to us
              without plan, no? I especially enjoy watching code bring to life
              an entirely new beautiful thing, it's magical. For me, each
              project I have the privilege to work on is a new opportunity to
              learn new things, meet people with ideas that differ from mine and
              discover things about myself I never knew were beneath the layers
              of all of me.
              <br />
              <br />
              I'm available for full-time roles and freelance projects
              worldwide. As long as you don't mind watching me work from screens
              away.
            </p>
          </motion.div>
        </div>
      </section>
      <section className={styles.workHistorySection} data-scroll-section>
        <h2>Work History</h2>
        <div className={styles.workHistoryContainer}>
          {workHistory.map((work) => (
            <SingleWorkItem
              company={work.company}
              position={work.position}
              time={work.time}
              link={work.link}
              description={work.description}
              key={work.id}
              handleWorkHover={handleWorkHover}
              handleWorkNotHover={handleWorkNotHover}
            />
          ))}
          {/* <div
            className={styles.workHistoryItem}
            onMouseEnter={() => handleWorkHover("ditalVault")}
            onMouseLeave={handleWorkNotHover}
          >
            <h3>Digital Vault (2020 - Present)</h3>
            <p>Front End Developer</p>
            <a
              href="https://digitalvault.in/"
              onMouseEnter={() =>
                dispatch({ type: "CURSOR_STYLES", cursorStyles: "link" })
              }
              onMouseLeave={() =>
                dispatch({ type: "CURSOR_STYLES", cursorStyles: "default" })
              }
            >
              digitalvault.com <span>→</span>
            </a>
          </div>
          <div
            className={styles.workHistoryItem}
            onMouseEnter={() => handleWorkHover("quantek")}
            onMouseLeave={handleWorkNotHover}
          >
            <h3>Quantek (2021 - 2 Months)</h3>
            <p>React Developer Internship</p>
            <a
              href="https://myservicecube.com/"
              onMouseEnter={() =>
                dispatch({ type: "CURSOR_STYLES", cursorStyles: "link" })
              }
              onMouseLeave={() =>
                dispatch({ type: "CURSOR_STYLES", cursorStyles: "default" })
              }
            >
              myservicecube.com <span>→</span>
            </a>
          </div>
          <div
            className={styles.workHistoryItem}
            onMouseEnter={() => handleWorkHover("sapne")}
            onMouseLeave={handleWorkNotHover}
          >
            <h3>Sapne NGO (2020 - 3 Months)</h3>
            <p>Web Development Internship</p>
            <a
              href="https://www.sapne.org.in/"
              onMouseEnter={() =>
                dispatch({ type: "CURSOR_STYLES", cursorStyles: "link" })
              }
              onMouseLeave={() =>
                dispatch({ type: "CURSOR_STYLES", cursorStyles: "default" })
              }
            >
              sapne.org.in <span>→</span>
            </a>
          </div> */}
          {/* <div className={styles.workImageContainer}>
            {workHover.hover && (
              <motion.img
                src={workHover.image}
                alt={workHover.workItem}
                style={{
                  transform: `translate3d(${mouseHovePosition.x}px,${mouseHovePosition.y}px,0px)`,
                }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,

                  transition: {
                    duration: 0.2,
                    ease: "easeInOut",
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.2,
                    ease: "easeInOut",
                  },
                }}
              />
            )}
          </div> */}
        </div>
        <div style={{ marginTop: "10rem" }}>
          <MagneticButton text="Work" link="/work" />
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
