import React from "react";
import Image from "next/image";
import styles from "./Ribbon.module.css";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

// falta animar no queda muy piola en esta posicion pero es para mostrar por ahora. Despues movemos el componente
// no puedo generar un loop del svg necesitamos meternos mas en framer motion para entender bien como se hace.

const Ribbon = () => {
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
    <div className="flex screen my-[1px] ">
      {/* <!-- ribbon --> */}
      <div className="mx-auto    text-center font-semibold w-screen px-4 py-16 sm:px-6 lg:px-8 text-black">
        <AnimatePresence mode="wait">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={control}
            variants={reservaVariant}
          >
            <div className=" border-t-[1px] border-b-[1px]">
              <div className={styles["tech-slideshow"]}>
                <div className={styles["mover-1"]}></div>
              </div>
            </div>

            {/*     
              <Image 
              src={logos}
              alt="logos"
              objectFit='cover'
              objectPosition=''
              fill='contain'
              className='flex'
              />
            */}
          </motion.div>
        </AnimatePresence>
        {/* <!-- end ribbon --> */}
      </div>
    </div>
  );
};

export default Ribbon;
