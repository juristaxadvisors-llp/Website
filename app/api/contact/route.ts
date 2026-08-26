import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { enquiryServices } from "@/lib/content";
import { enquiryEmailHtml, enquiryEmailText } from "@/lib/email";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = readString(body.name);
  const email = readString(body.email);
  const phone = readString(body.phone);
  const organisation = readString(body.organisation);
  const service = readString(body.service);
  const message = readString(body.message);

  if (name.length < 2 || name.length > 80) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (phone.length < 8 || phone.length > 20) {
    return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
  }

  if (organisation.length > 120) {
    return NextResponse.json({ error: "Please shorten the organisation name." }, { status: 400 });
  }

  if (!enquiryServices.includes(service)) {
    return NextResponse.json({ error: "Please select what we can help you with." }, { status: 400 });
  }

  if (message.length < 8 || message.length > 1200) {
    return NextResponse.json({ error: "Please enter a short message." }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.MAIL_TO || "juristaxadvisors@gmail.com";
  const from = process.env.MAIL_FROM || `Juristax Advisors LLP <${user}>`;
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = process.env.SMTP_SECURE !== "false";

  if (!host || !user || !pass) {
    return NextResponse.json(
      { error: "Email is not configured yet. Please write to us directly." },
      { status: 500 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `New enquiry: ${service} · ${name}`,
      text: enquiryEmailText({ name, email, phone, organisation, service, message }),
      html: enquiryEmailHtml({ name, email, phone, organisation, service, message }),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact email failed", error);
    return NextResponse.json(
      { error: "The message could not be sent just now. Please email us directly." },
      { status: 502 },
    );
  }
}
