import { useEffect } from "react";
import CustomCursor from "./CustomCursor";
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";

function Layout({ children, isLoaded }) {
  let router = useRouter();
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    console.log(router.pathname, "locomotive-scroll");
    if (!isLoaded) {
      let scroll;
      import("locomotive-scroll").then((LocomotiveScroll) => {
        scroll = new LocomotiveScroll.default({
          el: document.querySelector("#scroll-container"),
          multiplier: 1,
          smooth: true,
          smoothMobile: true,
          smartphone: {
            smooth: true,
            multiplier: 0.1,
          },
          tablet: {
            smooth: true,
            multiplier: 0.9,
          },
          class: "is-reveal",
        });
      });

      setTimeout(() => {
        scroll.update();
      }, 5000);

      return () => {
        if (scroll) {
          scroll.destroy();
        }
      };
    } else {
      return;
    }

    // setTimeout(() => {
    //   scroll.update();
    //   console.log("update");
    // }, 1000);
  }, [router.pathname, isLoaded]);
  return (
    <main id="scroll-container" data-scroll-container>
      <CustomCursor />
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
