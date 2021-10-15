import { motion } from "framer-motion";

const animText = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

function AnimatedLetters({ text, tag, color }) {
  return (
    <motion.span
      className={tag === "h1" ? "animated-text-1" : "animated-text-2"}
      variants={animText}
      initial="initial"
      animate="animate"
    >
      {[...text].map((letter, index) => (
        <motion.span
          key={index}
          drag
          dragConstraints={{ left: 0, right: 300 }}
          dragElastic={0.2}
          dragMomentum={true}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          className={tag === "h1" ? "text-letters-1" : "text-letters-2"}
          variants={letterAnimation}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default AnimatedLetters;
