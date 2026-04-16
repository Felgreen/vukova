import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import Footer from "../../components/Footer";

// Initialize Mercado Pago SDK (client-side only)
if (typeof window !== "undefined") {
  initMercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY, { locale: "es-AR" });
}

// ── Plan data ───────────────────────────────────────────────────────────────

const installmentPlans = [
  
  {
    id: "plan-3-meses",
    name: "Plan 3 Meses",
    totalPrice: 420000,
    displayTotal: "420.000",
    displayInstallment: "140.000",
    installments: 3,
    duration: "3 meses",
    description: "3 cuotas de $140.000",
    highlighted: false,
  },
  {
    id: "plan-6-meses",
    name: "Plan 6 Meses",
    totalPrice: 780000,
    displayTotal: "780.000",
    displayInstallment: "130.000",
    installments: 6,
    duration: "6 meses",
    description: "6 cuotas de $130.000",
    highlighted: true,
  },
  {
    id: "plan-12-meses",
    name: "Plan 12 Meses",
    totalPrice: 1320000,
    displayTotal: "1.320.000",
    displayInstallment: "220.000",
    installments: 6,
    duration: "12 meses",
    description: "6 cuotas de $220.000",
    highlighted: false,
  },
];

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
    transition: { staggerChildren: 0.15 },
  },
};

// ── Components ──────────────────────────────────────────────────────────────

function StatusBanner({ status }) {
  if (!status) return null;

  const messages = {
    failure: {
      text: "El pago no pudo ser procesado. Intenta nuevamente.",
      color: "bg-red-600",
    },
    pending: {
      text: "Tu pago esta pendiente de confirmacion.",
      color: "bg-yellow-500",
    },
  };

  const msg = messages[status];
  if (!msg) return null;

  return (
    <div
      className={`${msg.color} text-white text-center py-4 px-6 rounded-lg mx-auto max-w-2xl mb-8 font-montSemiBold`}
    >
      {msg.text}
    </div>
  );
}

