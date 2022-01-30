import "../styles/globals.scss";

import { GlobalProvider } from "../context/globalContext";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import Preloader from "../components/Preloader";
import "locomotive-scroll/src/locomotive-scroll.scss";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const [preloader, setPreloader] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <GlobalProvider>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence exitBeforeEnter={true}>
          {preloader ? (
            <motion.div key="loader">
              <Preloader setPreloader={setPreloader} />
            </motion.div>
          ) : (
            <>
              <Layout isLoaded={preloader}>
                <Component {...pageProps} />
              </Layout>
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </GlobalProvider>
  );
}

export default MyApp;
