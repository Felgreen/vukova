import { useEffect } from "react";
import { useRouter } from "next/router";
import Activities from "../components/Activities";
import Main from "../components/Main";
import GridLayout from "./ui/GridLayout";
import GridLayoutMobile from "./ui/GridLayoutMobile";
import Image from "next/image";
import CardSection from "./CardSection";
import AnimatedBackground from "./ui/AnimatedBackground";
import Footer from "./Footer";
import TickerComponent from "./ui/TickerComponent"
import en from "../public/locales/en/english.json";
import es from "../public/locales/es/espanol.json";

const Layout = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;
  return (
    <>
      <div className="overflow-hidden" id="Layout">
        <Main />
        <GridLayoutMobile t={t} />
        <AnimatedBackground t={t} />
        <TickerComponent/>

        <GridLayout t={t} />
        <CardSection t={t} />
        <Activities t={t} />

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
        <Footer />
      </div>
    </>
  );
};

export default Layout;