function InstallmentCard({ plan, onBuy, loadingId, preferenceId, activePlanId }) {
  const isLoading = loadingId === plan.id;
  const showWallet = preferenceId && activePlanId === plan.id;

  return (
    <motion.div
      className="group relative"
      variants={fadeUp}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      {plan.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#eb6724] text-white text-xs font-montBold px-4 py-1 rounded-full z-10 whitespace-nowrap">
          MEJOR VALOR
        </div>
      )}
      <div
        className={`absolute inset-1 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-500 ${
          plan.highlighted
            ? "bg-gradient-to-r from-[#cd3e51] to-[#eb6724]"
            : "bg-gradient-to-r from-gray-600 to-gray-400"
        }`}
      />
      <div className="bg-[#1a1a1a] relative rounded-lg p-8 h-full flex flex-col">
        <h3 className="text-2xl font-antonioBold text-white mb-2">
          {plan.name}
        </h3>
        <p className="text-[#eb6724] font-montBold text-lg mb-4">
          {plan.description}
        </p>
        <div className="mb-2">
          <span className="text-4xl font-montBold text-white">
            ${plan.displayInstallment}
          </span>
          <span className="text-gray-400 font-montReg"> /cuota</span>
        </div>
        <p className="text-gray-500 font-montReg text-sm mb-8">
          Total: ${plan.displayTotal} ARS
        </p>
        <div className="mt-auto">
          {!showWallet ? (
            <button
              onClick={() => onBuy(plan)}
              disabled={isLoading}
              className={`w-full py-3 rounded font-montBold transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100 ${
                plan.highlighted
                  ? "bg-gradient-to-r from-[#cd3e51] to-[#eb6724] text-white"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              {isLoading ? "PROCESANDO..." : "COMPRAR"}
            </button>
          ) : (
            <div className="mp-wallet-container">
              <Wallet
                initialization={{ preferenceId: preferenceId }}
                customization={{ texts: { valueProp: "smart_option" } }}
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Page ───────────────────────────────────────────────────────────────

export default function Membresias() {
  const router = useRouter();
  const { status } = router.query;

  // Installment plan state
  const [preferenceId, setPreferenceId] = useState(null);
  const [activePlanId, setActivePlanId] = useState(null);

  // Loading state
  const [loadingId, setLoadingId] = useState(null);
  const [subLoading, setSubLoading] = useState(false);


  // Auto-clear the status query param after 8 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        router.replace("/membresias", undefined, { shallow: true });
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [status, router]);

  // ── Installment plan handler (Checkout Pro) ────────────────────────────────
  const handleBuyPlan = async (plan) => {
    setLoadingId(plan.id);
    setPreferenceId(null);
    setActivePlanId(null);

    try {
      const response = await fetch("/api/mercadopago", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: plan.name,
          description: plan.description,
          price: plan.totalPrice,
          quantity: 1,
          plan_id: plan.id,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al crear la preferencia de pago");
      }

      setPreferenceId(data.id);
      setActivePlanId(plan.id);
    } catch (error) {
      console.error("Plan error:", error);
      alert("Error: " + error.message);
    } finally {
      setLoadingId(null);
    }
  };

  

  // ── Subscription handler (PreApprovalPlan) ─────────────────────────────────
  const handleSubscribe = async () => {
    setSubLoading(true);

    try {
      const response = await fetch("/api/subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al crear la suscripcion");
      }

      window.location.href = data.init_point;
    } catch (error) {
      console.error("Subscription error:", error);
      alert("Error: " + error.message);
    } finally {
      setSubLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Membresias - Vukova Training Center</title>
        <meta
          property="og:title"
          content="Membresias y planes de entrenamiento en Vukova Training Center"
        />
        <meta
          name="description"
          content="Elegí el plan que mejor se adapte a vos. Suscripcion mensual y planes en cuotas para Weightlifting, Yoga, Natacion y mas."
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
            MEMBRESIAS
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 font-montReg max-w-2xl mx-auto mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Elegí el plan que mejor se adapte a vos y a tu estilo de vida.
            Ofrecemos una suscripcion mensual y planes en cuotas para que
            entrenes a tu ritmo.
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#EA2479] to-[#eb6724] mx-auto mt-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>
      </section>

      {/* Status Banner (failure/pending only — success redirects to /gracias) */}
      {status && (
        <section className="bg-black px-4 pb-4">
          <StatusBanner status={status} />
        </section>
      )}

      {/* Subscription */}
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
              SUSCRIPCION MENSUAL
            </h2>
            <p className="text-gray-400 font-montReg max-w-xl mx-auto">
              Debito automatico el dia 5 de cada mes. Cancela cuando quieras
              desde tu cuenta de Mercado Pago.
            </p>
          </motion.div>

          <motion.div
            className="max-w-md mx-auto"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="group relative">
              <div className="absolute inset-1 bg-gradient-to-r from-[#EA2479] to-[#eb6724] rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-500" />
              <div className="bg-[#1a1a1a] relative rounded-lg p-10 flex flex-col items-center text-center">
                <h3 className="text-3xl font-antonioBold text-white mb-4">
                  Membresia Mensual
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-montBold text-white">
                    $130.000
                  </span>
                  <span className="text-gray-400 font-montReg text-xl">
                    /mes
                  </span>
                </div>

                {/* Features will be added here after client review */}

                <button
                  onClick={handleSubscribe}
                  disabled={subLoading}
                  className="w-full max-w-xs py-4 rounded font-montBold text-lg bg-[#EA2479] text-white transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#d41e6b] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100"
                >
                  {subLoading ? "PROCESANDO..." : "SUSCRIBIRME"}
                </button>

                <p className="text-gray-500 font-montReg text-xs mt-6">
                  Se debita automaticamente el dia 5 de cada mes.
                  <br />
                  Cancela cuando quieras desde tu cuenta de Mercado Pago.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

     

      {/* Installment Plans */}
      <section className="bg-black py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-5xl font-antonioBold text-white mb-4">
              PLANES EN CUOTAS
            </h2>
            <p className="text-gray-400 font-montReg max-w-xl mx-auto">
              Elegí tu plan y paga el total con Mercado Pago. Podes elegir
              cuotas con tu tarjeta de credito desde el checkout.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
          >
            {installmentPlans.map((plan) => (
              <InstallmentCard
                key={plan.id}
                plan={plan}
                onBuy={handleBuyPlan}
                loadingId={loadingId}
                preferenceId={preferenceId}
                activePlanId={activePlanId}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
