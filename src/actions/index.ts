import { defineAction } from "astro:actions";
import { Resend } from "resend";
import { z } from "astro:schema";

const resend = new Resend(import.meta.env.SECRET_RESEND_API_KEY);

const LABELS: Record<string, Record<string, string>> = {
  company_size: {
    "1-10": "1-10",
    "11-50": "11-50",
    "51-200": "51-200",
    "201-1000": "201-1,000",
    "1000+": "1,000+",
  },
  primary_goal: {
    "soc2-readiness": "SOC 2 Readiness",
    "trust-center": "Trust Center",
    "replacing-tool": "Replacing Current Tool",
    "multi-framework-audit": "Multi-framework audit",
    "vendor-management": "Vendor Management",
    "automated-evidence": "Automated Evidence Collection",
    "just-exploring": "Just Exploring",
  },
  compliance_experience: {
    "never-done": "I've never done this before",
    "starting-new": "I've done it before, but starting a new program",
    "in-progress": "In progress",
    certified: "Certified (SOC 2 / ISO)",
    "multi-framework": "Multi-framework",
  },
  timeline: {
    asap: "ASAP",
    "1-3-months": "1-3 months",
    "3-6-months": "3-6 months",
    "just-researching": "Just researching",
  },
};

const label = (field: string, value: string | undefined): string => {
  if (!value) return "-";
  return LABELS[field]?.[value] ?? value;
};

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
      company_size: z.string().optional(),
      primary_goal: z.string().optional(),
      compliance_experience: z.string().optional(),
      timeline: z.string().optional(),
      message: z.string().optional(),
      recaptchaToken: z.string(),
    }),
    handler: async ({
      name,
      company,
      email,
      company_size,
      primary_goal,
      compliance_experience,
      timeline,
      message,
      recaptchaToken,
    }) => {
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
            <strong>Company Size:</strong> ${label("company_size", company_size)}<br>
            <strong>Primary Goal:</strong> ${label("primary_goal", primary_goal)}<br>
            <strong>Compliance Experience:</strong> ${label("compliance_experience", compliance_experience)}<br>
            <strong>Timeline:</strong> ${label("timeline", timeline)}<br>
            <strong>Message:</strong><br>
            ${message ? message.replace(/\n/g, "<br>") : "—"}
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
