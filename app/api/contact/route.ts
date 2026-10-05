import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validation";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  const d = parsed.data;

  let saved = false;
  let sent = false;

  if (process.env.DATABASE_URL) {
    try { await prisma.contactMessage.create({ data: d }); saved = true; } catch (e) { console.error("DB error", e); }
  }

  if (process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL ?? "Technusoft <onboarding@resend.dev>",
        to: process.env.CONTACT_TO_EMAIL,
        replyTo: d.email,
        subject: `New enquiry: ${d.service}`,
        text: `Name: ${d.name}\nEmail: ${d.email}\nService: ${d.service}\n\n${d.message}`,
      });
      sent = !error;
    } catch (e) { console.error("Email error", e); }
  }

  if (!saved && !sent) return NextResponse.json({ error: "Not configured" }, { status: 500 });
  return NextResponse.json({ ok: true });
}
