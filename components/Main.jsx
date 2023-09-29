import React from "react";
import Image from "next/image";
import Ribbon from "../components/ui/Ribbon";


const Main = () => {
  return (
    <div className="w-screen h-screen background flex text-center bg-black ">

      
      <div class="container p-10    mx-auto flex flex-wrap flex-col md:flex-row items-center">

        <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 class="my-4 text-3xl md:text-5xl text-black opacity-75 font-antonioBold leading-tight text-center md:text-left">
            BIENVENIDO A TU SUPERACIÓN
          </h1>
          <p class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
            ¡Es Hora De Cambiar Tu Vida!
          </p>

          <form class="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label class="block text-xl text-orange-600 py-2 font-bold mb-2" for="emailaddress">
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
                class="bg-gradient-to-r from-orange-600 to-white hover:from-white hover:to-orange-700 text-black font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                Registrate
              </button>
            </div>
          </form>
        </div>


        <div class="w-full xl:w-3/5 p-12 overflow-hidden">
          <img src="https://st.depositphotos.com/1168906/2732/v/380/depositphotos_27329175-stock-illustration-dumbbell-vector-illustration.jpg" class="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6 mix-blend-multiply" />
        </div>
      </div>
    </div>
 
  );
};

export default Main;
