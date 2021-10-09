import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "../styles/Header.module.scss";
import { MoonIcon } from "./Icons/MoonIcon";
import { SunIcon } from "./Icons/SunIcon";
import Link from "next/link";
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../context/globalContext";
import { useRouter } from "next/router";

function Header() {
  const [theme, setTheme] = useState("dark");
  const [icon, setIcon] = useState(<MoonIcon />);
  const [scroll, setScrollPosition] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const dispatch = useGlobalDispatchContext();
  const headerRef = useRef(null);
  const router = useRouter();
  const controls = useAnimation();

  const handleDispatch = (type, style) => {
    dispatch({ type: type, cursorStyles: style });
  };

  useEffect(() => {
    document.body.classList.add("light");
    window.addEventListener("wheel", handleScroll, { passive: true });

    //link-mouse-enter
    document.querySelectorAll("ul li a").forEach((el) => {
      el.addEventListener("mouseover", () => {
        handleDispatch("CURSOR_STYLES", "link");
      });
      el.addEventListener("mouseout", () => {
        handleDispatch("CURSOR_STYLES", "default");
      });
    });

    //logo-mouse-enter
    document
      .querySelector(".Header_logo__1ZEvY")
      .addEventListener("mouseover", () => {
        handleDispatch("CURSOR_STYLES", "hamburger");
      });

    document
      .querySelector(".Header_logo__1ZEvY")
      .addEventListener("mouseout", () => {
        handleDispatch("CURSOR_STYLES", "default");
      });

    document
      .querySelector(".Header_themeBtn__2KtQd")
      .addEventListener("mouseover", () => {
        handleDispatch("CURSOR_STYLES", "themeBtnHover");
      });
    document
      .querySelector(".Header_themeBtn__2KtQd")
      .addEventListener("mouseout", () => {
        handleDispatch("CURSOR_STYLES", "default");
      });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.pathname]);

  useEffect(() => {
    if (scroll > 100) {
      document.getElementsByClassName(styles.line)[0].style.width = 0;
    } else {
      document.getElementsByClassName(styles.line)[0].style.width = "80%";
    }

    //console.log(scroll);
  }, [scroll]);

  const handleScroll = () => {
    const position = window.pageYOffset;

    setScrollPosition(position);
  };

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      setIcon(<MoonIcon />);
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      setIcon(<SunIcon />);
    }
  };

  return (
    <motion.header
      layout
      className={styles.mainHeader}
      ref={headerRef}
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: 0.5,
        },
      }}
    >
      <nav>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              N
              <svg viewBox="0 0 70 36">
                <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
              </svg>
            </a>
          </Link>
        </div>
        <motion.span
          className={styles.line}
          initial={{ width: 0 }}
          animate={{
            width: "80%",
            transition: {
              ease: "easeInOut",
              duration: 0.5,
            },
          }}
        />
        <ul>
          <li>
            <Link href="/work">
              <a>
                WORK
                <svg viewBox="0 0 70 36">
                  <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                </svg>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>
                ABOUT
                <svg viewBox="0 0 70 36">
                  <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                </svg>
              </a>
            </Link>
          </li>
          <button className={styles.themeBtn} onClick={handleThemeToggle}>
            {icon}
          </button>
        </ul>
      </nav>
    </motion.header>
  );
}

export default Header;
