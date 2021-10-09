import "../styles/globals.scss";

import { GlobalProvider } from "../context/globalContext";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Preloader from "../components/Preloader";
import "locomotive-scroll/src/locomotive-scroll.scss";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps, router }) {
  const [preloader, setPreloader] = useState(true);
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
              <Layout>
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
