import React from "react";

import { motion } from "framer-motion";
import { useRouter } from "next/router";

import styles from './Marquee.module.css';

import en from "../../public/locales/en/english.json";
import es from "../../public/locales/es/espanol.json";

// 2. Defining Variants
const marqueeVariants = {
  animate: {
    x: [50, -1400],
    transition: {
      x: {
        repeat:  Infinity,
        repeatType: "reverse",
        duration: 10,
        ease: "linear",
      },
    },
  },
};
const marqueeVariantsMobile = {
  animate: {
    x: [50, -2500],
    transition: {
      x: {
        repeat:  Infinity,
        repeatType: "reverse",
        duration: 15,
        ease: "linear",
      },
    },
  },
};
const Marquee = () => {
const router = useRouter();
const { locale } = router;
const t = locale === "es" ? es : en;
  return (
    <>
    <div className="top-1/2 left-1/2 absolute transform -translate-x-1/2 collapse md:visible">
      <div className={styles['marquee']}>
                {/* 3. Using framer motion */}
        <motion.div
          className={styles['track']}
          variants={marqueeVariants}
          animate="animate"
        >
          <h1>
           {t.marquee[0]}
          </h1>
          
        </motion.div>
      </div>
    </div>
    <div className="top-1/2 left-1/2 absolute transform -translate-x-1/2 md:collapse ">
      <div className={styles['marquee']}>
                {/* 3. Using framer motion */}
        <motion.div
          className={styles['track']}
          variants={marqueeVariantsMobile}
          animate="animate"
        >
          <h1>
           {t.marquee[0]}
          </h1>
          
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default Marquee;