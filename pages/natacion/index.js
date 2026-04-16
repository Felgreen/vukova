import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

// ── Animation variants ──────────────────────────────────────────────────────

const fadeUp = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 0.8, bounce: 0.3 },
  },
};

const staggerContainer = {
  onscreen: {
    transition: { staggerChildren: 0.2 },
  },
};

// ── Subscription plans data ─────────────────────────────────────────────────

const plans = [
  {
    planType: "1x",
    name: "1 vez por semana",
    displayPrice: "72.000",
    period: "/mes",
    highlighted: false,
  },
  {
    planType: "2x",
    name: "2 veces por semana",
    displayPrice: "80.000",
    period: "/mes",
    highlighted: true,
  },
];

// ── Plan Card Component ─────────────────────────────────────────────────────

function NatacionCard({ plan, onSubscribe, loadingType }) {
  const isLoading = loadingType === plan.planType;

  return (
    <motion.div
      className="group relative"
      variants={fadeUp}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      {plan.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#EA2479] text-white text-xs font-montBold px-4 py-1 rounded-full z-10 whitespace-nowrap">
          MAS ELEGIDO
        </div>
      )}
      <div
        className={`absolute inset-1 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-500 ${
          plan.highlighted
            ? "bg-gradient-to-r from-[#EA2479] to-[#eb6724]"
            : "bg-gradient-to-r from-gray-600 to-gray-400"
        }`}
      />
      <div className="bg-[#1a1a1a] relative rounded-lg p-10 flex flex-col items-center text-center h-full">
        <h3 className="text-2xl font-antonioBold text-white mb-6">
          {plan.name}
        </h3>
        <div className="mb-8">
          <span className="text-5xl font-montBold text-white">
            ${plan.displayPrice}
          </span>
          <span className="text-gray-400 font-montReg text-xl">
            {plan.period}
          </span>
        </div>

        {/* Features will be added here after client review */}

        <button
          onClick={() => onSubscribe(plan.planType)}
          disabled={isLoading}
          className={`w-full max-w-xs py-4 rounded font-montBold text-lg transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100 ${
            plan.highlighted
              ? "bg-[#EA2479] text-white hover:bg-[#d41e6b]"
              : "bg-white text-black hover:bg-gray-200"
          }`}
        >
          {isLoading ? "PROCESANDO..." : "SUSCRIBIRME"}
        </button>

        <p className="text-gray-500 font-montReg text-xs mt-6">
          Se debita automaticamente el dia 5 de cada mes.
          <br />
          Cancela cuando quieras desde tu cuenta de Mercado Pago.
        </p>
      </div>
    </motion.div>
  );
}

// ── Main Page ───────────────────────────────────────────────────────────────

export default function Natacion() {
  const [loadingType, setLoadingType] = useState(null);

  const handleSubscribe = async (planType) => {
    setLoadingType(planType);

    try {
      const response = await fetch("/api/subscription-natacion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planType }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al crear la suscripcion");
      }

      window.location.href = data.init_point;
    } catch (error) {
      console.error("Natacion subscription error:", error);
      alert("Error: " + error.message);
    } finally {
      setLoadingType(null);
    }
  };

  return (
    <>
      <Head>
        <title>Natacion - Vukova Training Center</title>
        <meta
          property="og:title"
          content="Natacion en Vukova Training Center"
        />
        <meta
          name="description"
          content="Clases de natacion en Vukova Training Center. Suscripciones mensuales con debito automatico via Mercado Pago."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="w-full min-h-[60vh] flex items-center justify-center bg-black text-white pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-antonioBold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            NATACIÓN
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 font-montReg max-w-2xl mx-auto mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Elegí la frecuencia que mejor se adapte a tu rutina. Suscripcion
            mensual con debito automatico el dia 5 de cada mes.
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#EA2479] to-[#eb6724] mx-auto mt-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="bg-[#0c0c0c] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-5xl font-antonioBold text-white mb-4">
              PLANES DE NATACIÓN
            </h2>
            <p className="text-gray-400 font-montReg max-w-xl mx-auto">
              Cobro mensual automatico a tu tarjeta. Cancela cuando quieras
              desde tu cuenta de Mercado Pago.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
          >
            {plans.map((plan) => (
              <NatacionCard
                key={plan.planType}
                plan={plan}
                onSubscribe={handleSubscribe}
                loadingType={loadingType}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
