import React from "react";
import Image from "next/image";
import Ribbon from "../components/ui/Ribbon";

const Main = () => {
  return (
    <div className="w-screen h-screen flex text-center bg-[#011C35]">
      <div className="flex-1 text-center w-full">
        <p className="text-white w-full text-3xl absolute mt-20 text-center ">
          <Image
            className="landscape:hidden"
            src="/images/logo-house-linea.png"
            width="590"
            height="500"
            alt=""
          />
        </p>
      </div>

      <video
        autoPlay
        muted
        loop
        className=" hidden md:inline-block md:object-cover w-full h-[100vh] md:object-bottom"
      >
        <source src="/video/VideoBG.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        muted
        loop
        className=" md:hidden object-cover w-full h-[100vh] md:object-bottom"
      >
        <source src="/video/mobilevideo2.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Main;
