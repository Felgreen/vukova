import React from 'react'
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';


import UnderConstruction from '../../components/ui/UnderConstruction'
import Footer from '../../components/Footer';
// import en from "../../public/locales/en/english.json";
// import es from "../../public/locales/es/espanol.json";

const distancia = () => {
  const {t} = useTranslation(); 

  // const router = useRouter();
  // const { locale } = router;
  // const t = locale === "es" ? es : en;
  
  return (
    <>
      <Head>
        <title>Entrenamiento a distancia.</title>

        <meta property="og:title" content="No importa dónde estés, el equipo Vukova está contigo. Descubre nuestro servicio de entrenamiento a distancia con rutinas personalizadas y seguimiento constante."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <UnderConstruction/>
    <Footer/>
    </>
  )
}

export default distancia