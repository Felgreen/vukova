import React from "react";
import { useRouter } from "next/router";
import en from "./../public/locales/en/english.json";
import es from "./../public/locales/es/espanol.json";

const Services = ({ option }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;

  console.log(option);

  switch (option) {
    case "HIIT":
      return (
        <section className="">
          <div className="p-8 md:p-12 lg:px-16 lg:py-10">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-2xl font-montSemiBold text-black md:text-3xl"></h2>
              <p className=" text-md text-black sm:mt-4 sm:block font-montSemiBold">
                {t.entrenamiento.hiit}
              </p>
            </div>
          </div>
        </section>
      );
    case "Metabolico":
      return (
        <section className="bg-[#081B33]">
          <div className="p-8 md:p-12 lg:px-16 lg:py-10">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-2xl font-montSemiBold text-black md:text-3xl"></h2>
              <p className=" text-black-500 sm:mt-4 sm:block font-montSemiBold">
                {t.entrenamiento.metabolico}
              </p>
            </div>
          </div>
        </section>
      );
    case "Surf Training":
      return (
        <section className="bg-[#081B33]">
          <div className="p-8 md:p-12 lg:px-16 lg:py-10">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-2xl font-montSemiBold text-black md:text-3xl"></h2>
              <p className="text-black-500 sm:mt-4 sm:block font-montSemiBold">
                {t.entrenamiento.surf}
              </p>
            </div>
          </div>
        </section>
      );

    case "Desarrollo de fuerza":
      return (
        <section className="bg-[#081B33]">
          <div className="p-8 md:p-12 lg:px-16 lg:py-10">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-2xl font-montSemiBold text-black md:text-3xl"></h2>
              <p className=" text-black-500 sm:mt-4 sm:block font-montSemiBold">
                {t.entrenamiento.strength}
              </p>
            </div>
          </div>
        </section>
      );
    case "Entrenamiento Funcional":
      return (
        <section className="bg-[#081B33]">
          <div className="p-8 md:p-12 lg:px-16 lg:py-10">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-2xl font-montSemiBold text-black md:text-3xl"></h2>
              <p className="text-black-500 sm:mt-4 sm:block font-montSemiBold">
                {t.entrenamiento.functional}
              </p>
            </div>
          </div>
        </section>
      );
    default:
      return (
        <section className="bg-[#081B33]">
          <div className="p-8 md:p-12 lg:px-16 lg:py-10">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-2xl font-montSemiBold text-black md:text-3xl"></h2>
              <p className=" text-md text-black sm:mt-4 sm:block font-semiBold">
                {t.entrenamiento.hiit}
              </p>
            </div>
          </div>
        </section>
      );
  }
};

export default Services;
