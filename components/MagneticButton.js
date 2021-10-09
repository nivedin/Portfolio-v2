import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/MagneticButton.module.scss";

const MagneticButton = ({ text, link }) => {
  return (
    <Link href={link} passHref={true}>
      <motion.div
        className={styles.magneticBtn}
        drag
        dragConstraints={{ left: 0, right: 300 }}
        dragElastic={0.2}
        dragMomentum={true}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      >
        <motion.a data-text={text}>{text}</motion.a>
      </motion.div>
    </Link>
  );
};

export default MagneticButton;
