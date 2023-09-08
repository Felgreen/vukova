import Image from "next/image";

import { useRouter } from "next/router";
import en from "./../public/locales/en/english.json";
import es from "./../public/locales/es/espanol.json";
import Reserva from "./Reserva";



export default function Options({ option }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;

  switch (option) {
    case "EDP":
      return (
        <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left h-full bg-[#011C35]">
          <h2 className="text-3xl font-bold ">{t.wellness.Prev1}</h2>

          <p className="mt-4 text-gray-200">
            {t.wellness["EVALUACIONES DEPORTIVAS PREVENTIVAS"]}
          </p>

          <a
            className="my-2 inline-flex items-center rounded border border-blue-900  bg-blue-900 px-8 py-3 text-white hover:bg-transparent hover:text-blue-900 focus:outline-none focus:ring active:text-indigo-500"
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
          </a>
          {/* <Image
            className="rounded-lg"
            src={Eval}
            width="590"
            height="500"
            alt=""
          /> */}
        </div>
      );
    case "GKP":
      return (
        <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
          <h2 className="text-3xl font-bold ">{t.wellness.GKP1}</h2>

          <p className="mt-4 text-gray-200">
            {t.wellness["GIMNASIA KINESICA PREVENTIVA (GKP)"]}
          </p>

          <a
            className="my-2 inline-flex items-center rounded border border-blue-900  bg-blue-900 px-8 py-3 text-white hover:bg-transparent hover:text-blue-900 focus:outline-none focus:ring active:text-indigo-500"
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
          </a>
          <Image
            className="rounded-lg"
            src="/images/gpk.webp"
            width="500"
            height="500"
            alt=""
          />
        </div>
      );
    case "Kinio":
      return (
        <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
          <h2 className="text-3xl font-bold ">{t.wellness.KINESIOLOGIA1}</h2>

          <p className="mt-4 text-gray-200">{t.wellness.KINESIOLOGIA}</p>

          <a
            className="my-2 inline-flex items-center rounded border border-blue-900  bg-blue-900 px-8 py-3 text-white hover:bg-transparent hover:text-blue-900 focus:outline-none focus:ring active:text-indigo-500"
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
          </a>
          <Image
            className="rounded-lg"
            src="/images/kine.webp"
            width="590"
            height="500"
            alt=""
          />
        </div>
      );

    case "Nutri":
      return (
        <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
          <h2 className="text-3xl font-bold">{t.wellness.NUTRICION1}</h2>

          <p className="mt-4 text-gray-200">{t.wellness.NUTRICION}</p>

          <a
            className="my-2 inline-flex items-center rounded border border-blue-900  bg-blue-900 px-8 py-3 text-white hover:bg-transparent hover:text-blue-900 focus:outline-none focus:ring active:text-indigo-500"
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
          </a>
          <Image
            className="rounded-lg"
            src="/images/nutri.webp"
            width="580"
            height="500"
            alt=""
          />
        </div>
      );
    case "Osteo":
      return (
        <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
          <h2 className="text-3xl font-bold ">{t.wellness.OSTEOPATIA1}</h2>

          <p className="mt-4 text-gray-200">{t.wellness.OSTEOPATIA}</p>

          <a
            className="my-2 inline-flex items-center rounded border border-blue-900  bg-blue-900 px-8 py-3 text-white hover:bg-transparent hover:text-blue-900 focus:outline-none focus:ring active:text-indigo-500"
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
          </a>
          <Image
            className="rounded-lg"
            src="/images/ostio.webp"
            width="590"
            height="500"
            alt=""
          />
        </div>
      );
    default:
      return (
        <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
          <h2 className="text-3xl font-bold">{t.wellness.Prev1}</h2>

          <p className="mt-4 text-gray-200">
            {t.wellness["EVALUACIONES DEPORTIVAS PREVENTIVAS"]}
          </p>

          <a
            className="my-2 inline-flex items-center rounded border border-blue-900  bg-blue-900 px-8 py-3 text-white hover:bg-transparent hover:text-blue-900 focus:outline-none focus:ring active:text-indigo-500"
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
          </a>
          {/* <Image
            className="rounded-lg"
            src={Eval}
            width="590"
            height="280"
            alt=""
          /> */}
        </div>
      );
  }
}
