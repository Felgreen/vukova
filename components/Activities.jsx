import { useState, useEffect, useRef } from "react";
import Options from "./ui/Options";
import { Evaluation } from "./svg/index";
import { Yoga, Kinio, Nutrition, Ostio } from "./svg/index";

export default function Activities({ t }) {
  const [option, setOption] = useState("HIIT");
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
  };

  return (
    <div className="w-screen sm:h-screen md:h-[120vh]" id="activities">
      <section className="text-black flex items-center justify-center  lg:h-auto">
        <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 sm:mt-24 md:mt-10">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16 mt-6 font-montBold">
            <Options option={option} t={t} />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
              <a
                className="cursor-pointer block border-black rounded-xl border p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring hover:scale-105 hover:shadow-lg hover:shadow-[#f37032] group transition-all duration-400 ease-in-out"
                onClick={() => setOption("EDP")}
              >
                <span className="inline-block rounded-lg bg-gray-50 p-1">
                  <Evaluation className="text-5xl" />
                </span>

                <h2 className="mt-2 font-bold">{t.wellness.Prev1}</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-300"></p>
              </a>

              <a
                className="cursor-pointer block border-black rounded-xl border p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring hover:scale-105 hover:shadow-lg hover:shadow-[#f37032] group transition-all duration-400 ease-in-out"
                onClick={() => setOption("GKP")}
              >
                <span className="inline-block rounded-lg bg-gray-50 p-1">
                  <Yoga className="text-5xl" />
                </span>

                <h2 className="mt-2 font-bold">{t.wellness.GKP1}</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600"></p>
              </a>

              <a
                className="cursor-pointer block border-black rounded-xl border p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring hover:scale-105 hover:shadow-lg hover:shadow-[#f37032] group transition-all duration-400 ease-in-out"
                onClick={() => setOption("Kinio")}
              >
                <span className="inline-block rounded-lg bg-gray-50 p-1">
                  <Kinio className="text-5xl" />
                </span>

                <h2 className="mt-2 font-bold">{t.wellness.KINESIOLOGIA1}</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600"></p>
              </a>

              <a
                className="cursor-pointer block border-black rounded-xl border p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring hover:scale-105 hover:shadow-lg hover:shadow-[#f37032] group transition-all duration-400 ease-in-out"
                onClick={() => setOption("Nutri")}
              >
                <span className="inline-block rounded-lg bg-gray-50 p-1 ">
                  <Nutrition className="text-5xl" />
                </span>

                <h2 className="mt-2 font-bold">{t.wellness.NUTRICION1}</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600"></p>
              </a>

              <a
                className="cursor-pointer block border-black rounded-xl border p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring hover:scale-105 hover:shadow-lg hover:shadow-[#f37032] group transition-all duration-400 ease-in-out"
                onClick={() => setOption("Osteo")}
              >
                <span className="inline-block rounded-lg bg-gray-50 p-1">
                  <Ostio className="text-5xl" />
                </span>

                <h2 className="mt-2 font-bold">{t.wellness.OSTEOPATIA1}</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600"></p>
              </a>
              <div className="flex flex-col items-center m-auto w-full">
                <button
                  class="bg-[#f37032] p-2 mt-2 w-36 justify-center h-12 items-center rounded-xl text-black flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#ee2967] duration-300"
                  onClick={handleHorarios}
                >

                  <span>
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
  );
}
