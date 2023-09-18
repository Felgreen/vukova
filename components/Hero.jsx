import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex items-start justify-center h-screen bg-fixed bg-center bg-cover ">
      <Image
        src="/images/surfbowl.png"
        alt="surfbowl"
        layout="fill"
        objectFit="cover"
        objectPosition="left top"
      />

      {/* <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]  '/> */}
      <div className="p-5  text-black z-[2] mt-10  flex flex-col divide-y-2 divide-white  ">
        <div className=""> </div>
        <h2 className="w-full text-4xl md:text-7xl lg:text-9xl font-bold">
          THE SURF HOUSE
        </h2>
      </div>
    </div>
  );
};

export default Hero;
