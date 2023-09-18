import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { ParallaxProvider } from "react-scroll-parallax";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
      <ParallaxProvider>
        <AnimatePresence mode="wait">
          <motion.div
            key={router.asPath}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{}}
            transition={{ duration: 0.75 }}
          >
            <div className=" ">
              <Navbar {...pageProps} />
              <Component {...pageProps} />
              {/*<Footer />*/}
            </div>
          </motion.div>
        </AnimatePresence>
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
