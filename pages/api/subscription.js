import { MercadoPagoConfig, PreApprovalPlan } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.vukova.com.ar";

    const planBody = {
      reason: "Membresia Mensual - Vukova Training Center",
      external_reference: `membresia-mensual-${Date.now()}`,
      auto_recurring: {
        frequency: 1,
        frequency_type: "months",
        transaction_amount: 130000,
        currency_id: "ARS",
        billing_day: 5,
        billing_day_proportional: true,
      },
      back_url: `${siteUrl}/gracias`,
    };

    const plan = new PreApprovalPlan(client);
    const result = await plan.create({ body: planBody });

    return res.status(200).json({ init_point: result.init_point });
  } catch (error) {
    console.error("Mercado Pago subscription error:", error);
    return res.status(500).json({
      error: error.message || "Error creating subscription plan",
    });
  }
}
