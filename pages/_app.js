import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { ParallaxProvider } from "react-scroll-parallax";
import Script from "next/script";
import { LogoB } from "../components/svg/index";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowImage(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
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
            <div
              className={`${
                showImage
                  ? "bg-black w-screen h-screen opacity-100 "
                  : "  z-0"
              } transition-all duration-400 ease-in-out`}
            >
              {showImage ? (
                <LogoB
                  className={`${
                    showImage ? "opacity-100" : "opacity-0"
                  } transition-all w-full h-full`}
                />
              ) : (
                <>
                  <Navbar {...pageProps} />
                  <Component {...pageProps} />
                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
