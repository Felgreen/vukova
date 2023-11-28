import React from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedTextWord = ({ text }) => {
  const [ref, inView] = useInView();
  const control = useAnimation();


  const words = text.split(" ");

// Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      scale:1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

// Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <>
    <AnimatePresence mode="wait">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={control}
        variants={container}
        style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            style={{ marginRight: "5px", color:"white" }}
            key={index}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
    </>
  );
};

export default AnimatedTextWord;