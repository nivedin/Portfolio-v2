import Link from "next/link";
import { useReducer, useRef } from "react";
import animate from "../utils/animate";
import styles from "../styles/Work.module.scss";

const WorkItem = ({ work, itemIndex }) => {
  const initialState = {
    opacity: 0,
    parallaxPos: { x: 0, y: -20 },
    scale: 0.8,
    rotationPosition: 0,
    active: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "MOUSE-ENTER":
        return {
          ...state,
          active: true,
        };
      case "MOUSE-LEAVE":
        return {
          ...state,
          active: false,
        };
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
      case "CHANGE-ROTATION":
        return {
          ...state,
          rotationPosition: action.payload,
        };
      case "CHANGE-SCALE":
        return {
          ...state,
          scale: action.payload,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const listItem = useRef(null);
  const easeMethod = "easeInOutCubic";

  const parallax = (e) => {
    const x = (window.innerWidth - e.pageX * -6) / 100;
    const y = (window.innerHeight - e.pageY * -6) / 100;

    dispatch({ type: "MOUSE-COORDINATES", payload: { x, y } });
  };

  const handleOpacity = (initialOpacity, newOpacity, duration) => {
    animate({
      fromValue: initialOpacity,
      toValue: newOpacity,
      onUpdate: (newOpacity, callback) => {
        dispatch({ type: "CHANGE-OPACITY", payload: newOpacity });
        callback();
      },
      onComplete: () => {},
      duration: duration,
      easeMethod: easeMethod,
    });
  };

  const handleRotation = (currentRotation, duration) => {
    const newRotation =
      Math.random() * 10 * (Math.random(Math.random()) ? 1 : -1);
    animate({
      fromValue: currentRotation,
      toValue: newRotation,
      onUpdate: (newOpacity, callback) => {
        dispatch({ type: "CHANGE-ROTATION", payload: newOpacity });
        callback();
      },
      onComplete: () => {},
      duration: duration,
      easeMethod: easeMethod,
    });
  };

  const handleScale = (initialScale, newScale, duration) => {
    animate({
      fromValue: initialScale,
      toValue: newScale,
      onUpdate: (newOpacity, callback) => {
        dispatch({ type: "CHANGE-SCALE", payload: newOpacity });
        callback();
      },
      onComplete: () => {},
      duration: duration,
      easeMethod: easeMethod,
    });
  };

  const handleMouseEnter = () => {
    handleScale(0.8, 1, 500);
    handleOpacity(0, 1, 500);
    handleRotation(state.rotationPosition, 500);
    listItem.current.addEventListener("mousemove", parallax);
    dispatch({ type: "MOUSE-ENTER" });
  };

  const handleMouseLeave = () => {
    listItem.current.removeEventListener("mousemove", parallax);
    handleOpacity(1, 0, 800);
    handleScale(1, initialState.scale, 500);
    handleRotation(state.rotationPosition, 500);
    dispatch({ type: "MOUSE-COORDINATES", payload: initialState.parallaxPos });
    dispatch({ type: "MOUSE-LEAVE" });
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
          <h1 className={`${styles.menuTitle} ${styles.clone}`}>{work.name}</h1>
        </div>
        <img
          src={`/images/${work.images[0]}`}
          alt={work.name}
          data-scroll
          data-scroll-sticky
          data-scroll-target="#workitem"
          style={{
            opacity: state.opacity,
            transform: `translate3d(${state.parallaxPos.x}px, ${state.parallaxPos.y}px,0px) scale(${state.scale}) rotate(${state.rotationPosition}deg)`,
          }}
        />

        <div
          className={`${styles.infoBlock} ${
            state.active ? styles.blockActive : ""
          }`}
          data-scroll
          data-scroll-sticky
          data-scroll-target="#workitem"
        >
          <p className={styles.infoBlockHeader}>
            <span className={styles.hashIcon}>#</span>
            <span className={styles.itemIndex}>0{itemIndex}</span>
          </p>
          <p>
            <span>{work.client}</span>
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
