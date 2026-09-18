// Deploy with: supabase functions deploy send-contact-notification
// Then wire it to a Database Webhook (Dashboard -> Database -> Webhooks) firing
// on INSERT into public.contact_submissions.
// Requires a RESEND_API_KEY secret: supabase secrets set RESEND_API_KEY=...
// Not deployed as part of this change — no CLI credentials were available.

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const NOTIFY_TO = "team@techmechatorque.com";

Deno.serve(async (req: Request) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const payload = await req.json();
  const record = payload.record ?? payload;

  const name = String(record.name ?? "").slice(0, 200);
  const email = String(record.email ?? "").slice(0, 200);
  const message = String(record.message ?? "").slice(0, 5000);

  if (!RESEND_API_KEY) {
    return new Response("RESEND_API_KEY not configured", { status: 500 });
  }

  

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "TechMecha Torque Website <no-reply@techmechatorque.com>",
      to: [NOTIFY_TO],
      reply_to: email,
      subject: `New contact form submission from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    return new Response(`Failed to send: ${body}`, { status: 502 });
  }

  return new Response("ok", { status: 200 });
});
