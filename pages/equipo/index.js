import Head from "next/head";
import { useRouter } from "next/router";
import en from "../../public/locales/en/english.json";
import es from "../../public/locales/es/espanol.json";

import Manifesto from '../../components/Manifesto';
import Navbar from '../../components/Navbar';


export default function Entrenamiento() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;

  return (
    <section>
      <Head>
        <title>{t.seo.aboutTitle}</title>

        <meta property="og:title" content={t.seo.aboutTitle} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <div className="mx-auto max-w-screen-2xl px-4 py-32 sm:px-6 lg:px-8 text-justify">
        <h2 className="text-2xl text-black font-montBold sm:text-3xl lg:text-4xl tracking-tight mx-4 hidden lg:flex lg:mx-28 my-6">
          {t.nosotros.title}
        </h2>

        <p className="mt-4 font-montBold text-black mx-4 hidden lg:flex lg:mx-28">
          {t.about.desc}
        </p>

        <p className="mt-4  font-montBold text-black mx-4 hidden lg:flex lg:mx-28">
          {t.nosotros.set2}
        </p>
        <p className="mt-4  font-montBold text-black mx-4 hidden lg:flex lg:mx-28 mb-10">
          {t.nosotros.set3}
        </p>
        <div className="grid grid-cols-1 lg:h-[80vh] lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              {/* <Image
              src="/images/logoReal.webp"
              alt="surfbowl"
              layout="fill"
              objectFit="cover"
            
              className="absolute inset-0 h-full w-full object-cover
              opacity-75 transition-opacity group-hover:opacity-50"
    /> */}
              <img
                alt="Surfhouse Team"
                src="/images/surfing.webp"
                className="absolute inset-0 h-full w-full object-cover rounded-md"
              />
            </div>
          </div>

          <div className="relative flex lg:items-center bg-gray-100 rounded-r-md h-[80vh]">
            
            <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100 rounded-l-md ">  
             </span>
          
            <div className="p-8">
            
              

            <div className="p-8">
              <Manifesto />
            </div>
          </div>
        </div>
        <h2 className="text-2xl text-black font-montBold sm:text-3xl mx-6 lg:hidden text-center  lg:mx-20 my-6">
          {t.nosotros.title}
        </h2>

        <p className="mt-4 font-montBold text-gray-100 mx-6 text-center  lg:hidden lg:mx-20">
          {t.nosotros.set1}
        </p>

        <p className="mt-4  font-montBold text-gray-100 mx-6 text-center   lg:hidden lg:mx-20">
          {t.nosotros.set2}
        </p>
        <p className="mt-4  font-montBold text-gray-100 mx-6 text-center  lg:hidden lg:mx-20 mb-10">
          {t.nosotros.set3}
        </p>
      </div>
      </div>
    </section>
  );
}
