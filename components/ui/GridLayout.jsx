import React from "react";
import Image from "next/image";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

const GridLayout = ({ t }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const reservaVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", duration: 1, bounce: 0.3 },
    },
    hidden: { opacity: 0, scale: 0 },
  };

  const boxVariant = {
    offscreen: { opacity: 0, scale: 0 },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", duration: 1, bounce: 0.3 },
    },
  };
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <>
      <div className="mt-40 hidden md:grid place-items-center min-h-screen text-black">
        {/* Responsive Grid Layout */}
        <div className="p-4 max-w-5xl grid gap-4 xs:grid-cols-2 xs:p-8 md:grid-cols-4 lg:gap-6">
          <motion.h1
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={boxVariant}
            viewport={{ once: true, amount: 1 }}
            className="text-3xl font-extrabold xs:col-span-2 xs:grid xs:gap-4 xs:grid-cols-2 md:col-span-3 md:text-5xl md:grid-cols-3 lg:text-6xl font-montBold"
          >
            <span className="md:col-span-2">{t.about.header}</span>
          </motion.h1>

          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={boxVariant}
            viewport={{ once: true, amount: 1 }}
            className=" h-auto square hover:scale-105 "
          >
            <div className="group relative flex  h-full">
              <Image
                src="/images/personaltraining.png"
                alt="personal training"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 h-full w-full object-cover
         opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-6">
                <p className="text-xl font-medium uppercase tracking-widest underline decoration-[#e33d20]">
                  {t.grid.title1}
                </p>

                <p className="text-2xl font-bold text-black"></p>
                <div className="">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-md text-black font-semibold">
                      {t.grid.desc1}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={boxVariant}
            viewport={{ once: true, amount: 1 }}
            className=" h-auto square hover:scale-105 "
          >
            <div className="group relative flex h-full">
              <Image
                src="/images/crosstraining.webp"
                alt="cross training"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 h-full w-full object-cover
        opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-6">
                <p className="text-xl font-medium uppercase tracking-widest underline decoration-[#e33d20]">
                  {t.grid.title2}
                </p>

                <p className="text-2xl font-bold text-black"></p>
                <div className="">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-md font-semibold text-black">
                      {t.grid.desc2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={boxVariant}
            viewport={{ once: true, amount: 1 }}
            className=" h-auto square hover:scale-105 "
          >
            <div className="group relative flex  h-full">
              <Image
                src="/images/functionaltraining.webp"
                alt="functional training"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 h-full w-full object-cover
       opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-6">
                <p className="text-xl font-medium uppercase tracking-widest underline decoration-[#e33d20]">
                  {t.grid.title3}
                </p>

                <p className="text-2xl font-bold text-black"></p>
                <div className="">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-black font-semibold">
                      {t.grid.desc3}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={boxVariant}
            viewport={{ once: true, amount: 1 }}
            className=" h-auto square hover:scale-105 "
          >
            <div className="group relative flex  h-full">
              <Image
                src="/images/levantamientopesas.png"
                alt="levantamiento pesas"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 h-full w-full object-cover
       opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-6">
                <p className="text-xl font-medium uppercase tracking-widest underline decoration-[#e33d20]">
                  {t.grid.title4}
                </p>

                <p className="text-2xl font-bold text-black"></p>
                <div className="">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-black font-semibold">
                      {t.grid.desc4}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={boxVariant}
            viewport={{ once: true, amount: 1 }}
            className=" h-auto square hover:scale-105 "
          >
            <div className="group relative flex  h-full">
              <Image
                src="/images/vinyasayoga.webp"
                alt="vinyasa yoga"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 h-full w-full object-cover
       opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-6">
                <p className="text-xl font-medium uppercase tracking-widest underline decoration-[#e33d20]">
                  {t.grid.title5}
                </p>

                <p className="text-2xl font-bold text-black"></p>
                <div className="">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-black font-semibold">
                      {t.grid.desc5}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.p
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={boxVariant}
            viewport={{ once: true, amount: 1 }}
            className="self-center md:text-md md:col-span-2 md:text-center md:px-4  font-montSemiBold"
          >
            {t.grid.last}
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default GridLayout;
