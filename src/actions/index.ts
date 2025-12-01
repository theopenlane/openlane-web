import { defineAction } from "astro:actions";
import { Resend } from "resend";
import { z } from "astro:schema";

const resend = new Resend(import.meta.env.SECRET_RESEND_API_KEY);

async function verifyRecaptcha(token: string) {
  const secret = import.meta.env.RECAPTCHA_SECRET_KEY;

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret,
        response: token,
      }),
    },
  );

  return response.json();
}

export const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
      name: z.string(),
      company: z.string(),
      email: z.string().email(),
      message: z.string(),
      recaptchaToken: z.string(),
    }),
    handler: async ({ name, company, email, message, recaptchaToken }) => {
      const result = await verifyRecaptcha(recaptchaToken);

      if (!result.success || result.score < 0.3) {
        console.error("reCAPTCHA failed:", result);
        const err = new Error("recaptcha-failed");
        err.name = "recaptcha-failed";

        throw err;
      }

      const { data, error } = await resend.emails.send({
        from: "Openlane <no-reply@mail.theopenlane.io>",
        to: "info@theopenlane.io",
        subject: "Openlane Web",
        html: `
          <div style="font-family: sans-serif; font-size: 14px;">
            <strong>New Web Form Submission</strong><br><br>
            <strong>Company:</strong> ${company}<br>
            <strong>Name:</strong> ${name}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Message:</strong><br>
            ${message.replace(/\n/g, "<br>")}
          </div>
        `,
      });

      if (error) {
        console.log(error);
        throw error;
      }

      return data;
    },
  }),
};
