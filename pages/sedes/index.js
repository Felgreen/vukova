import Head from "next/head";
import { useTranslation } from 'next-export-i18n';
import Dropdown from '../../components/Dropdown'
// import en from "../../public/locales/en/english.json"
// import es from "../../public/locales/es/espanol.json";
// import { useRouter } from "next/router";
import Footer from '../../components/Footer';

const Sedes = () => {
  const { t } = useTranslation();
  // const router = useRouter();
  // const { locale } = router;
  // const t = locale === "es" ? es : en;

  return (
    <>
     <Head>
        <title>Sedes Vukova - Vicente Lopez - Acassuso - Beccar</title>

        <meta property="og:title" content="Encuentra tu lugar de entrenamiento ideal en nuestras sedes en Vicente López, Acassuso y Beccar. Descubre horarios, direcciones y servicios específicos para cada ubicación." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <section id='Sedes' className='py-24 px-5 lg:p-40 content-center'>
      <Dropdown/>
    </section>
    <Footer/>
    </>
  )
}

export default Sedes
