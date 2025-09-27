

import Head from "next/head";



import Layout from "../components/Layout";

export default function Home() {
 



  return (
    <>
      <Head>
        <title>Vukova</title>
        <meta name="description" content="Alcanza tus objetivos de forma personalizada y en comunidad en Vukova. Deja de pensarlo y ¡arranca tu transformación ahora!" />
        <meta property="og:title" content="Vukova Training Center" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Layout />
    </>
  );
}
