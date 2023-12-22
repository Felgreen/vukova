import Image from "next/image";
import { motion } from "framer-motion";

export default function Options({ option }) {

  const servicios = {
    "h3":"Servicios disponibles",
    "WL": "Weightlifting",
    "YOGA": "Yoga",
    "NATACION": "Natación",
    "BABY": "Bebes al agua",
    "PILETA": "Pileta Libre",
    "PERSONAL": "Personal",
    "WOD": "WOD",
    "AQUAGYM": "Aqua-Gym",
    "detalle": {
      "WL": "El weightlifting es un deporte en el que los atletas compiten para levantar la mayor cantidad de peso posible en dos movimientos: el arranque (snatch) y el envión (clean and jerk). Estos movimientos requieren fuerza, velocidad y técnica, y el weightlifting es parte de los Juegos Olímpicos.",
      "YOGA": "El yoga es una práctica holística originaria de la India que combina posturas físicas, técnicas de respiración y meditación. Busca el equilibrio entre mente y cuerpo, mejorando la flexibilidad, fortaleza y bienestar general.",
      "NATACION": "La natación es un deporte acuático que implica nadar en piscinas, lagos u océanos. Mejora la salud cardiovascular, fortalece los músculos y es una habilidad vital.",
      "BABY": "Bebes al agua",
      "PILETA": "Pileta Libre",
      "PERSONAL": "El entrenamiento personal implica trabajar con un profesional del fitness para desarrollar un programa de ejercicios personalizado. Se adapta a las metas individuales, brinda orientación sobre ejercicios y motiva para alcanzar un mejor estado físico.",
      "WOD": "WOD significa 'Workout of the Day' (Entrenamiento del Día). Es un término común en el entrenamiento funcional y el CrossFit. Un WOD es una rutina de ejercicios intensa y variada diseñada para mejorar la resistencia, la fuerza y la condición física en general.",
      "AQUAGYM": "Aqua-Gym"
    }
  }

  const boxVariant = {
    offscreen: { opacity: 0, scale: 0 },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", duration: 1, bounce: 0.3 },
    },
  };

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
      <h2 className="text-3xl font-bold ">{servicios[option]}</h2>

      <p className="mt-4 text-black">{servicios.detalle[option]}</p>
    </motion.div>
  );
}
