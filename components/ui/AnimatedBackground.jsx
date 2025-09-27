import Image from "next/image";


import Marquee from "./Marquee";

const AnimatedBackground = () => {

  return (
    <div
      section
      id="animatedbackground"
      className=" relative h-screen w-screen bg-center bg-cover object-cover "
    >
      <div className="absolute inset-0">
        <Image
          src="/images/snatch.jpg"
          alt="Background image"
          style={{ objectFit: "cover" }}
          fill
        />

        <div className=" text-white font-antonioBold text-9xl ">
          <Marquee />
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
