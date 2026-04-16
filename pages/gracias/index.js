import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

export default function Gracias() {
  return (
    <>
      <Head>
        <title>Gracias - Vukova Training Center</title>
        <meta property="og:title" content="Gracias por sumarte a Vukova" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="w-full min-h-screen flex items-center justify-center bg-black text-white px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className="w-16 h-16 mx-auto mb-8 rounded-full bg-gradient-to-r from-[#EA2479] to-[#eb6724] flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
          >
            <span className="text-3xl text-white">&#10003;</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-antonioBold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            GRACIAS POR SUMARTE
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 font-montReg max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Nos vemos pronto en Vukova para superar tus limites.
          </motion.p>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#EA2479] to-[#eb6724] mx-auto mb-12"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              href="/membresias"
              className="px-8 py-3 rounded font-montBold bg-[#EA2479] text-white transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#d41e6b]"
            >
              VOLVER A MEMBRESIAS
            </Link>
            <Link
              href="/"
              className="px-8 py-3 rounded font-montBold bg-white text-black transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-gray-200"
            >
              VOLVER AL INICIO
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
