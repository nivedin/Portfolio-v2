import Link from "next/link";
import { useReducer, useRef } from "react";
import styles from "../styles/Work.module.scss";

const WorkItem = ({ work, itemIndex }) => {
  const initialState = {
    opacity: 0,
    parallaxPos: { x: 0, y: -20 },
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE-OPACITY":
        return {
          ...state,
          opacity: action.payload,
        };
      case "MOUSE-COORDINATES":
        return {
          ...state,
          parallaxPos: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const listItem = useRef(null);

  const parallax = (e) => {
    const x = (window.innerWidth - e.pageX * -5) / 100;
    const y = (window.innerHeight - e.pageY * -5) / 100;

    dispatch({ type: "MOUSE-COORDINATES", payload: { x, y } });
  };

  const handleMouseEnter = () => {
    dispatch({ type: "CHANGE-OPACITY", payload: 1 });
    listItem.current.addEventListener("mousemove", parallax);
  };
  const handleMouseLeave = () => {
    dispatch({ type: "CHANGE-OPACITY", payload: 0 });
    listItem.current.removeEventListener("mousemove", parallax);
  };

  return (
    <Link href={`/work/${work.name}`} passHref>
      <a
        className={styles.workItemContainer}
        id={`work-item-${itemIndex}`}
        ref={listItem}
      >
        <div
          className={styles.titleItem}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h1 className={styles.menuTitle}>{work.name}</h1>
        </div>
        <img
          src={`/images/${work.images[0]}`}
          alt={work.name}
          data-scroll
          data-scroll-sticky
          data-scroll-target="#workitem"
          style={{
            opacity: state.opacity,
            transform: `translate3d(${state.parallaxPos.x}px, ${state.parallaxPos.y}px,0px)`,
          }}
        />

        <div
          className={styles.infoBlock}
          data-scroll
          data-scroll-sticky
          data-scroll-target="#workitem"
        >
          <p className={styles.infoBlockHeader}>
            <span className={styles.hashIcon}>#</span>
            <span className={styles.itemIndex}>0{itemIndex}</span>
          </p>
          <p>
            <span>{work.tools}</span>
          </p>
        </div>
      </a>
    </Link>
  );
};

export default WorkItem;
