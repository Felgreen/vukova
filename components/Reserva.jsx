import React from "react";
import Image from "next/image";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useEffect } from "react";
import Ribbon from "../components/ui/Ribbon";

import { useRouter } from "next/router";
import en from "./../public/locales/en/english.json";
import es from "./../public/locales/es/espanol.json";

const Reserva = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;

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
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <section id="reserva">
      <div className="w-screen bg-[#011C35] ">
        <AnimatePresence mode="wait">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={control}
            variants={reservaVariant}
          >
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8  text-white font-montBold">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                  <Image
                    src="/images/surfbowl3.webp"
                    alt="surfbowl"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div className="lg:py-24 space-y-8">
                  <h2 className="text-3xl font-bold sm:text-5xl font-montBold">
                    {t.reserva.head}
                  </h2>
                  <p className="mt-4 text-gray-200">{t.reserva.desc}</p>
                  <p className="underline decoration-2  decoration-[#FF3B18] underline-offset-4">
                    {t.reserva.class}
                  </p>
                  <a
                    href="https://api.whatsapp.com/send/?phone=5491154899448&text&type=phone_number&app_absent=0"
                    target="_blank"
                    className="animate-bounce mt-8 inline-flex items-center rounded border-2 border-[#e33d20] bg-[#e33d20]  px-8 py-3 text-white hover:bg-transparent hover:text-[#FF3B18] "
                  >
                    <span className="text-sm font-medium">
                      {" "}
                      {t.reserva.button}{" "}
                    </span>
                    <svg
                      className="ml-3 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Reserva;
