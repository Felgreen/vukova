import React from "react";
import { useEffect, useState } from "react";
import { Superacion, Vukova } from "../components/svg";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Main = ({ t }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const [width, setWidth] = useState(window.innerWidth);

  const reservaVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", duration: 1, bounce: 0.3 },
    },
    hidden: { opacity: 0, scale: 0 },
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div
      id="main"
      className="flex justify-center w-screen h-screen text-center bg-white"
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="flex justify-center w-screen h-screen text-center bg-white "
          ref={ref}
          initial="hidden"
          animate={control}
          variants={reservaVariant}
          
        >
          <div className="container">
            <div className="columns-2 md:my-20 mt-24 h-3/4 md:w-full md:h-full flex flex-col md:flex-row justify-center items-center">
              <div className="flex items-center justify-center md:h-3/4 md:w-full h-full">
                <Superacion className="h-full w-full" />
              </div>
              <div className="h-1/2 md:h-full md:w-full flex flex-col items-center justify-center">
                <Vukova className="w-full h-full md:w-full md:h-2/4" />
                <div className="columns-2 mt-2 text-sm w-full flex justify-center items-center">
                  <div className="mx-auto flex">
                    <p className=" font-antonRegular text-lg">{t.about.cta}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Main;
