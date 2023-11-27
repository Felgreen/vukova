import React from "react";
// 1. Importing framer-motion
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import styles from './Marquee.module.css';

import en from "../../public/locales/en/english.json";
import es from "../../public/locales/es/espanol.json";

// 2. Defining Variants
const marqueeVariants = {
  animate: {
    x: [50, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 7,
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
    <div className="top-1/2 left-1/2 absolute transform -translate-x-1/2 ">
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
  );
};

export default Marquee;