import {
  Personal,
  Swim,
  WL,
  WOD,
  Yoga,
} from "../../components/svg/index";
import en from "../../public/locales/en/english.json";
import es from "../../public/locales/es/espanol.json";
import { useState } from "react";
import Options from "../../components/ui/Options";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Services() {
  const [option, setOption] = useState("WL");
  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;

  const boxVariant = {
    offscreen: { opacity: 0, scale: 0 },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", duration: 1, bounce: 0.3 },
    },
  };

  return (
    <section
      className="w-screen h-screen mt-32 sm:h-screen md:h-[120vh] text-black flex items-center justify-center"
      id="activities"
    >
      <div className="px-4 mx-auto max-w-7xl h-full sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-y-10 lg:grid-cols-5 gap-x-4 font-montBold">
          <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
            <div className="flex items-start lg:p-2">
              <a
                className="cursor-pointer flex"
                onClick={() => setOption("WL")}
              >
                <span className="flex items-center rounded-lg bg-gray-50 p-1">
                  <WL className="text-3xl" />
                </span>
                <div className="ml-5 flex items-center">
                  <motion.h3
                    className="text-xl font-semibold text-black"
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    variants={boxVariant}
                    viewport={{ once: true, amount: 1 }}
                  >
                    {t.servicios.WL.toUpperCase()}
                  </motion.h3>
                </div>
              </a>
            </div>
            <div className="flex items-start lg:p-2">
              <a
                className="cursor-pointer flex"
                onClick={() => setOption("YOGA")}
              >
                <span className="flex items-center rounded-lg bg-gray-50 p-1">
                  <Yoga className="text-3xl" />
                </span>
                <div className="ml-5 flex items-center">
                  <motion.h3
                    className="text-xl font-semibold text-black"
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    variants={boxVariant}
                    viewport={{ once: true, amount: 1 }}
                  >
                    {t.servicios.YOGA.toUpperCase()}
                  </motion.h3>
                </div>
              </a>
            </div>
            <div className="flex items-start lg:p-2">
              <a
                className="cursor-pointer flex"
                onClick={() => setOption("NATACION")}
              >
                <span className="flex items-center rounded-lg bg-gray-50 p-1">
                  <Swim className="text-3xl" />
                </span>
                <div className="ml-5 flex items-center">
                  <motion.h3
                    className="text-xl font-semibold text-black"
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    variants={boxVariant}
                    viewport={{ once: true, amount: 1 }}
                  >
                    {t.servicios.NATACION.toUpperCase()}
                  </motion.h3>
                </div>
              </a>
            </div>
            <div className="flex items-start lg:p-2">
              <a
                className="cursor-pointer flex"
                onClick={() => setOption("PERSONAL")}
              >
                <span className="flex items-center rounded-lg bg-gray-50 p-1">
                  <Personal className="text-3xl" />
                </span>
                <div className="ml-5 flex items-center">
                  <motion.h3
                    className="text-xl font-semibold text-black"
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    variants={boxVariant}
                    viewport={{ once: true, amount: 1 }}
                  >
                    {t.servicios.PERSONAL.toUpperCase()}
                  </motion.h3>
                </div>
              </a>
            </div>
            <div className="flex items-start lg:p-2">
              <a
                className="cursor-pointer flex"
                onClick={() => setOption("WOD")}
              >
                <span className="flex items-center rounded-lg bg-gray-50 p-1">
                  <WOD className="text-3xl" />
                </span>
                <div className="ml-5 flex items-center">
                  <motion.h3
                    className="text-xl font-semibold text-black"
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    variants={boxVariant}
                    viewport={{ once: true, amount: 1 }}
                  >
                    {t.servicios.WOD.toUpperCase()}
                  </motion.h3>
                </div>
              </a>
            </div>
          </div>
          <div className="lg:col-span-3 flex justify-center m-auto">
            <Options option={option} t={t} />
          </div>
        </div>
      </div>
    </section>
  );
}
