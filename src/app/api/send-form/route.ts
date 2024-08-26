"use server";

import { validator } from "@/utils/validator";
import { NextRequest, NextResponse, userAgent } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import fs from "fs";
import * as handlebars from "handlebars";
import * as path from "path";
// import handlebars from "han"

export async function POST(request: NextRequest, response: NextResponse) {
  if (request.method === "POST") {
    return await emailUsHandler(request, response);
  } else {
    return NextResponse.json(
      { message: "Method Not allowed" },
      { status: 405 }
    );
  }
}

async function emailUsHandler(request: NextRequest, response: NextResponse) {
  const data = await request.json();
  const { form, days, time } = data as any;
  console.log(data);

  const isValid = validator.hasNonEmptyValues(form);

  if (!isValid) {
    return NextResponse.json(
      { error: "Enter all fields correctly" },
      { status: 400 }
    );
  }

  const EmailTemplate = `<div style={{ fontFamily: "Arial, sans-serif", fontSize: "14px" }}>
<p style={{ color: "#0f172a", marginBottom: "100px", fontSize: "18px", fontWeight: "700" }}> New Message from, ${
    form.first_name
  }</p>
<div style={{ fontFamily: "Arial, sans-serif", fontSize: "14px" }}>
<p style={{ color: "#333", marginBottom: "20px" }}>
  First Name
</p>
<p style={{ color: "#333", marginBottom: "20px" }}>
  ${form.first_name}
</p>
<p style={{ color: "#333", marginBottom: "20px" }}>
  Last Name
</p>
<p style={{ color: "#333", marginBottom: "20px" }}>
  ${form.last_name}
</p>
<p style={{ color: "#333", marginBottom: "20px" }}>
 Phone 
</p>
<p style={{ color: "#333", marginBottom: "20px" }}>
  ${form.phone}
</p>
<p style={{ color: "#333", marginBottom: "20px" }}>
  What do you want Solar for?
</p>
<p style={{ color: "#333", marginBottom: "20px" }}>
  ${form.last_name}
</p>
<p style={{ color: "#333", marginBottom: "20px" }}>
  Occupation
</p>
<p style={{ color: "#333", marginBottom: "20px" }}>
  ${form.occupation}
</p>
<p style={{ color: "#333", marginBottom: "20px" }}>
  Payment plan Duration
</p>
<p style={{ color: "#333", marginBottom: "20px" }}>
  ${form.payment_plan}
</p>
<p style={{ color: "#333", marginBottom: "20px" }}>
  Energy Needs
</p>
<p style={{ color: "#333", marginBottom: "20px" }}>
  ${form.energy_needs}
</p>
<p style={{ color: "#333", marginBottom: "20px" }}>
  Days
</p>
${days?.map(
  (day: string) =>
    `<p style={{ color: "#333", marginBottom: "20px" }}>${day}</p>`
)}
<p style={{ color: "#333", marginBottom: "20px" }}>
  Time
</p>
${time?.map(
  (time: string) =>
    `<p style={{ color: "#333", marginBottom: "20px" }}>${time}</p>`
)}
</div>
</div>`;

  // const __dirname = path.resolve();
  // const filePath = path.join(__dirname, "/public/email-template.html");
  // const source = fs.readFileSync(filePath, "utf-8").toString();
  // const template = handlebars.compile(source);
  // const replacements = {
  //   first_name: form.first_name,
  //   last_name: form.last_name,
  //   phone: form.phone,
  //   occupation: form.occupation,
  //   payment_plan: form.payment_plan,
  //   energy_needs: form.energy_needs,
  // };
  // const htmlToSend = template(replacements);

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: "mosesgeorge323287@gmail.com",
    to: process.env.NODEMAILER_EMAIL,
    subject: "Solar Energy Application",
    text: "",
    html: EmailTemplate,
  };

  try {
    await transport.sendMail(mailOptions);
    return NextResponse.json({
      message: "Your message has been sent",
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err, status: 500 });
  }
}
