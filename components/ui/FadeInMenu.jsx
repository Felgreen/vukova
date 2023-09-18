import React from 'react'
import Image from 'next/image'

import {AnimatePresence, motion as m } from 'framer-motion'; 

import surfbowl from '../../assets/images/surfbowl.webp'; 
import bar from '../../assets/images/bar.webp'; 
import surfshop from '../../assets/images/surfshop.webp'; 
import box from '../../assets/images/box-entremamiento.webp'; 




const FadeInMenu = () => {

const variants= {
    hidden: {opacity:0,
    blur:'15px'},
    show:{
       
        opacity:1,
        transition:{
            delay:3,
            staggerChildren:1
        },
    },
};

const item = {
    hidden: {
        opacity:0,
        x:-100,
      
    },
    show:{
        opacity:1,
        x:0,
        
        transition: {
            duration: 2.5,
        },
    },
};
  return (
        <AnimatePresence>
        <m.div
         className='grid grid-col-1 auto-cols-fr md:grid-cols-4 md:grid-flow-col place-items-center content-center h-40 w-full mt-10  gap-4 mx-auto my-auto text-black' 
         variants={variants}
         initial='hidden'
         animate='show'>
            
        <m.div variants={item}>
            <a className="group grid h-56" href="/blog">
          
            <div className=" flex  items-end rounded-3xl  border-white bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#FFFFFF] ">
                <div className='border rounded-2xl bg-white'><Image 
                        src={surfbowl}
                        alt="surfbowl"
                        objectFit='cover'
                        className='rounded-2xl group-hover:disabled '
                    /></div>
                
                <div className="lg:group-hover:absolute lg:group-hover:opacity-0 ">
                
                <span className="text-3xl sm:text-4xl" role="img" aria-hidden="true"></span>
               
                </div>
                <div className="absolute opacity-0 lg:group-hover:relative lg:group-hover:opacity-100">
             
                <h3 className="text-2xl font-bold"></h3>
                <p className="mt-4 text-lg font-medium leading-relaxed">
                    
                </p>
             
                </div>
                
            </div>
            <p className="mt-4 text-xl font-bold sm:text-2xl"> SURFSKATE</p>
            </a>

      

        </m.div>
        <m.div  variants={item}>
                <a className="group grid h-56" href="/blog">
                
                <div className=" flex  items-end rounded-3xl  border-white bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#F8FAFC]">
                    <div className='border rounded-2xl bg-white'>
                        <Image 
                                src={bar}
                                alt="surfbowl"
                                objectFit='cover'
                                className='rounded-2xl bg-white group-hover:disabled'
                                
                            
                            />
                    </div>
                    <div className="lg:group-hover:absolute lg:group-hover:opacity-0 ">
                    
                    <span className="text-3xl sm:text-4xl" role="img" aria-hidden="true"></span>
                    
                    </div>
                    <div className="absolute opacity-0 lg:group-hover:relative lg:group-hover:opacity-100">
                    <h3 className="text-2xl font-bold"></h3>
                    <p className="mt-4 text-lg font-medium leading-relaxed">
                        
                    </p>
                    </div>
                    
                </div>
                <p className="mt-4 text-xl font-bold sm:text-2xl">KANDUI</p>
                </a>

     

        </m.div>
        <m.div variants={item}>
            <a className="group grid h-56" href="/blog">
            
            <div className=" flex  items-end rounded-3xl  border-white bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#F8FAFC]">
            <div className='border rounded-2xl bg-white'> <Image 
                        src={box}
                        alt="surfbowl"
                        objectFit='cover'
                        className='rounded-2xl group-hover:disabled'
                        
                    />
                </div>
                <div className="lg:group-hover:absolute lg:group-hover:opacity-0 ">
                
                    <span className="text-3xl sm:text-4xl" role="img" aria-hidden="true"></span>
                </div>
                <div className="absolute opacity-0 lg:group-hover:relative lg:group-hover:opacity-100">
                    <h3 className="text-2xl font-bold"></h3>
                    <p className="mt-4 text-lg font-medium leading-relaxed">
                    
                    </p>
                </div>
                
            </div>
                <p className="mt-4 text-xl font-bold sm:text-2xl"> BOX ENTRENAMIENTO</p>
            </a>
        </m.div>
        {/* <m.div variants={item}>
        <a className="group grid h-56" href="/blog">
          
          <div className="relative flex h-full items-end rounded-3xl border-8 border-[#011C35] bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#000]">
          <Image 
                  src={surfbowl}
                  alt="surfbowl"
                  objectFit='cover'
                  className='rounded-2xl group-hover:disabled'
                  
              
              />
              <div className="lg:group-hover:absolute lg:group-hover:opacity-0 ">
             
              <span className="text-3xl sm:text-4xl" role="img" aria-hidden="true"></span>
             
              </div>
              <div className="absolute opacity-0 lg:group-hover:relative lg:group-hover:opacity-100">
              <h3 className="text-2xl font-bold"></h3>
              <p className="mt-4 text-lg font-medium leading-relaxed">
                  
              </p>
              </div>
              
          </div>
          <p className="mt-4 text-xl font-bold sm:text-2xl"> SURFSKATE</p>
          </a>
        </m.div> */}
        <m.div variants={item}>
                <a className="group grid h-56" href="/blog">
                
                <div className=" flex items-end rounded-3xl  border-white bg-white transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#F8FAFC]">
                    <div className='border rounded-2xl bg-white'>
                    <Image 
                            src={surfshop}
                            alt="surfbowl"
                            objectFit='cover'
                            className='rounded-2xl group-hover:disabled'
                            
                        
                        />
                        </div>
                    <div className="lg:group-hover:absolute lg:group-hover:opacity-0 ">
                    
                    <span className="text-3xl sm:text-4xl" role="img" aria-hidden="true"></span>
                    
                    </div>
                    <div className="absolute opacity-0 lg:group-hover:relative lg:group-hover:opacity-100">
                    <h3 className="text-2xl font-bold"></h3>
                    <p className="mt-4 text-lg font-medium leading-relaxed">
                        
                    </p>
                    </div>
                    
                </div>
                <p className="mt-4 text-xl font-bold sm:text-2xl">SHOP</p>
                </a>

        </m.div>
        
    </m.div>
    </AnimatePresence>
    
  )
}

export default FadeInMenu