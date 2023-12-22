import Image from "next/image";

import { motion } from "framer-motion";


export default function Options({ t, option}) {

const servicios = [
    {
        h3: "Servicios disponibles"
    },
    {
        code: "WL",
        name: "Weightlifting",
        detalle: "El weightlifting es un deporte en el que los atletas compiten para levantar la mayor cantidad de peso posible en dos movimientos: el arranque (snatch) y el envión (clean and jerk). Estos movimientos requieren fuerza, velocidad y técnica, y el weightlifting es parte de los Juegos Olímpicos."
    },
    {
        code: "YOGA",
        name: "Yoga",
        detalle: "El yoga es una práctica holística originaria de la India que combina posturas físicas, técnicas de respiración y meditación. Busca el equilibrio entre mente y cuerpo, mejorando la flexibilidad, fortaleza y bienestar general."
    },
    {
        code: "NATACION",
        name: "Natación",
        detalle: "La natación es un deporte acuático que implica nadar en piscinas, lagos u océanos. Mejora la salud cardiovascular, fortalece los músculos y es una habilidad vital."
    },
    {
        code: "BABY",
        name: "Bebes al agua"
    },
    {
        code: "PILETA",
        name: "Pileta Libre"
    },
    {
        code: "PERSONAL",
        name: "Personal",
        detalle: "El entrenamiento personal implica trabajar con un profesional del fitness para desarrollar un programa de ejercicios personalizado. Se adapta a las metas individuales, brinda orientación sobre ejercicios y motiva para alcanzar un mejor estado físico."
    },
    {
        code: "WOD",
        name: "WOD",
        detalle: "WOD significa 'Workout of the Day' (Entrenamiento del Día). Es un término común en el entrenamiento funcional y el CrossFit. Un WOD es una rutina de ejercicios intensa y variada diseñada para mejorar la resistencia, la fuerza y la condición física en general."
    },
    {
        code: "AQUAGYM",
        name: "Aqua-Gym"
    }
];
  const boxVariant = {
    offscreen: { opacity: 0, scale: 0 },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", duration: 1, bounce: 0.3 },
    },
  };
   
  console.log(option);

  return (
    <motion.div
      className="mx-auto p-4 max-w-lg text-center lg:mx-0 lg:text-left h-[50%]"
      initial={"offscreen"}
      whileInView={"onscreen"}
      variants={boxVariant}
      viewport={{ once: true, amount: 1 }}
    >
      <Image
        className="rounded-lg"
        src={`/images/${option}.webp`}
        width="490"
        height="400"
        alt=""
      />
      <h2 className="text-3xl font-bold ">{t(`servicios.${option}`)}</h2>

      <p className="mt-4 text-black">{t(`servicios.detalle.${option}`)}</p>

      
      {/* <button
        className="bg-[#f37032] p-2 mt-2 h-12 items-center rounded-xl text-black flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#ee2967] duration-300"
        href="https://api.whatsapp.com/send/?phone=5491157650309&text&type=phone_number&app_absent=0"
      >
        <span className="text-sm font-medium"> {t.reserva.button} </span>

        <svg
          className="ml-3 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button> */}
    </motion.div>
  );
}
