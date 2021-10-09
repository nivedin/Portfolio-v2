import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import HeadTag from "../../components/HeadTag";
import WorkItem from "../../components/WorkItem";
import styles from "../../styles/Work.module.scss";
import workDetails from "../../utils/work-details";

function WorkPage() {
  const menuItems = useRef(null);
  const [renderItems, setRenderItems] = useState(workDetails);

  const cloneItems = () => {
    const itemHeight = menuItems.current.childNodes[0].offsetHeight;
    const fitMax = Math.ceil(window.innerHeight / itemHeight);
    const clonedItems = [...renderItems]
      .filter((_, index) => index < fitMax)
      .map((target) => target);
    //console.log(clonedItems);
    setRenderItems([...renderItems, ...clonedItems]);

    return clonedItems.length * itemHeight;
  };

  const getScrollPos = () => {
    //console.log(menuItems.current.scrollTop, menuItems.current.clientTop);
    return (
      (menuItems.current.pageYOffset || menuItems.current.scrollTop) -
      (menuItems.current.clientTop || 0)
    );
  };

  const setScrollPos = (pos) => {
    menuItems.current.scrollTop = pos;
  };

  const initScroll = () => {
    const scrollPos = getScrollPos();
    //console.log(scrollPos);
    if (scrollPos <= 0) {
      setScrollPos(1);
    }
  };

  useEffect(() => {
    let tempMenuItems = menuItems.current;
    const clonesHeight = cloneItems();
    initScroll();
    menuItems.current.style.scrollBehavior = "unset";
    const scrollUpdate = () => {
      const scrollPos = getScrollPos();
      if (clonesHeight + scrollPos >= menuItems.current.scrollHeight) {
        setScrollPos(1);
      } else if (scrollPos <= 0) {
        setScrollPos(menuItems.current.scrollHeight - clonesHeight);
      }
    };
    menuItems.current.addEventListener("scroll", scrollUpdate);

    return () => {
      tempMenuItems.removeEventListener("scroll", scrollUpdate);
    };
  }, []);

  return (
    <div className={styles.workPage} id="workitem">
      <HeadTag title="Work" />
      <section className="workHeroSection" data-scroll-section>
        <div className={styles.worksContainer} ref={menuItems}>
          {renderItems.map((work, index) => (
            <WorkItem key={index} work={work} itemIndex={index} />
          ))}
        </div>
      </section>
      <span className={styles.scrollUp}>SCROLL UP</span>
    </div>
  );
}

export default WorkPage;
