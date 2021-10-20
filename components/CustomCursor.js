import React, { useEffect, useRef, useState } from "react";
import { useGlobalStateContext } from "../context/globalContext";
import Image from "next/image";

const CustomCursor = () => {
  const [cursorImage, setCursorImage] = useState(null);
  const { cursorStyles } = useGlobalStateContext();
  const secondaryCursor = useRef(null);
  const mainCursor = useRef(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      positionRef.current.mouseX =
        mouseX - secondaryCursor.current.clientWidth / 2;
      positionRef.current.mouseY =
        mouseY - secondaryCursor.current.clientHeight / 2;
      mainCursor.current.style.transform = `translate3d(${
        mouseX - mainCursor.current.clientWidth / 2
      }px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
    });

    return () => {};
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;

      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };
    positionRef && secondaryCursor && followMouse();
  }, [secondaryCursor]);

  useEffect(() => {
    if (cursorStyles === "link-digitalvault") {
      setCursorImage("avoss_gif.gif");
    } else if (cursorStyles === "link-quantek") {
      setCursorImage("quantek_gif.gif");
    } else if (cursorStyles === "link-sapne") {
      setCursorImage("sapne_gif.gif");
    } else {
      setCursorImage(null);
    }
  }, [cursorStyles]);

  return (
    <div className={`cursor-wrapper ${cursorStyles}`}>
      <div className="main-cursor " ref={mainCursor}>
        <div className="main-cursor-background"></div>
      </div>
      <div className="secondary-cursor" ref={secondaryCursor}>
        <div className="cursor-background">
          {cursorStyles === "work" ? "GO" : null}
          {cursorStyles === "footerHello" ? (
            <Image
              priority="true"
              src="/wave-hello.gif"
              alt="hand"
              height="30"
              width="30"
            />
          ) : null}
          {cursorStyles === "slider-drag" ? "Drag" : null}
          {cursorStyles && cursorImage && (
            <Image
              priority="true"
              src={`/images/common/${cursorImage}`}
              alt={cursorImage}
              layout="fill"
            />
          )}
          {/* {cursorStyles == "link-digitalvault" ? (
            <Image
              priority="true"
              src={`/images/common/${cursorImage}`}
              alt="hand"
              layout="fill"
            />
          ) : null} */}
        </div>
      </div>
    </div>
  );
};

export default CustomCursor;
