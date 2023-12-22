import Head from "next/head";
import { Personal, Swim, WL, WOD, Yoga } from "../../components/svg/index";
// import en from "../../public/locales/en/english.json";
// import es from "../../public/locales/es/espanol.json";
import { useTranslation } from "next-export-i18n";
import { useState } from "react";
import Options from "../../components/ui/Options";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import ServicesOptions from "../../components/ui/ServicesOptions";

export default function Services() {
  const { t } = useTranslation();
  const [option, setOption] = useState("WL");
  // const router = useRouter();
  // const { locale } = router;
  // const t = locale === "es" ? es : en;

  return (
    <>
      <Head>
        <title>Servicios Vukova</title>

        <meta
          property="og:title"
          content="Weightlifting, yoga, natacion, natacion para bebes , natacion para chicos, personal training, WOD."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section
        className="w-screen h-screen mt-24 text-black flex items-center justify-center"
        id="activities"
      >
        <div className="px-4 mx-auto max-w-7xl h-full sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-y-10 lg:grid-cols-5 gap-x-4 font-montBold">
            <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
              <ServicesOptions
                setOption={setOption}
                option="WL"
                icon={<WL className="text-3xl" />}
                label="WEIGHTLIFTING"
              />
              <ServicesOptions
                setOption={setOption}
                option="YOGA"
                icon={<Yoga className="text-3xl" />}
                label="YOGA"
              />
              <ServicesOptions
                setOption={setOption}
                option="NATACION"
                icon={<Swim className="text-3xl" />}
                label="NATACIÓN"
              />
              <ServicesOptions
                setOption={setOption}
                option="PERSONAL"
                icon={<Personal className="text-3xl" />}
                label="PERSONAL"
              />
              <ServicesOptions
                setOption={setOption}
                option="WOD"
                icon={<WOD className="text-3xl" />}
                label="WOD"
              />
            </div>
            <div className="lg:col-span-3 flex m-auto">
              <Options option={option} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
