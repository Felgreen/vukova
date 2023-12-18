import { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Ribbon from "./ui/Ribbon";
import {
  Comm,
  Team,
 
} from "./svg/index";

export default function Features({t}) {

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
    <> 
    <AnimatePresence mode="wait">
    <motion.div className="mx-auto max-w-screen-2xl px-4 py-32 sm:px-6 lg:px-8 text-justify"
    ref={ref}
    initial="hidden"
    animate={control}
    variants={reservaVariant}>
    <section className="w-full py-12 md:py-24 lg:py-24 xl:py-28 bg-white" >
    
      <div className="container mx-auto px-4 md:px-6  justify-center items-center">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-black to-[#ee2967]  font-antonioBold">
               {t("features.title")}
              </h1>
              <p className="max-w-[600px] text-black md:text-xl dark:text-black mx-auto font-antonRegular">
              {t("features.subtitle")}
              </p>
            </div>
            <div className="w-full max-w-full space-y-4 mx-auto">
              <div className="grid grid-cols-1  lg:grid-cols-3 gap-8">
                <div className="flex flex-col items-center space-y-2 border-black p-4 rounded-lg">
                  <div className="p-2 bg-white bg-opacity-50 rounded-full">
                    <Team className="text-black h-7 w-7 mb-2 opacity-75" />
                  </div>
                  <h2 className="text-xl  text-black font-antonRegular">{t("features.feature1")}</h2>
                  <p className="text-black dark:text-black font-antonioBold">
                   {t("features.det1")}
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border-black p-4 rounded-lg">
                  <div className="p-2 bg-white bg-opacity-50 rounded-full">
                    <Comm className="text-black h-7 w-7 mb-2 opacity-75" />
                  </div>
                  <h2 className="text-xl  font-antonRegular text-black ">{t("features.feature2")}</h2>
                  <p className="text-black font-antonioBold dark:text-black">
                  {t("features.det2")}
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border-black p-4 rounded-lg">
                  <div className="p-2 bg-white bg-opacity-50 rounded-full">
                    <SettingsIcon className="text-black h-7 w-7 mb-2 opacity-75" />
                  </div>
                  <h2 className="text-xl font-antonRegular text-black">{t("features.feature3")}</h2>
                  <p className="text-black dark:text-black font-antonioBold">
                  {t("features.det3")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </motion.div>
    </AnimatePresence>
    </>
  )
}

function InboxIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  )
}


function MergeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 6 4-4 4 4" />
      <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
      <path d="m20 22-5-5" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
