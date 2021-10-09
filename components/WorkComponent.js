import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../styles/WorkComponent.module.scss";
import { useGlobalDispatchContext } from "../context/globalContext";

const WorkComponent = ({ id, name, smallDescription, tools, images }) => {
  const dispatch = useGlobalDispatchContext();
  return (
    <article
      className={styles.articleMain}
      onMouseEnter={() =>
        dispatch({ type: "CURSOR_STYLES", cursorStyles: "work" })
      }
      onMouseLeave={() =>
        dispatch({ type: "CURSOR_STYLES", cursorStyles: "default" })
      }
      data-scroll
      data-scroll-speed={Math.floor(Math.random() * (5 - 1 + 1)) + 1}
      data-scroll-id={id}
      data-scroll-offset="150px"
    >
      <Link href={`/work/${name}`}>
        <a>
          <figure>
            <motion.img
              src={`/images/${images[0]}`}
              alt={name}
              className={styles.portImg}
              whileHover={{ scale: 1.1 }}
              layoutId={`portfolio-img-${id}`}
              // height={800}
              // width={1000}
            />

            {/* <AnimatedWords text="Next Social Media" tag="h1" /> */}
          </figure>
          <div className={styles.workDetails}>
            <div className={styles.detail}>
              <h2>{name}</h2>
              <p>{smallDescription}</p>
              <h4>{tools}</h4>
            </div>
            <div className={styles.arrowImg}>
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M70.2877 23.7065L65.8684 28.1259L84.6178 46.8753H3.125V53.1255H84.6172L65.8684 71.8743L70.2877 76.2936L96.5816 50.0001L70.2877 23.7065Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </a>
      </Link>
    </article>
  );
};

export default WorkComponent;
