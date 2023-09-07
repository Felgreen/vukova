import { useState, useEffect,useRef } from "react";
import Head from 'next/head'
import Options from '../../components/Options';
import { useRouter } from "next/router";
import en from "../../public/locales/en/english.json"
import es from "../../public/locales/es/espanol.json"
import { Evaluation } from "../../components/svg";
import { Yoga,Kinio,Nutrition,Ostio } from "../../components/svg";


export default function Wellness() {
  const [option, setOption] = useState("HIIT");
  
  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;

  const [current, setCurrent] = useState(0);
  const popupRef = useRef(null);
 

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
  const handleHorarios = () => {
    const div = document.getElementById("horarios");
    if (div.classList.contains("hidden")) {
      div.classList.remove("hidden");
    } else {
      div.classList.add("hidden");
    }
  }
  return (
    <>
      <Head>
        <title>{t.seo.wellnessTitle}</title>
        <meta name="description" content={t.seo.wellnessDesc}/>
        <meta property="og:title" content={t.seo.wellnessTitle}/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className="w-screen sm:h-screen md:h-[120vh] ">
        <section className="text-white flex items-center justify-center bg-[#011C35] lg:h-auto">
          <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 sm:mt-24 md:mt-10">
            <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16 mt-6 font-montBold">
              <Options option={option} />
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
                <a
                  className="cursor-pointer block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring hover:scale-105 hover:shadow-lg hover:shadow-blue-900"
                  onClick={() => setOption("EDP")}
                >
                  
                  <span className="inline-block rounded-lg bg-gray-50 p-1">
                    <Evaluation className="text-5xl"/>
                    {/* <svg
                      className="h-8 w-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 50 50"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M18 7H14C11.7909 7 10 8.79086 10 11V39C10 41.2091 11.7909 43 14 43H34C36.2091 43 38 41.2091 38 39V11C38 8.79086 36.2091 7 34 7H30V9H34C35.1046 9 36 9.89543 36 11V39C36 40.1046 35.1046 41 34 41H14C12.8954 41 12 40.1046 12 39V11C12 9.89543 12.8954 9 14 9H18V7Z" fill="#333333"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M17 7C17 5.34315 18.3431 4 20 4H28C29.6569 4 31 5.34315 31 7V9C31 10.6569 29.6569 12 28 12H20C18.3431 12 17 10.6569 17 9V7ZM20 6C19.4477 6 19 6.44772 19 7V9C19 9.55228 19.4477 10 20 10H28C28.5523 10 29 9.55228 29 9V7C29 6.44772 28.5523 6 28 6H20Z" fill="#333333"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15 21C15 20.4477 15.4477 20 16 20H23C23.5523 20 24 20.4477 24 21C24 21.5523 23.5523 22 23 22H16C15.4477 22 15 21.5523 15 21Z" fill="#333333"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15 16C15 15.4477 15.4477 15 16 15H31.5C32.0523 15 32.5 15.4477 32.5 16C32.5 16.5523 32.0523 17 31.5 17H16C15.4477 17 15 16.5523 15 16Z" fill="#333333"/>
                      <path d="M27.696 22C26.777 22 26.0251 22.7385 26.0251 23.641C26.0251 24.5436 26.777 25.2821 27.696 25.2821C28.6151 25.2821 29.367 24.5436 29.367 23.641C29.367 22.7385 28.6151 22 27.696 22Z" fill="#333333"/>
                      <path d="M25.5898 27.6565H20.8355C20.376 27.6565 20 27.2873 20 26.836C20 26.3847 20.376 26.0155 20.8355 26.0155H34.1645C34.624 26.0155 35 26.3847 35 26.836C35 27.2873 34.624 27.6565 34.1645 27.6565H29.4102L32.2948 37.5027C32.2948 37.954 31.9189 38.3232 31.4593 38.3232C30.1654 38.3232 29.294 34.3505 28.8931 33.4001H26.1069C25.706 34.3505 24.8346 38.3232 23.5407 38.3232C23.0812 38.3232 22.7052 37.954 22.7052 37.5027L25.5898 27.6565Z" fill="#333333"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M17 32V34H19V32H17ZM16 30C15.4477 30 15 30.4477 15 31V35C15 35.5523 15.4477 36 16 36H20C20.5523 36 21 35.5523 21 35V31C21 30.4477 20.5523 30 20 30H16Z" fill="#333333"/>
                    </svg> */}
                  </span>

                  <h2 className="mt-2 font-bold">{t.wellness.Prev1}</h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-300">
                  
                  </p>
                </a>

                <a
                  className="cursor-pointer block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring hover:scale-105 hover:shadow-lg hover:shadow-blue-900"
                  onClick={() => setOption("GKP")}
                >
                  <span className="inline-block rounded-lg bg-gray-50 p-1">
                    <Yoga className="text-5xl"/>
                    {/* <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg> */}
                  </span>

                  <h2 className="mt-2 font-bold">{t.wellness.GKP1}</h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                   
                  </p>
                </a>

                <a
                  className="cursor-pointer block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring hover:scale-105 hover:shadow-lg hover:shadow-blue-900"
                  onClick={() => setOption("Kinio")}
                >
                  <span className="inline-block rounded-lg bg-gray-50 p-1">
                    <Kinio className="text-5xl"/>
                    {/* <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg> */}
                  </span>

                  <h2 className="mt-2 font-bold">{t.wellness.KINESIOLOGIA1}</h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    
                  </p>
                </a>

                <a
                  className="cursor-pointer block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring hover:scale-105 hover:shadow-lg hover:shadow-blue-900"
                  onClick={() => setOption("Nutri")}
                >
                  <span className="inline-block rounded-lg bg-gray-50 p-1 ">
                  <Nutrition className="text-5xl"/>
                    {/* <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg> */}
                  </span>

                  <h2 className="mt-2 font-bold">{t.wellness.NUTRICION1}</h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                   
                  </p>
                </a>

                <a
                  className="cursor-pointer block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring hover:scale-105 hover:shadow-lg hover:shadow-blue-900"
                  onClick={() => setOption("Osteo")}
                >
                 
                  <span className="inline-block rounded-lg bg-gray-50 p-1">
                  <Ostio className="text-5xl"/>
                    {/* <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg> */}
                  </span>

                  <h2 className="mt-2 font-bold">{t.wellness.OSTEOPATIA1}</h2>

                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                   
                  </p>
                </a>
                <div className="flex flex-col items-center m-auto w-full">
                  <button
                    class="group relative inline-block text-sm font-medium text-[#1b3655] focus:outline-none focus:ring active:text-[#1b3655] rounded-lg"
                    onClick={handleHorarios}
                  >
            <span class="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-[#244870] transition-transform group-hover:translate-y-0 group-hover:translate-x-0 rounded-md"></span>

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
                  src="/images/Horariosentrenamientos.webp"
                  className="inset-0 rounded-md object-cover w-full"
                />
              </div>
            </div>
          </section>
        </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
