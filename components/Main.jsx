import React from "react";
import Image from "next/image";
import Ribbon from "../components/ui/Ribbon";
import { Superacion, Vukova } from "../components/svg";

const Main = ({ t }) => {
  return (
    <div
      id="main"
      className="flex justify-center w-screen h-screen   text-center bg-white"
    >
      <div className="container">
        <div className="columns-2 md:my-20 mt-32 h-1/2 md:w-full md:h-full flex flex-col md:flex-row justify-center items-center">
          <div className="flex items-center justify-center md:h-3/4 md:w-full h-full">
            <Superacion className="h-full w-full" />
          </div>
          <div className="h-1/2 md:h-full md:w-full flex flex-col items-center justify-center">
            <Vukova className="w-1/2 h-36 md:w-full md:h-2/4" />
            {/* <span className="md:text-xl">TRAINING CLUB</span> */}
            <div className="columns-2 mt-2 text-sm w-full flex justify-center items-center">
              <div className="mx-auto flex">
               <p className=" font-antonRegular text-lg">
                {t.about.cta}
                </p>
              </div>
              {/* <div className="mx-5">
                <span className="text-stone-500">
                  {t.about.desc}
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/*<div class="container p-10 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 class="my-4 text-3xl md:text-5xl text-black opacity-75 font-antonioBold leading-tight text-center md:text-left">
            BIENVENIDO A TU SUPERACIÓN
          </h1>
          <p class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
            ¡Es Hora De Cambiar Tu Vida!
          </p>

          <form class="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label
                class="block text-xl text-orange-600 py-2 font-bold mb-2"
                for="emailaddress"
              >
                RESERVA TU TURNO
              </label>
              <input
                class="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                id="emailaddress"
                type="text"
                placeholder="nombre@mail.com"
              />
            </div>

            <div class="flex items-center justify-between pt-4">
              <button
                class="bg-gradient-to-r from-orange-600 to-white hover:from-orange-600 hover:to-pink-700 text-black font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                Registrate
              </button>
            </div>
          </form>
        </div>

        <div class="w-full xl:w-3/5 p-12 overflow-hidden">
          <img
            src="https://st.depositphotos.com/1168906/2732/v/380/depositphotos_27329175-stock-illustration-dumbbell-vector-illustration.jpg"
            class="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6 mix-blend-multiply"
          />
        </div>
  </div> */}
    </div>
  );
};

export default Main;
