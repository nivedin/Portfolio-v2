import { motion } from "framer-motion";
import { useEffect } from "react";
import styles from "../styles/Marquee.module.scss";

const marqueeVariants = {
  animate: {
    x: [0, -1235],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};

function Marquee({ text, speed = 100, direction, className }) {
  // useEffect(() => {
  //   document
  //     .querySelector(`.${styles.marquee}`)
  //     .addEventListener("mouseover", () => {
  //       document
  //         .querySelector(`.${styles.rowTitle}`)
  //         .classList.add(styles.hoverMarque);
  //     });
  //   document
  //     .querySelector(`.${styles.marquee}`)
  //     .addEventListener("mouseout", () => {
  //       document
  //         .querySelector(`.${styles.rowTitle}`)
  //         .classList.remove(styles.hoverMarque);
  //     });
  // }, []);

  return (
    <div className={styles.marquee}>
      <motion.div
        className={styles.track}
        variants={marqueeVariants}
        animate="animate"
      >
        {/* <h1 className={styles.rowTitle}>{text}</h1> */}
        <h1
          className={styles.rowTitle}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </motion.div>
    </div>
  );
}

export default Marquee;
