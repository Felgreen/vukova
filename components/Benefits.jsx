import React from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useRouter } from "next/router";
import en from "../public/locales/en/english.json";
import es from "../public/locales/es/espanol.json";

import { useState, useEffect } from "react";
import Image from "next/image";

import CardsSection from "./CardsSection";

const Benefits = () => {
  const [isOpen, setIsOpen] = useState(false);

  const control = useAnimation();
  const [ref, inView] = useInView();

  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;

  const reservaVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", duration: 1, bounce: 0.3 },
    },
    hidden: { opacity: 0, scale: 0 },
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
          variants={reservaVariant}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex flex-wrap justify-center bg-gradient-to-br lg:bg-gradient-to-r from-[#FF3b18] to-[#011c35] lg:h-70">
            <div className="flex flex-col w-full md:w-1/3 ">
              <div className="h-full mb-4  lg:my-5">
                <div className="flex flex-col">
                  <div className=" h-20 flex items-end justify-center">
                    <h1 className="text-5xl font-montBoldItalic sm:text-6xl text-[#011c35]">
                      {t.beneficios.title}{" "}
                    </h1>
                  </div>
                  <div className="flex justify-center">
                    <div className=" h-auto flex items-center  ">
                      <h1 className="text-black font-montBold text-2xl sm:4xl mx-1">
                        {" "}
                        Plan{" "}
                      </h1>
                    </div>
                    <div className=" h-auto flex ">
                      <h1 className="text-4xl  font-montBoldItalic sm:text-5xl text-black">
                        {" "}
                        COMUNIDAD
                      </h1>
                    </div>
                  </div>
                  <div className="flex justify-center items-center h-20 ">
                    {" "}
                    <Image
                      src="/images/benefits-icon.png"
                      alt="benefits icon"
                      width={100}
                      height={100}
                      className="mx-auto mt-4 "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-2/3 p-4">
              <div className=" mb-4">
                <CardsSection />
              </div>
            </div>
            <p className=" font-montThinItalic text-black p-1">
              {t.beneficios.disclaimer}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Benefits;
