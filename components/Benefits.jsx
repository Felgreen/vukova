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
                      <h1 className="text-white font-montBold text-2xl sm:4xl mx-1">
                        {" "}
                        Plan{" "}
                      </h1>
                    </div>
                    <div className=" h-auto flex ">
                      <h1 className="text-4xl  font-montBoldItalic sm:text-5xl text-white">
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
                {/* <div className="max-w-xl text-center">
          <h1 className="text-4xl font-montBoldItalic sm:text-6xl text-[#011c35]">
          BENEFICIOS 
        <strong className="block font-montBold text-white">
          BENEFICIOS 
        </strong>
      </h1>
      <Image
      src="/images/benefits-icon.png"
      alt="benefits icon"
      width={100}
      height={100}
      className="mx-auto mt-4 "
      />
        </div> */}
              </div>
            </div>
            <div className="flex flex-col w-full md:w-2/3 p-4">
              <div className=" mb-4">
                <CardsSection />
              </div>
            </div>
            <p className=" font-montThinItalic text-white p-1">
              {t.beneficios.disclaimer}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* <section className="relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div className="flex flex-wrap -mx-4">
      <motion.div   className="w-full sm:w-1/2 md:w-1/2 lg:w-1/5 px-1 mb-8">
        <div className="relative h-64">
          <div className="absolute inset-0 bg-gray-200 transform -skew-x-6  "></div>
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center p-6">
            <h2 className="text-white text-2xl font-bold mb-4">Card Title</h2>
            <p className="text-white text-base">Card content goes here</p>
          </div>
        </div>
      </motion.div>

      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/5 px-1 mb-8">
        <div className="relative h-64">
          <div className="absolute inset-0 bg-gray-200 transform -skew-x-6  "></div>
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center p-6">
            <h2 className="text-white text-2xl font-bold mb-4">Card Title</h2>
            <p className="text-white text-base">Card content goes here</p>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/5 px-1 mb-8">
        <div className="relative h-64">
          <div className="absolute inset-0 bg-gray-200 transform -skew-x-6  "></div>
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center p-6">
            <h2 className="text-white text-2xl font-bold mb-4">Card Title</h2>
            <p className="text-white text-base">Card content goes here</p>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/5 px-1 mb-8">
        <div className="relative h-64">
          <div className="absolute inset-0 bg-gray-200 transform -skew-x-6  "></div>
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center p-6">
            <h2 className="text-white text-2xl font-bold mb-4">Card Title</h2>
            <p className="text-white text-base">Card content goes here</p>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/5 px-1 mb-8">
        <div className="relative h-64">
          <div className="absolute inset-0 bg-gray-200 transform -skew-x-6  "></div>
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center p-6">
            <h2 className="text-white text-2xl font-bold mb-4">Card Title</h2>
            <p className="text-white text-base">Card content goes here</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>





  

    <section id='beneftis' className='flex-wrap justify-center items-center '>
    <motion.div 
      layout
      transition={{ layout: {duration:1},
      type:"spring" }} 
      onClick={()=> setIsOpen(!isOpen)}className='relative block rounded-sm border-t-4 border-pink-600 p-4 shadow-xl sm:p-6 lg:p-8'>
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
      <motion.h2 layout="position justify-center items-center w-10" >
        Beneficio 1
        </motion.h2>
        {isOpen && (
        <motion.div className='w-24'>

          <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam inventore animi accusamus libero quasi dolorum corrupti, facilis eligendi assumenda possimus.</p>
        </motion.div>
        )}
    </motion.div>
    <motion.div 
      layout
      transition={{ layout: {duration:1},
      type:"spring" }} 
      onClick={()=> setIsOpen(!isOpen)}className='relative block rounded-sm border-t-4 border-pink-600 p-4 shadow-xl sm:p-6 lg:p-8'>
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
      <motion.h2 layout="position justify-center items-center w-10" >
        Beneficio 1
        </motion.h2>
        {isOpen && (
        <motion.div className='w-24'>

          <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam inventore animi accusamus libero quasi dolorum corrupti, facilis eligendi assumenda possimus.</p>
        </motion.div>
        )}
    </motion.div>
    <motion.div 
      layout
      transition={{ layout: {duration:1},
      type:"spring" }} 
      onClick={()=> setIsOpen(!isOpen)}className='relative block rounded-sm border-t-4 border-pink-600 p-4 shadow-xl sm:p-6 lg:p-8'>
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
      <motion.h2 layout="position justify-center items-center w-10" >
        Beneficio 1
        </motion.h2>
        {isOpen && (
        <motion.div className='w-24'>

          <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam inventore animi accusamus libero quasi dolorum corrupti, facilis eligendi assumenda possimus.</p>
        </motion.div>
        )}
    </motion.div>
    <motion.div 
      layout
      transition={{ layout: {duration:1},
      type:"spring" }} 
      onClick={()=> setIsOpen(!isOpen)}className='relative block rounded-sm border-t-4 border-pink-600 p-4 shadow-xl sm:p-6 lg:p-8'>
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
      <motion.h2 layout="position justify-center items-center w-10" >
        Beneficio 1
        </motion.h2>
        {isOpen && (
        <motion.div className='w-24'>

          <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam inventore animi accusamus libero quasi dolorum corrupti, facilis eligendi assumenda possimus.</p>
        </motion.div>
        )}
    </motion.div>
   </section>  */}

      {/* <section className="relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div className="flex flex-wrap -mx-4">
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/5 px-1 mb-8">
        <div className="relative h-64">
          <div className="absolute inset-0 bg-gray-200 transform -skew-x-6  "></div>
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center p-6">
            <h2 className="text-white text-2xl font-bold mb-4">Card Title</h2>
            <p className="text-white text-base">Card content goes here</p>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/5 px-1 mb-8">
        <div className="relative h-64">
          <div className="absolute inset-0 bg-gray-200 transform -skew-x-6  "></div>
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center p-6">
            <h2 className="text-white text-2xl font-bold mb-4">Card Title</h2>
            <p className="text-white text-base">Card content goes here</p>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/5 px-1 mb-8">
        <div className="relative h-64">
          <div className="absolute inset-0 bg-gray-200 transform -skew-x-6  "></div>
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center p-6">
            <h2 className="text-white text-2xl font-bold mb-4">Card Title</h2>
            <p className="text-white text-base">Card content goes here</p>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/5 px-1 mb-8">
        <div className="relative h-64">
          <div className="absolute inset-0 bg-gray-200 transform -skew-x-6  "></div>
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center p-6">
            <h2 className="text-white text-2xl font-bold mb-4">Card Title</h2>
            <p className="text-white text-base">Card content goes here</p>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/5 px-1 mb-8">
        <div className="relative h-64">
          <div className="absolute inset-0 bg-gray-200 transform -skew-x-6  "></div>
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center p-6">
            <h2 className="text-white text-2xl font-bold mb-4">Card Title</h2>
            <p className="text-white text-base">Card content goes here</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section> */}
    </>
  );
};

export default Benefits;
