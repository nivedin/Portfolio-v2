import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/Preloader.module.scss";

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

function Preloader({ setPreloader }) {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer <= 100) {
        setTimer((prevState) => {
          if (prevState < 100) {
            return prevState + 10;
          }
          if (prevState >= 100) {
            // setTimeout(() => {
            //   setPreloader(false);
            // }, 1000);
            return 100;
          }
        });
      } else {
        clearInterval(interval);
      }
    }, 100);

    //if (interval > 100) setPreloader(false);

    return () => clearInterval(interval);
    //return () => clearTimeout(loadTime);
  }, []);

  return (
    <motion.div
      className={styles.preloader}
      key="ttt"
      variants={container}
      initial={{
        background: "rgb(0, 0, 0)",
        color: "#fff",
      }}
      animate={{
        opacity: 1,
        y: 0,
        background: "#fff",
        color: "#000",
        transition: {
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: 3,
        },
      }}
      exit={{
        opacity: 0,

        transition: {
          ease: "easeInOut",
          duration: 0.8,
        },
      }}
      onAnimationComplete={() => setPreloader(false)}
    >
      <h1>
        {timer}
        <span>%</span>
      </h1>
    </motion.div>
  );
}

export default Preloader;
