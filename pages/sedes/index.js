import Head from "next/head";

import Dropdown from '../../components/Dropdown'

import Footer from '../../components/Footer';

const Sedes = () => {


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
