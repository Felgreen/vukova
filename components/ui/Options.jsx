import Image from "next/image";
import { motion } from "framer-motion";

export default function Options({ option, t }) {
  const boxVariant = {
    offscreen: { opacity: 0, scale: 0 },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", duration: 1, bounce: 0.3 },
    },
  };
  switch (option) {
    case "EDP":
      return (
        <motion.div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left h-full">
          <h2 className="text-3xl font-bold ">{t.wellness.Prev1}</h2>

          <p className="mt-4 text-black">
            {t.wellness["EVALUACIONES DEPORTIVAS PREVENTIVAS"]}
          </p>
          <Image
            className="rounded-lg"
            src="/images/gpk.webp"
            width="590"
            height="500"
            alt=""
          />
          <button
            className="bg-[#f37032] p-2 mt-2 h-12 items-center rounded-xl text-black flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#ee2967] duration-300"
            href="https://api.whatsapp.com/send/?phone=5491154899448&text&type=phone_number&app_absent=0"
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
          </button>
        </motion.div>
      );
    case "GKP":
      return (
        <motion.div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left h-full">
          <h2 className="text-3xl font-bold ">{t.wellness.GKP1}</h2>

          <p className="mt-4 text-black">
            {t.wellness["GIMNASIA KINESICA PREVENTIVA (GKP)"]}
          </p>
          <Image
            className="rounded-lg"
            src="/images/gpk.webp"
            width="500"
            height="500"
            alt=""
          />
          <button
            className="bg-[#f37032] p-2 mt-2 h-12 items-center rounded-xl text-black flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#ee2967] duration-300"
            href="https://api.whatsapp.com/send/?phone=5491154899448&text&type=phone_number&app_absent=0"
          >
            <span className="text-sm font-medium">{t.reserva.button} </span>

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
          </button>
        </motion.div>
      );
    case "Kinio":
      return (
        <motion.div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left h-full">
          <h2 className="text-3xl font-bold ">{t.wellness.KINESIOLOGIA1}</h2>
          <p className="mt-4 text-black">{t.wellness.KINESIOLOGIA}</p>
          <Image
            className="rounded-lg"
            src="/images/kine.webp"
            width="590"
            height="500"
            alt=""
          />
          <button
            className="bg-[#f37032] p-2 mt-2 h-12 items-center rounded-xl text-black flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#ee2967] duration-300"
            href="https://api.whatsapp.com/send/?phone=5491154899448&text&type=phone_number&app_absent=0"
          >
            <span className="text-sm font-medium">{t.reserva.button}</span>

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
          </button>
        </motion.div>
      );

    case "Nutri":
      return (
        <motion.div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left h-full">
          <h2 className="text-3xl font-bold">{t.wellness.NUTRICION1}</h2>
          <p className="mt-4 text-black">{t.wellness.NUTRICION}</p>
          <Image
            className="rounded-lg"
            src="/images/nutri.webp"
            width="580"
            height="500"
            alt=""
          />
          <button
            className="bg-[#f37032] p-2 mt-2 h-12 items-center rounded-xl text-black flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#ee2967] duration-300"
            href="https://api.whatsapp.com/send/?phone=5491154899448&text&type=phone_number&app_absent=0"
          >
            <span className="text-sm font-medium">{t.reserva.button} </span>

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
          </button>
        </motion.div>
      );
    case "Osteo":
      return (
        <motion.div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left h-full">
          <h2 className="text-3xl font-bold ">{t.wellness.OSTEOPATIA1}</h2>
          <p className="mt-4 text-black">{t.wellness.OSTEOPATIA}</p>
          <Image
            className="rounded-lg"
            src="/images/ostio.webp"
            width="590"
            height="500"
            alt=""
          />
          <button
            className="bg-[#f37032] p-2 mt-2 h-12 items-center rounded-xl text-black flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#ee2967] duration-300"
            href="https://api.whatsapp.com/send/?phone=5491154899448&text&type=phone_number&app_absent=0"
          >
            <span className="text-sm font-medium">{t.reserva.button}</span>

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
          </button>
        </motion.div>
      );
    default:
      return (
        <motion.div
          className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left h-full"
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={boxVariant}
          viewport={{ once: true, amount: 1 }}
        >
          <h2 className="text-3xl font-bold">{t.wellness.Prev1}</h2>

          <p className="mt-4 text-black">
            {t.wellness["EVALUACIONES DEPORTIVAS PREVENTIVAS"]}
          </p>

          <Image
          className="rounded-lg"
          src="/images/gpk.webp"
          width="590"
          height="500"
          alt=""
          />
          <button
            className="bg-[#f37032] p-2 mt-2 h-12 items-center rounded-xl text-black flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#ee2967] duration-300"
            href="https://api.whatsapp.com/send/?phone=5491154899448&text&type=phone_number&app_absent=0"
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
          </button>
        </motion.div>
      );
  }
}
