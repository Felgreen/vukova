import React from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Emoji from "../../components/ui/Emoji";

import { useEffect } from "react";

const Faq = () => {
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
    <>
      <div className="container my-10 px-6 mx-auto p-4 ">
        <AnimatePresence mode="wait">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={control}
            variants={reservaVariant}
          >
            <section id="FAQ">
              <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 font-montBold snap-y scroll-pt-20">
                <div className="my-8 divide-y divide-gray-100">
                  <details className="group py-8 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between cursor-pointer">
                      <h2 className="text-lg font-medium text-black">
                        {t.faq.preg1}
                      </h2>
                      <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                          fill="orange"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                          fill="orange"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-gray-300 font-montSemiBold">
                      {t.faq.resp1} <Emoji symbol="🛹" label="skateboard" />
                    </p>
                  </details>
                  <details className="group py-8 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between cursor-pointer">
                      <h2 className="text-lg font-medium text-black">
                        {t.faq.preg2}
                      </h2>
                      <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                          fill="orange"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                          fill="orange"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-gray-300 font-montSemiBold">
                      {t.faq.resp2}
                      <Emoji symbol="🤜" label="right-facing fist" />
                      <Emoji symbol="🤛" label="left-facing fist" />
                    </p>
                  </details>
                  <details className="group py-8 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between cursor-pointer">
                      <h2 className="text-lg font-medium text-black">
                        {t.faq.preg3}
                      </h2>
                      <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                          fill="orange"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                          fill="orange"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-gray-300 font-montSemiBold">
                      {t.faq.resp3}
                      <Emoji symbol="🧡" label="orange heart" />
                    </p>
                  </details>
                  <details className="group py-8 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between cursor-pointer">
                      <h2 className="text-lg font-medium text-black">
                        {t.faq.preg4}
                      </h2>
                      <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                          fill="orange"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                          fill="orange"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-gray-300 font-montSemiBold">
                      {t.faq.resp4}
                      <Emoji symbol="🤘" label="sign of the horns" />
                    </p>
                  </details>
                </div>
              </div>
            </section>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Faq;
