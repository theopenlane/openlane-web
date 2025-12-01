// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE =
  "Open-source Compliance Automation for SOC 2, ISO 27001 & NIST 800-53 | Openlane";
export const SITE_DESCRIPTION = "Real Security Is Built, Not Bought";

export const isPartOf = {
  "@type": "WebSite",
  name: "Openlane",
  url: "https://www.theopenlane.io",
};

export const creator = {
  "@type": "Organization",
  name: "Openlane",
  url: "https://www.theopenlane.io",
};

export const brandLogo = "https://www.theopenlane.io/logo/logo.png";
export const mainURL = "https://www.theopenlane.io";

export const sameAs = [
  "https://github.com/theopenlane",
  "https://www.linkedin.com/company/theopenlane",
  "https://www.openlane.fyi",
  "https://www.producthunt.com/products/openlane",
];

export const offer = {
  "@type": "Offer",
  price: "0.00",
  priceCurrency: "USD",
  category: "FreeTrial",
  description:
    "Free 30-day trial available for all plans. No credit card required.",
};

export const aggregateRating = {
  "@type": "AggregateRating",
  ratingValue: "5",
  ratingCount: "2",
  bestRating: "5",
  worstRating: "1",
};

export const reviews = [
  {
    "@type": "Review",
    reviewBody:
      "Openlane is the first compliance platform I've used that truly understands how startups operate - and that includes their transparent and affordable pricing. The ability to tailor controls to the realities of a growing business instead of forcing a rigid checklist makes them an ideal partner for early-stage teams.",
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
    },
    author: {
      "@type": "Organization",
      name: "Priolo Nextgen Compliance",
    },
  },
  {
    "@type": "Review",
    reviewBody:
      "Openlane delivers a developer-friendly approach to compliance management while eliminating the complexity of traditional GRC tools.",
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
    },
    author: {
      "@type": "Organization",
      name: "Openlane",
    },
  },
];

export const featureList = [
  "Audit programs for SOC 2, ISO 27001, NIST 800-53, and custom frameworks",
  "Custom and pre-built controls",
  "Automated evidence collection",
  "Policy and procedure management with templates",
  "Map controls across frameworks once and assess readiness across all of them",
  "Developer-first CLI and GitHub Actions",
  "Risk management built-in: score, track, and tie risks directly to your controls",
  "Upload and link evidence to controls with full versioning and audit trails",
];

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Openlane Compliance Platform",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://www.theopenlane.io",
  description:
    "Openlane is an open-source, developer-first compliance platform that automates security controls, evidence collection, and audit preparation for SOC 2, ISO 27001, NIST 800-53, PCI DSS, HIPAA, and more.",
  creator: creator,
  offers: offer,
  isPartOf: isPartOf,
  featureList: featureList,
  aggregateRating: aggregateRating,
  review: reviews,
};
