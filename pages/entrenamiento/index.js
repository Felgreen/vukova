import Image from "next/image";
import Head from "next/head"
import { useRouter } from "next/router";
import en from "../../public/locales/en/english.json";
import es from "../../public/locales/es/espanol.json";
import Services from "../../components/Services";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { useEffect, useRef, useState } from "react";

export default function Entrenamiento() {
  const [current, setCurrent] = useState(0);
  const popupRef = useRef(null);

  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        const div = document.getElementById("horarios");
        div.classList.add("hidden");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef]);

  const fotos = [
    "HIIT",
    "Metabolico",
    "Surf Training",
    "Desarrollo de fuerza",
    "Entrenamiento Funcional",
  ];

  const handleHorarios = () => {
    const div = document.getElementById("horarios");
    if (div.classList.contains("hidden")) {
      div.classList.remove("hidden");
    } else {
      div.classList.add("hidden");
    }
  };

  return (
    <>   
    <Head>
    <title>{t.seo.trainingTitle}</title>
    <meta name="description" content={t.seo.trainingdesc}/>
    <meta property="og:title" content={t.seo.trainingogTitle}/>
    <link rel="icon" href="/favicon.ico"/>
    </Head>
      <div className="h-auto w-screen bg-[#011C35]">
     
        <section id="slider" className=" text-white">
          <div className="mx-auto w-full text-center py-10 md:py-20">
            <p className="mt-4 text-gray-300 text-9xl"></p>
          </div>
          <div className="rounded-md block drop-shadow-lg md:hidden  ">
            <Splide
              options={{
                rewind: true,
                gap: "1rem",
                type: "loop",
                padding: "5rem",
                height: "20rem",
                cloneStatus: true,
              }}
              onMoved={(splide, index) => {
                setCurrent(index);
              }}
              aria-label="Entrenamiento"
            >
              <SplideSlide>
                <Image
                  src="/images/hit.webp"
                  alt="HIIT training"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="bottom"
                  className="relative opacity-80 rounded-xl "
                />
                <div className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                  <h1 className="text-xl lg:text-8xl text-white font-bold">
                    HIIT
                  </h1>
                  <p className="mt-2 text-sm text-gray-300"></p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Image
                  src="/images/meta.webp"
                  alt="Metabolic Training"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="relative opacity-80 rounded-xl"
                />
                <div className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                  <h1 className="text-xl lg:text-8xl text-white font-bold">
                    {t.entrenamiento.metatitle}
                  </h1>
                  <p className="mt-2 text-sm text-gray-300"></p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Image
                  src="/images/surftrainin.webp"
                  alt="Surf Training"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="relative opacity-80 rounded-xl"
                />
                <div className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                  <h1 className="text-xl lg:text-8xl text-white font-bold text-center">
                    SURF TRAINING
                  </h1>
                  <p className="mt-2 text-xs lg:text-base text-center font-semibold text-gray-300"></p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Image
                  src="/images/gymBancos.webp"
                  alt="surfbowl"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="relative opacity-80 rounded-xl"
                />
                <div className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                  <h1 className="text-xl lg:text-8xl text-white font-bold text-center">
                    {t.entrenamiento.strengthtitle}
                  </h1>
                  <p className="mt-2 text-xs lg:text-base text-center font-semibold text-gray-300"></p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Image
                  src="/images/functional.webp"
                  alt="surfbowl"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="relative opacity-80 rounded-xl"
                />
                <div className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                  <h1 className="text-xl lg:text-8xl text-white font-bold text-center">
                    {t.entrenamiento.functionaltitle}
                  </h1>
                  <p className="mt-2 text-xs lg:text-base text-center font-semibold text-gray-300"></p>
                </div>
              </SplideSlide>
            </Splide>
          </div>
          <div className="rounded-md drop-shadow-lg hidden md:block  ">
            <Splide
              options={{
                rewind: true,
                gap: "1rem",
                type: "loop",
                padding: "5rem",
                height: "26rem",
                cloneStatus: true,
              }}
              onMoved={(splide, index) => {
                setCurrent(index);
              }}
              aria-label="Entrenamiento"
            >
              <SplideSlide>
                <Image
                  src="/images/hit.webp"
                  alt="surfbowl"
                  layout="fill"
                  objectFit="cover"
              
                  className="relative opacity-80 rounded-xl "
                />
                <div className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                  <h1 className="text-xl lg:text-8xl text-white font-bold">
                    HIIT
                  </h1>
                  <p className="mt-2 text-sm text-gray-300"></p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Image
                  src="/images/meta.webp"
                  alt="Metabolic training"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  className="relative opacity-80 rounded-xl"
                />
                <div className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                  <h1 className="text-xl lg:text-8xl text-white font-bold">
                    {t.entrenamiento.metatitle}
                  </h1>
                  <p className="mt-2 text-sm text-gray-300"></p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Image
                  src="/images/surftrainin.webp"
                  alt="Surf Training"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="relative opacity-80 rounded-xl"
                />
                <div className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                  <h1 className="text-xl lg:text-8xl text-white font-bold text-center">
                    SURF TRAINING
                  </h1>
                  <p className="mt-2 text-xs lg:text-base text-center font-semibold text-gray-300"></p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Image
                  src="/images/gymBancos.webp"
                  alt="Gym"
                  layout="fill" // required
                  objectFit="cover" // change to suit your needs
                
                  className="relative opacity-80 rounded-xl object-center"
                />
                <div className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                  <h1 className="text-xl lg:text-8xl text-white font-bold text-center">
                    {t.entrenamiento.strengthtitle}
                  </h1>
                  <p className="mt-2 text-xs lg:text-base text-center font-semibold text-gray-300"></p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <Image
                  src="/images/functional.webp"
                  alt="surfbowl"
                  layout="fill" // required
                  objectFit="cover" // change to suit your needs
                  
                  className="relative opacity-80 rounded-xl object-top"
                />
                <div className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                  <h1 className="text-xl lg:text-8xl text-white font-bold text-center">
                    {t.entrenamiento.functionaltitle}
                  </h1>
                  <p className="mt-2 text-xs lg:text-base text-center font-semibold text-gray-300"></p>
                </div>
              </SplideSlide>
            </Splide>
          </div>
          <div className="my-2 bg-inherit">
            <Services option={fotos[current]} />
          </div>
        </section>
        <div className="flex flex-col items-center w-full h-20">
          <button
            class="group relative inline-block text-sm font-medium text-[#1b3655] focus:outline-none focus:ring active:text-[#1b3655] rounded-lg"
            onClick={handleHorarios}
          >
            <span class="absolute inset-0 translate-x-1 translate-y-1 bg-[#244870] transition-transform group-hover:translate-y-0 group-hover:translate-x-0 rounded-md"></span>

            <span class="relative block border border-current bg-white px-8 py-3 rounded-md font-montBold">
              {t.button.horarios}
            </span>
          </button>
          <section
            id="horarios"
            ref={popupRef}
            className="absolute hidden flex flex-col popup overflow-hidden rounded-lg top-20 shadow-2xl lg:pb-0 bg-white  z-20 sm:full md:w-2/3"
          >
            <div className="ml-auto p-2 pt-0 text-center sm:px-8 sm:pt-2 sm:pb-8 w-full">
              <div className="flex row items-center font-semibold justify-center w-full">
                <div className="flex sm:w-1/3 justify-end ml-auto">
                  <span
                    className="pb-2 cursor-pointer"
                    onClick={handleHorarios}
                  >
                    X
                  </span>
                </div>
              </div>
              <div className="items-center justify-center flex">
                <img
                  alt="Trainer"
                  src="/images/horariosBOX.webp"
                  className="inset-0 rounded-md object-cover w-full"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
