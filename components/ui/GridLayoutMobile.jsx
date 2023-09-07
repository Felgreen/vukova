import React from 'react'
import Image from 'next/image';


import { useRouter } from "next/router";
import {AnimatePresence, motion,useAnimation,Variants} from 'framer-motion';
import { useInView } from "react-intersection-observer";

import { useEffect } from "react";
import en from "../../public/locales/en/english.json";
import es from "../../public/locales/es/espanol.json";


const GridLayout = () => {

  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;

  const control = useAnimation()
  const [ref, inView] = useInView()
  
  const reservaVariant = {
    visible: { opacity: 1, scale: 1,transition:{type:'spring',duration: 1, bounce: 0.3} },
    hidden: { opacity: 0, scale: 0 }
  };

  const boxVariant = {
    offscreen:{  opacity: 0, scale: 0},
    onscreen:{opacity: 1, scale: 1,transition:{type:'spring',duration: 1, bounce: 0.3}}

  }
  const textAnimate={
    offscreen:{y:100, opacity:0},
    onscreen:{y:0, opacity:1,
              transition:{type:"spring",bounce:0.1, duration:3}}
  }
  const pAnimate={
    offscreen:{x:-100},
    onscreen:{x:0,
              transition:{type:"spring",
            bounce:0.1,
            duration:3}}
  }
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
  }, [control, inView]);

  return (
    <>
    <div className="grid md:hidden place-items-center min-h-screen text-white">
             
    {/* Responsive Grid Layout */} 
    
    <div className="p-4 max-w-5xl grid gap-4 xs:grid-cols-2 xs:p-8 md:grid-cols-4 lg:gap-6 ">
      
      <motion.h1 
      initial={"offscreen"}
      whileInView={"onscreen"}
      variants={boxVariant}
      viewport={{once:true,amount:1}}
     
      className="text-4xl  font-extrabold xs:col-span-2 xs:grid xs:gap-4 xs:grid-cols-2 md:col-span-3 md:text-5xl md:grid-cols-3 lg:text-6xl font-montBold">
         <span className="md:col-span-2">{t.about.header}</span> 
      </motion.h1>
      <motion.p 
      initial={"offscreen"}
      whileInView={"onscreen"}
      variants={boxVariant}
      viewport={{once:true,amount:1}}className="xs:row-start-2 xs:col-start-2 xs:self-center md:col-start-1 md:col-span-2 md:pr-12 md:text-lg md:my-auto font-semibold">{t.about.desc}</motion.p>
      
      <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      variants={boxVariant}
      viewport={{once:true,amount:1}}
      transition={{staggerChildren:0.5}}
       className=" h-auto square hover:scale-105 ">
        
        <div className="group relative flex bg-black h-full">
        <Image
        src="/images/surfbowl.png"
        alt="surfbowl"
        layout="fill"
        objectFit="cover"
      
        className="absolute inset-0 h-full w-full object-cover
         opacity-70 transition-opacity group-hover:opacity-50"
      />
       
        <div className="relative p-4 ">
   
            <motion.p 
            variants={textAnimate}
            className="text-3xl font-medium uppercase tracking-widest font-montBold text-white underline decoration-[#e33d20] ">
             {t.grid.title1}
          </motion.p>
        
          <p className="text-2xl font-bold text-white"></p>
            <div className="">
                <div className="translate-y-32">
              <motion.p 
              variants={pAnimate}
              className="text-base text-white  font-montBold">
                {t.grid.desc1}
               
              </motion.p>
            </div>
          </div>
        </div>
        </div>
      </motion.div>
     
    
      <motion.div
       initial={"offscreen"}
       whileInView={"onscreen"}
       variants={boxVariant}
       viewport={{once:true,amount:1}}
       className=" h-auto square hover:scale-105 ">
        
       <div className="group relative flex bg-black h-full">
       <Image
       src="/images/surfskate.webp"
       alt="surfbowl"
       layout="fill"
       objectFit="cover"
     
       className="absolute inset-0 h-full w-full object-cover
        opacity-70 transition-opacity group-hover:opacity-50"
     />
      
       <div className="relative p-4 ">
  
           <motion.p 
           variants={textAnimate}
           className="text-3xl font-medium uppercase tracking-widest font-montBold text-white underline decoration-[#e33d20] ">
            {t.grid.title2}
         </motion.p>
       
         <p className="text-2xl font-bold text-white"></p>
           <div className="">
               <div className="translate-y-32">
             <motion.p 
             variants={pAnimate}
             className="text-base text-white  font-montBold">
           {t.grid.desc2}
             </motion.p>
           </div>
         </div>
       </div>
       </div>

      </motion.div>
      <motion.div 
      initial={"offscreen"}
      whileInView={"onscreen"}
      variants={boxVariant}
      viewport={{once:true,amount:1}}
      className=" h-auto square hover:scale-105 ">
        
      <div className="group relative flex h-full">
      <Image
      src="/images/instalaciones.webp"
      alt="surfbowl"
      layout="fill"
      objectFit="cover"
    
      className="absolute inset-0 h-full w-full object-cover
       opacity-70 transition-opacity group-hover:opacity-50"
    />
     
      <div className="relative p-4 ">
 
          <motion.p 
          variants={textAnimate}
          className="text-3xl font-medium uppercase tracking-widest font-montBold text-white underline decoration-[#e33d20] ">
          {t.grid.title3}
        </motion.p>
      
        <p className="text-2xl font-bold text-white"></p>
          <div className="">
              <div className="translate-y-32">
            <motion.p 
            variants={pAnimate}
            className="text-base text-white  font-montBold">
              {t.grid.desc3}
             
            </motion.p>
          </div>
        </div>
      </div>
      </div>
      </motion.div>
      <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      variants={boxVariant}
      viewport={{once:true,amount:1}} 
      className=" h-auto square hover:scale-105 ">
        
      <div className="group relative flex h-full">
      <Image
      src="/images/shop.webp"
      alt="surfbowl"
      layout="fill"
      objectFit="cover"
    
      className="absolute inset-0 h-full w-full object-cover
       opacity-70 transition-opacity group-hover:opacity-50"
    />
     
      <div className="relative p-4 ">
 
          <motion.p 
          variants={textAnimate}
          className="text-3xl font-medium uppercase tracking-widest font-montBold text-white underline decoration-[#e33d20] ">
          {t.grid.title4}
        </motion.p>
      
        <p className="text-2xl font-bold text-white"></p>
          <div className="">
              <div className="translate-y-24">
            <motion.p 
            variants={pAnimate}
            className="text-base text-white  font-montBold">
              {t.grid.desc4}
             
            </motion.p>
          </div>
        </div>
      </div>
      </div>
      </motion.div>
      <motion.div 
      initial={"offscreen"}
      whileInView={"onscreen"}
      variants={boxVariant}
      viewport={{once:true,amount:1}}
      className=" h-auto square hover:scale-105 ">
        
      <div className="group relative flex h-full">
      <Image
      src="/images/comida.webp"
      alt="surfbowl"
      layout="fill"
      objectFit="cover"
    
      className="absolute inset-0 h-full w-full object-cover
       opacity-60 transition-opacity group-hover:opacity-50"
    />
     
      <div className="relative p-4 ">
 
          <motion.p 
          variants={textAnimate}
          className="text-3xl font-medium uppercase tracking-widest font-montBold text-white underline decoration-[#e33d20]">
        {t.grid.title5}
        </motion.p>
      
        <p className="text-2xl font-bold text-white"></p>
          <div className="">
              <div className="translate-y-24">
            <motion.p 
            variants={pAnimate}
            className="text-base text-white  font-montBold">
             {t.grid.desc5}
             
            </motion.p>
          </div>
        </div>
      </div>
      </div>
      </motion.div>
      <motion.div 
      initial={"offscreen"}
      whileInView={"onscreen"}
      variants={boxVariant}
      viewport={{once:true,amount:1}}
      className=" h-auto square hover:scale-105 ">
        
      <div className="group relative flex h-full">
      <Image
      src="/images/eventos.webp"
      alt="surfbowl"
      layout="fill"
      objectFit="cover"
    
      className="absolute inset-0 h-full w-full object-cover
       opacity-70 transition-opacity group-hover:opacity-50"
    />
     
      <div className="relative p-4 ">
 
          <motion.p 
          variants={textAnimate}
          className="text-3xl font-medium uppercase tracking-widest font-montBold text-white underline decoration-[#e33d20] ">
          {t.grid.title6}
        </motion.p>
      
        <p className="text-2xl font-bold text-white"></p>
          <div className="">
              <div className="translate-y-32">
            <motion.p 
            variants={pAnimate}
            className="text-base text-white  font-montBold">
             {t.grid.desc6}
             
            </motion.p>
          </div>
        </div>
      </div>
      </div>
      </motion.div>
      <motion.div 
      initial={"offscreen"}
      whileInView={"onscreen"}
      variants={boxVariant}
      viewport={{once:true,amount:1}}
      className=" h-auto square hover:scale-105 ">
        
      <div className="group relative flex h-full">
      <Image
      src="/images/nutri.webp"
      alt="surfbowl"
      layout="fill"
      objectFit="cover"
    
      className="absolute inset-0 h-full w-full object-cover
        opacity-70 transition-opacity group-hover:opacity-50"
    />
     
      <div className="relative p-4 ">
 
          <motion.p 
          variants={textAnimate}
          className="text-3xl font-medium uppercase tracking-widest font-montBold text-white underline decoration-[#e33d20] ">
          {t.grid.title7}
        </motion.p>
      
        <p className="text-2xl font-bold text-white"></p>
          <div className="">
              <div className="translate-y-32">
            <motion.p 
            variants={pAnimate}
            className="text-base text-white  font-montBold">
              {t.grid.desc7}
            </motion.p>
          </div>
        </div>
      </div>
      </div>
      </motion.div>
      <motion.div 
      initial={"offscreen"}
      whileInView={"onscreen"}
      variants={boxVariant}
      viewport={{once:true,amount:1}}
      className=" h-auto square hover:scale-105 ">
        
      <div className="group relative flex h-full">
      <Image
      src="/images/logoReal.webp"
      alt="surfbowl"
      layout="fill"
      objectFit="cover"
    
      className="absolute inset-0 h-full w-full object-cover
        opacity-70 transition-opacity group-hover:opacity-50"
    />
     
      <div className="relative p-4 ">
 
          <motion.p 
          variants={textAnimate}
          className="text-3xl font-medium uppercase tracking-widest font-montBold text-white  underline decoration-[#e33d20]">
          {t.grid.title8}
        </motion.p>
      
        <p className="text-2xl font-bold text-white"></p>
          <div className="">
              <div className="translate-y-32">
            <motion.p 
            variants={pAnimate}
            className="text-base text-white font-montBold">
              {t.grid.desc8}
             
            </motion.p>
          </div>
        </div>
      </div>
      </div>
      </motion.div>
      <motion.p
       initial={"offscreen"}
       whileInView={"onscreen"}
       variants={boxVariant}
       viewport={{once:true,amount:1}}
        className="self-center md:text-lg md:col-span-2 md:text-center md:px-4 font-montSemiBold ">
       
       {t.grid.last}  </motion.p>
    </div>
    
  </div>
  
  </>
  )
}

export default GridLayout