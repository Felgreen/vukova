import React, { useState } from "react";
import Image from "next/image";

import Ribbon from "./ui/Ribbon";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

import { useRouter } from "next/router";
import en from "../public/locales/en/english.json";
import es from "../public/locales/es/espanol.json";

const Map = () => {
  const router = useRouter();
  const { locale } = router;
  const [width, setWidth] = useState("");
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
    setWidth(window.innerWidth);
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <section id="map">
      <div className="w-screen  ">
        <AnimatePresence mode="wait">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={control}
            variants={reservaVariant}
          >
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 text-black">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="flex flex-col h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full items-center">
                  <div className="map-responsive mb-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.005626692657!2d-58.46761808442674!3d-34.57872418046593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7dc7318b8bd%3A0xe5ad26a44d1db935!2sThe%20Surf%20House!5e0!3m2!1sen!2sar!4v1672862875932!5m2!1sen!2sar"
                      width={width > 500 ? "585" : "400"}
                      height={width > 500 ? "450" : "300"}
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className=""
                    ></iframe>
                  </div>
                  <div className="flex flex-col justify-between border-2 border-white rounded-xl w-5/6 p-9 mt-4 h-auto font-montBold">
                    <div>
                      <span className="text-5xl m-2 font-archivoBlack">
                        {t.contact.title}
                      </span>
                    </div>
                    <div className="flex justify-start space-x-10 m-2 font-montSemiBold"></div>
                    <div>
                      <a
                        href="https://api.whatsapp.com/send/?phone=5491154899448&text&type=phone_number&app_absent=0"
                        className="mt-8 inline-flex items-center rounded border-2 border-[#e33d20] bg-[#e33d20]  px-8 py-3 text-black hover:bg-transparent hover:text-[#FF3B18] "
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
                <div className="h-full w-full relative">
                  <Image
                    src="/images/Teesperamos.webp"
                    alt="skatefriends"
                    layout="fill" // required
                    objectFit="cover" // change to suit your needs
                    className="rounded-xl" // just an example
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Map;
