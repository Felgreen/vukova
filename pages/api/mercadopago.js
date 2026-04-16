import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { title, price, quantity = 1, plan_id, description } = req.body;

    if (!title || !price) {
      return res.status(400).json({ error: "Missing title or price" });
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.vukova.com.ar";

    // Unique reference to correlate MP payment_id with internal plan
    const external_reference = `${plan_id || "plan"}-${Date.now()}`;

    const preferenceBody = {
      items: [
        {
          id: plan_id || "plan",
          title: title,
          description: description || title,
          category_id: "services",
          quantity: Number(quantity),
          unit_price: Number(price),
          currency_id: "ARS",
        },
      ],
      external_reference: external_reference,
      back_urls: {
        success: `${siteUrl}/gracias`,
        failure: `${siteUrl}/membresias?status=failure`,
        pending: `${siteUrl}/membresias?status=pending`,
      },
      auto_return: "approved",
    };

    const preference = new Preference(client);
    const result = await preference.create({ body: preferenceBody });

    return res.status(200).json({ id: result.id });
  } catch (error) {
    console.error("Mercado Pago error:", error);
    return res.status(500).json({
      error: error.message || "Error creating payment preference",
    });
  }
}
