import Head from "next/head";
import { useRouter } from "next/router";
import en from "../public/locales/en/english.json";
import es from "../public/locales/es/espanol.json";
import "../components/i18n";

import Layout from "../components/Layout";

export default function Home() {
  const { locale, locales, push } = useRouter();

  const t = locale === "es" ? es : en;

  const handleClick = (l) => () => {
    push("/", undefined, { locale: l });
  };

  return (
    <>
      <Head>
        <title>Vukova</title>
        <meta name="description" content="Vivir la cuidad de otra manera" />
        <meta property="og:title" content={t.seo.title} />
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
