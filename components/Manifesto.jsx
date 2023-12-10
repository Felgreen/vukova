import { useRouter } from "next/router";
import React from "react";
import en from "../public/locales/en/english.json";
import es from "../public/locales/es/espanol.json";

const Manifesto = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;


  return (
    <section className="h-60">
      <div className="pt-14 items-center lg:p-8 text-center  text-black   ">
        <div className="mx-auto max-w-4xl text-center  ">
          <h2 className="text-3xl font-bold sm:text-5xl text-gray-900  font-antonioBold m-2 ">
            {t.nosotros.title}
          </h2>
          <h2 className="text-3xl font-bold sm:text-5xl text-black  md:text-3xl"></h2>

          <div className=" text-black font-antonBold  font-bold sm:mt-2 sm:block">
            {t.nosotros.set1}
            {t.nosotros.set2}
            {t.nosotros.set3}
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-xl"></div>
      </div>
    </section>
  );
};

export default Manifesto;
