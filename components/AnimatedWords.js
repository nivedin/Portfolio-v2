import { motion } from "framer-motion";

const animText = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

function AnimatedWords({ text, tag }) {
  return (
    <motion.div
      className={tag === "h1" ? "animated-text-1" : "animated-text-2"}
      variants={animText}
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
      <span className={tag === "h1" ? "text-letters-1" : "text-letters-2"}>
        {text}
      </span>
    </motion.div>
  );
}

export default AnimatedWords;
