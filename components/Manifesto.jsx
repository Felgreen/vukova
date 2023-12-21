// import { useRouter } from "next/router";
import React from "react";
// import en from "../public/locales/en/english.json";
// import es from "../public/locales/es/espanol.json";

const Manifesto = () => {
  // const router = useRouter();
  // const { locale } = router;
  // const t = locale === "es" ? es : en;


  return (
    <section className="h-60">
      <div className="pt-14 items-center lg:p-8 text-center  text-black   ">
        <div className="mx-auto max-w-4xl text-center  ">
          <h2 className="text-3xl font-bold sm:text-5xl text-gray-900  font-antonioBold m-2 ">
            EQUIPO VUKOVA
          </h2>
          <h2 className="text-3xl font-bold sm:text-5xl text-black  md:text-3xl"></h2>

          <div className=" text-black font-antonBold  font-bold sm:mt-2 sm:block">
          <p>Somos un centro de entrenamiento semi personalizado donde nos focalizamos en los objetivos de las personas para desarrollarlo en comunidad.Un Equipo interdisciplinario formado por ex deportistas profesionales en búsqueda de potenciar el entrenamiento de las personas. Con La unificación de criterios, capacitación constante y experiencia logramos generar un ámbito seguro con seguimiento detallado para que superes tus objetivos. Forma parte de la comunidad Vukova y superate.

          </p>
          
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-xl"></div>
      </div>
    </section>
  );
};

export default Manifesto;
