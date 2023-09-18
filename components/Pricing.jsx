import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useRouter } from "next/router";
import en from "../public/locales/en/english.json";
import es from "../public/locales/es/espanol.json";

import { useEffect, useState } from "react";
import React from "react";

// import {google} from 'googleapis';

// import Benefits from "./Benefits";

// export async function getServerSideProps({}){
//   const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']});

//   const sheets = google.sheets({version: 'v4', auth });

//   const {id} = query;
//   const range = `Sheet1!A1:B3`;

//   const response = await sheets.spreadsheets.values.get({spreadSheetId:process.env.SHEET_ID,range,});

//   const [plan,precio] = response.data.values;
//    console(plan);
//    console(precio);
//   return {
//     props:{
//       plan,
//       precio
//     }
//   }
// }

const Pricing = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;
  const control = useAnimation();
  const [ref, inView] = useInView();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/spreadsheet");
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);

  const reservaVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", duration: 1, bounce: 0.3 },
    },
    hidden: { opacity: 0, scale: 0 },
  };
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div className="container my-6 px-6 mx-auto p-4 ">
      {/* Section: Design Block */}
      <AnimatePresence mode="wait">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={control}
          variants={reservaVariant}
          viewport={{ once: true, amount: 0.1 }}
        >
          <section className="mb-16 text-gray-800 font-montBold">
            <h2 className="text-3xl lg:text-6xl md:text-5xl  text-center text-black mb-6">
              {t.pricing.title}
            </h2>
            <p className="text-center mb-12 text-black">{t.pricing.main}</p>
            <div className="grid lg:grid-cols-2 gap-6 xl:gap-x-12">
              <div className="mb-6 lg:mb-0">
                <div className="block rounded-lg bg-white h-full ">
                  <div className="p-6 border-b border-gray-300 text-center">
                    <p className="uppercase text-sm md:text-base font-montBold">
                      <strong>
                        PLAN SEMESTRAL{" "}
                        <span className=" text-[#e33d20]"> COMUNIDAD</span>
                      </strong>
                      
                    </p>
                    <small className="text-gray-500 text-sm">congela tu cuota</small>
                    <h3 className="text-2xl mb-6">
                      <strong>$22.100</strong>
                      {/* <small className="text-gray-500 text-sm">congela tu cuota</small> */}
                      <small className="text-gray-500 text-sm">/mensual</small>
                    </h3>

                    <a
                      href="https://api.whatsapp.com/send/?phone=5491154899448&text&type=phone_number&app_absent=0"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="inline-block px-6 py-2.5 bg-blue-600 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                        data-mdb-ripple="true"
                        data-ripple-color="light"
                      >
                        {t.pricing.button}
                      </button>
                    </a>
                  </div>
                  <div className="p-6">
                    <ol className="list-inside text-xs md:text-sm">
                      <li className="my-1 flex items-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          className="text-green-600 w-4 h-4 mr-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        <p className="">
                          CLASES <span className="text-[#e33d20]">FITNESS</span>{" "}
                          {">"}{" "}
                        </p>
                        <div className="relative mx-1 w-16 h-4 bg-[#e33d20] rounded-xl flex justify-center items-center text-center p-3 shadow-xl text-black">
                          <span className="absolute text-3xl left-0 top-0 text-black"></span>
                          LIBRE
                        </div>
                      </li>
                      <p className="ml-8 my-1 font-montSemiBold">
                        Funcional - HIIT - Fuerza - Metabólico - Surf Training
                      </p>
                      <li className="my-1 flex items-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          className="text-green-600 w-4 h-4 mr-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        <p className="">
                          SURF <span className="text-[#e33d20]">PARK</span>{" "}
                          {">"}{" "}
                        </p>
                        <div className="relative mx-1 w-18 h-4 bg-[#e33d20] rounded-xl flex justify-center items-center text-center p-3 shadow-xl text-black">
                          <span className="absolute text-3xl left-0 top-0 text-black"></span>
                          10 CRÉDITOS
                        </div>
                      </li>
                      <p className="ml-8 my-1 font-montSemiBold">
                        Acceso a la pista de surfskate para{" "}
                        <span className="text-[#e33d20]">
                          prácticas libres.
                        </span>
                      </p>
                      <li className="my-1 flex items-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          className="text-green-600 w-4 h-4 mr-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        <p className="">
                          SURF PARK
                          <span className="text-[#e33d20]"> CLASES</span> {">"}{" "}
                        </p>
                        <div className="relative mx-1 w-18 h-4 bg-[#e33d20] rounded-xl flex justify-center items-center text-center p-3 shadow-xl text-black">
                          <span className="absolute text-3xl left-0 top-0 text-black"></span>
                          2 CLASES 1H
                        </div>
                      </li>
                      <p className="ml-8 my-1 font-montSemiBold mx-22">
                        Clases grupales en la pista de surfskate con profesor{" "}
                        <span className="text-[#e33d20]">
                          (máximo 8 personas).
                        </span>
                      </p>

                      <li className="my-1 flex items-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          className="text-green-600 w-4 h-4 mr-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        <p className="">
                          SURF SKATE{" "}
                          <span className="text-[#e33d20]">LAGOS</span> {">"}{" "}
                        </p>
                        <div className="relative mx-1 w-18 h-4 bg-[#e33d20] rounded-xl flex justify-center items-center text-center p-3 shadow-xl text-black">
                          <span className="absolute text-3xl left-0 top-0 text-black"></span>
                          LIBRE
                        </div>
                      </li>
                      <p className="ml-8 my-1 font-montSemiBold">
                        Clases de surfskate en los Lagos de Palermo.{" "}
                        <span className="text-[#e33d20]">
                          Todos los niveles
                        </span>
                      </p>
                      <li className="my-1 flex items-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          className="text-green-600 w-4 h-4 mr-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        <p className="">
                          OPEN <span className="text-[#e33d20]">BOX</span> {">"}{" "}
                        </p>
                        <div className="relative mx-1 w-18 h-4 bg-[#e33d20] rounded-xl flex justify-center items-center text-center p-3 shadow-xl text-black">
                          <span className="absolute text-3xl left-0 top-0 text-black"></span>
                          LIBRE
                        </div>
                      </li>
                      <p className="ml-8 my-1 font-montSemiBold">
                        Usá nuestra instalación para entrenar en horarios fuera
                        de clase.
                      </p>
                      <p className="ml-8 my-1 text-xs font-montReg font-semibold  text-[#e33d20]">
                        MAR/JUE<span className=" text-black"> 10 a 11 / 14 a 17</span> LUN/VIE <span className=" text-black"> 10 a 12 / 14 a 17</span> MIE <span className=" text-black"> 10 a 12 / 14 a 18 </span> SAB <span className=" text-black">13 a 18</span>
                      </p>

                      <li className="my-1 flex items-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          className="text-green-600 w-4 h-4 mr-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        <p className="">
                          CONSULTORIO{" "}
                          <span className="text-[#e33d20]">TSH WELLNESS</span>{" "}
                        </p>
                      </li>
                      <p className="ml-8 my-1 text-[#e33d20] font-montReg font-semibold mx-6">
                      EVALUACIÓN PREVENTIVA  
                      </p>
                      <p className="ml-8 my-1 font-montSemiBold mx-6">
                        Únicamente válido para primera membresía semestral
                      </p>
                      {/* <li className="my-1 flex items-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          className="text-green-600 w-4 h-4 mr-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        <p className="">
                          CLASE <span className="text-[#e33d20]">GKP</span>{" "}
                          {">"}{" "}
                        </p>
                        <div className="relative mx-1 w-18 h-4 bg-[#e33d20] rounded-xl flex justify-center items-center text-center p-3 shadow-xl text-black">
                          <span className="absolute text-3xl left-0 top-0 text-black"></span>
                          LIBRE
                        </div>
                      </li> */}
                      <p className="ml-8 my-1 font-montSemiBold mx-6">
                        Servicio exclusivo para{" "}
                        <span className="text-[#e33d20]">
                          clientes semestrales
                        </span>
                      </p>
                      {/* <li className="my-1 flex items-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          className="text-green-600 w-4 h-4 mr-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        <p className="">
                          BENEFICIOS{" "}
                          <span className="text-[#e33d20]">ADICIONALES</span>
                        </p>
                      </li>
                      <p className="ml-8 my-1 font-montSemiBold mx-6">
                        Descuentos exclusivos en eventos, workshops realizados
                        en la Surf House, y prioridad en cupos para los
                        mismos.También invitación a fiestas y eventos privados.
                        POSIBILIDAD DE PAUSAR TU PLAN HASTA 1 MES.
                      </p> */}
                       <li className="my-1 flex items-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          className="text-green-600 w-4 h-4 mr-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        <p className="">
                          PAUSÁ <span className="text-[#e33d20]">TU PLAN</span> {">"}{" "}
                        </p>
                        <div className="relative mx-1 w-18 h-4 bg-[#e33d20] rounded-xl flex justify-center items-center text-center p-3 shadow-xl text-black">
                          <span className="absolute text-3xl left-0 top-0 text-black"></span>
                          1 MES
                        </div>
                      </li>
                      <p className="ml-8 my-1 font-montSemiBold">
                        Posibilidad de pausar tu plan <span className="text-[#e33d20]">por vacaciones</span>
                      </p>
                      
                    </ol>
                  </div>
                </div>
              </div>
              <div className="mb-6 lg:mb-0">
                <div className="block rounded-lg bg-white h-full ">
                  <div className="p-6 border-b border-gray-300 text-center">
                    <p className="uppercase text-sm md:text-base font-montBold">
                      <strong>
                        PLAN SEMESTRAL{" "}
                        <span className=" text-[#e33d20]"> TRAINING CLASSIC</span>
                      </strong>
                    </p>
                    <small className="text-gray-500 text-sm">congela tu cuota</small>
                    <h3 className="text-2xl mb-6">
                      <strong>${data[(0, 1)]}18.600</strong>
                      <small className="text-gray-500 text-sm">/mensual</small>
                    </h3>
                    <a
                      href="https://api.whatsapp.com/send/?phone=5491154899448&text&type=phone_number&app_absent=0"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="inline-block px-6 py-2.5 bg-blue-600 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                        data-mdb-ripple="true"
                        data-ripple-color="light"
                      >
                        {t.pricing.button}
                      </button>
                    </a>
                  </div>
                  <div className="p-6">
                    <ol className="list-inside text-xs md:text-sm">
                      <li className="my-1 flex items-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          className="text-green-600 w-4 h-4 mr-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        <p className="">
                          CLASES <span className="text-[#e33d20]">FITNESS</span>{" "}
                          {">"}{" "}
                        </p>
                        <div className="relative mx-1 w-18 h-4 bg-[#e33d20] rounded-xl flex justify-center items-center text-center p-3 shadow-xl text-black">
                          <span class="absolute text-3xl left-0 top-0 text-black"></span>
                          8 CLASES
                        </div>
                      </li>
                      <p className="ml-8 my-1 font-montSemiBold">
                        Funcional - HIIT - Fuerza - Metabólico - Surf Training
                      </p>
                      <li className="my-1 flex items-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          className="text-green-600 w-4 h-4 mr-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        <p className="">
                          SURF <span className="text-[#e33d20]">PARK</span>{" "}
                          {">"}{" "}
                        </p>
                        <div className="relative mx-1 w-18 h-4 bg-[#e33d20] rounded-xl flex justify-center items-center text-center p-3 shadow-xl text-black">
                          <span className="absolute text-3xl left-0 top-0 text-black"></span>
                          6 CRÉDITOS
                        </div>
                      </li>
                      <p className="ml-8 my-1 font-montSemiBold">
                        Acceso a la pista de surfskate para{" "}
                        <span className="text-[#e33d20]">
                          prácticas libres.
                        </span>
                      </p>
                      <li className="my-1 flex items-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          className="text-green-600 w-4 h-4 mr-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        <p className="">
                          SURF PARK{" "}
                          <span className="text-[#e33d20]">CLASES</span>
                          {">"}
                        </p>
                        <div className="relative mx-1 w-18 h-4 bg-[#e33d20] rounded-xl flex justify-center items-center text-center p-3 shadow-xl text-black">
                          <span className="absolute text-3xl left-0 top-0 text-black"></span>
                          1 CLASE 1H
                        </div>
                      </li>
                      <p className="ml-8 my-1 font-montSemiBold mx-22">
                        Clases grupales en la pista de surfskate con profesor{" "}
                        <span className="text-[#e33d20]">
                          (máximo 8 personas).
                        </span>
                      </p>

                      <li className="my-1 flex items-center">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="check"
                          className="text-green-600 w-4 h-4 mr-2"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        <p className="">
                          SURF SKATE{" "}
                          <span className="text-[#e33d20]">LAGOS</span> {">"}{" "}
                        </p>
                        <div className="relative mx-1 w-18 h-4 bg-[#e33d20] rounded-xl flex justify-center items-center text-center p-3 shadow-xl text-black">
                          <span className="absolute text-3xl left-0 top-0 text-black"></span>
                          8 CLASES
                        </div>
                      </li>
                      <p className="ml-8 my-1 font-montSemiBold">
                        Clases de surfskate en los Lagos de Palermo.{" "}
                        <span className="text-[#e33d20]">
                          Todos los niveles.
                        </span>
                      </p>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>
      {/* Section: Design Block */}
    </div>
  );
};

export default Pricing;
