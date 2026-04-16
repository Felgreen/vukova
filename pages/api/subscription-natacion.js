import { MercadoPagoConfig, PreApprovalPlan } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

const PLANS = {
  "1x": {
    reason: "Natacion 1 vez por semana - Vukova Training Center",
    amount: 72000,
  },
  "2x": {
    reason: "Natacion 2 veces por semana - Vukova Training Center",
    amount: 80000,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { planType } = req.body;

    if (!planType || !PLANS[planType]) {
      return res.status(400).json({ error: "Invalid or missing planType. Use '1x' or '2x'" });
    }

    const plan = PLANS[planType];
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.vukova.com.ar";

    const planBody = {
      reason: plan.reason,
      external_reference: `natacion-${planType}-${Date.now()}`,
      auto_recurring: {
        frequency: 1,
        frequency_type: "months",
        transaction_amount: plan.amount,
        currency_id: "ARS",
        billing_day: 5,
        billing_day_proportional: true,
      },
      back_url: `${siteUrl}/gracias`,
    };

    const preApprovalPlan = new PreApprovalPlan(client);
    const result = await preApprovalPlan.create({ body: planBody });

    return res.status(200).json({ init_point: result.init_point });
  } catch (error) {
    console.error("Natacion subscription error:", error);
    return res.status(500).json({
      error: error.message || "Error creating natacion subscription",
    });
  }
}
