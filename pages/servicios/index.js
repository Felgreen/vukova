import {
  Evaluation,
  Yoga,
  Kinio,
  Nutrition,
  Ostio,
} from "../../components/svg/index";
import en from "../../public/locales/en/english.json";
import es from "../../public/locales/es/espanol.json";
import { useState, useEffect, useRef } from "react";
import Options from "../../components/ui/Options";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Services() {
  const [option, setOption] = useState("HIIT");
  const popupRef = useRef(null);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        const div = document.getElementById("horarios");
        div.classList.add("hidden");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef]);

  const handleHorarios = () => {
    const div = document.getElementById("horarios");
    if (div.classList.contains("hidden")) {
      div.classList.remove("hidden");
    } else {
      div.classList.add("hidden");
    }
  };

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
            <div className="flex items-start lg:p-4">
              <a
                className="cursor-pointer flex"
                onClick={() => setOption("EDP")}
              >
                <span className="flex items-center rounded-lg bg-gray-50 p-1">
                  <Evaluation className="text-3xl" />
                </span>
                <div className="ml-5 flex items-center">
                  <motion.h3
                    className="text-xl font-semibold text-black"
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    variants={boxVariant}
                    viewport={{ once: true, amount: 1 }}
                  >
                    {t.servicios.Prev1}
                  </motion.h3>
                </div>
              </a>
            </div>
            <div className="flex items-start lg:p-4">
              <a
                className="cursor-pointer flex"
                onClick={() => setOption("GKP")}
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
                    {t.servicios.GKP1}
                  </motion.h3>
                </div>
              </a>
            </div>
            <div className="flex items-start lg:p-4">
              <a
                className="cursor-pointer flex"
                onClick={() => setOption("Kinio")}
              >
                <span className="flex items-center rounded-lg bg-gray-50 p-1">
                  <Kinio className="text-3xl" />
                </span>
                <div className="ml-5 flex items-center">
                  <motion.h3
                    className="text-xl font-semibold text-black"
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    variants={boxVariant}
                    viewport={{ once: true, amount: 1 }}
                  >
                    {t.servicios.KINESIOLOGIA1}
                  </motion.h3>
                </div>
              </a>
            </div>
            <div className="flex items-start lg:p-4">
              <a
                className="cursor-pointer flex"
                onClick={() => setOption("Nutri")}
              >
                <span className="flex items-center rounded-lg bg-gray-50 p-1">
                  <Nutrition className="text-3xl" />
                </span>
                <div className="ml-5 flex items-center">
                  <motion.h3
                    className="text-xl font-semibold text-black"
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    variants={boxVariant}
                    viewport={{ once: true, amount: 1 }}
                  >
                    {t.servicios.NUTRICION1}
                  </motion.h3>
                </div>
              </a>
            </div>
            <div className="flex items-start lg:p-4">
              <a
                className="cursor-pointer flex"
                onClick={() => setOption("Osteo")}
              >
                <span className="flex items-center rounded-lg bg-gray-50 p-1">
                  <Ostio className="text-3xl" />
                </span>
                <div className="ml-5 flex items-center">
                  <motion.h3
                    className="text-xl font-semibold text-black"
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    variants={boxVariant}
                    viewport={{ once: true, amount: 1 }}
                  >
                    {t.servicios.OSTEOPATIA1}
                  </motion.h3>
                </div>
              </a>
            </div>

            <div className="flex flex-col items-center m-auto w-full">
              <button
                className="bg-[#f37032] p-2 mt-2 w-36 justify-center h-12 items-center rounded-xl text-black flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#ee2967] duration-300"
                onClick={handleHorarios}
              >
                <span>{t.button.horarios}</span>
              </button>
              <section
                id="horarios"
                ref={popupRef}
                className="absolute hidden flex-col popup overflow-hidden rounded-lg top-20 shadow-2xl lg:pb-0 bg-white  z-20 sm:full md:w-2/3"
              >
                <div className="ml-auto p-2 pt-0 text-center sm:px-8 sm:pt-2 sm:pb-8 w-full">
                  <div className="flex row items-center font-semibold justify-center w-full">
                    <div className="flex sm:w-1/3 justify-end ml-auto">
                      <span
                        className="pb-2 cursor-pointer"
                        onClick={handleHorarios}
                      >
                        X
                      </span>
                    </div>
                  </div>
                  <div className="items-center justify-center flex">
                    <img
                      alt="Trainer"
                      src="/images/Horariosentrenamientos.webp"
                      className="inset-0 rounded-md object-cover w-full"
                    />
                  </div>
                </div>
              </section>
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
