import styles from "../styles/About.module.scss";
import { useGlobalDispatchContext } from "../context/globalContext";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeadTag from "../components/HeadTag";
import MagneticButton from "../components/MagneticButton";

function AboutPage() {
  const dispatch = useGlobalDispatchContext();

  const [workHover, setWorkHover] = useState({
    hover: false,
    workItem: "",
    image: "",
  });

  const [mouseHovePosition, setMouseHoverPosition] = useState({ x: 0, y: 0 });

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

  const handleWorkHover = (e, workItem) => {
    let workImage;

    if (workItem === "ditalVault") {
      workImage = "avoss_gif.gif";
    } else if (workItem === "quantek") {
      workImage = "quantek_gif.gif";
    } else if (workItem === "sapne") {
      workImage = "sapne_gif.gif";
    }
    setWorkHover({
      hover: true,
      workItem: workItem,
      image: `/images/common/${workImage}`,
    });

    e.target.addEventListener("mousemove", handleMouseMove);
  };

  const handleWorkNotHover = () => {
    setWorkHover({
      hover: false,
      workItem: false,
    });
  };

  const imageVariants = {
    initial: {
      scale: 1.5,
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
            src="/nivedin_image-min.jpg"
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
                href="https://digitalvault.in/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() =>
                  dispatch({ type: "CURSOR_STYLES", cursorStyles: "link" })
                }
                onMouseLeave={() =>
                  dispatch({ type: "CURSOR_STYLES", cursorStyles: "default" })
                }
              >
                <span>Digital Vault</span>
              </a>{" "}
              Mumbai, Nashik having 1.5 years of experience in web development,
              mostly with Front-end but working on backend as well.
              <br />I am doing my final year B.tech in Computer Science apart
              from freelancing. <br />I think understanding the human experience
              is essential for creating useful and effective products that make
              life easier. I enjoy using my skill-set to empower people to
              accomplish their goals.
            </p>
          </motion.div>
        </div>
      </section>
      <section className={styles.workHistorySection} data-scroll-section>
        <h2>Work History</h2>
        <div className={styles.workHistoryContainer}>
          <div
            className={styles.workHistoryItem}
            onMouseEnter={(e) => handleWorkHover(e, "ditalVault")}
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
            onMouseEnter={(e) => handleWorkHover(e, "quantek")}
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
            onMouseEnter={(e) => handleWorkHover(e, "sapne")}
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
          </div>
          <div className={styles.workImageContainer}>
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
          </div>
        </div>
        <div style={{ marginTop: "10rem" }}>
          <MagneticButton text="Work" link="/work" />
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
