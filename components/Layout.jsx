import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Main from "../components/Main";
import Reserva from "../components/Reserva";
import Pricing from "../components/Pricing";
import Map from "../components/Map";
import Faq from "../components/ui/Faq";
import GridLayout from "./ui/GridLayout";
import GridLayoutMobile from "./ui/GridLayoutMobile";
import Benefits from "./Benefits";
import Image from "next/image";
import Cards from './ui/Cards'
import CardSection from "./CardSection";
import AnimatedBackground from "./ui/AnimatedBackground";


const Layout = () => (
  <>
    <div className="overflow-hidden ">
      <Main />
  
      <GridLayoutMobile />

    
      <GridLayout />
      <Pricing />
      <Benefits />

      <a
        href="https://api.whatsapp.com/send/?phone=5491154899448&text&type=phone_number&app_absent=0"
        target="_blank"
      >
        <button
          title="Contact whatsapp now"
          class="fixed z-90 bottom-10 right-8  bg-green-600 w-10 md:w-20 md:h-20 rounded-full drop-shadow-lg flex justify-center items-center text-black text-4xl hover:drop-shadow-2xl animate-pulse md:animate-none hover:animate-bounce duration-300"
        >
          <Image
            src="/images/icon-whatsapp.svg"
            width={42}
            height={42}
            className=""
          />
        </button>
      </a>
    </div>
  </>
);

export default Layout;
