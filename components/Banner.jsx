import React from "react";
import yoga from "../assets/images/yoga.png";
import Image from "next/image";
import Ribbon from "../components/ui/Ribbon";
import GridLayout from "./ui/GridLayout";

const Banner = () => {
  return (
    <>
      <div className="h-auto w-screen rounded bg-[#011C35]">
        <Ribbon />
        <div className="mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8  text-white"></div>

        {/* <Image 
          src={yoga}
          alt="yoga"
          className="inset-0 h-full w-full  object-cover rounded scale-95 object-top   "
      />  */}
      </div>
    </>
  );
};

export default Banner;
