import React from "react";
import OpenLaneDark from "../../components/icons/OpenLaneDark.astro";
import OpenLaneLight from "../../components/icons/OpenLaneLight.astro";

interface LegalDocument {
  title: string;
  description: string;
  href: string;
}

const legalDocuments: LegalDocument[] = [
  {
    title: "Privacy Policy",
    description:
      "How we collect, use, and safeguard your personal information.",
    href: "/legal/privacy",
  },
  {
    title: "Terms of Service",
    description:
      "The rules and responsibilities that apply when you use Openlane.",
    href: "/legal/terms-of-service",
  },
  {
    title: "Cookie Policy",
    description:
      "How we use cookies and similar technologies to improve your experience.",
    href: "/legal/cookie-policy",
  },
  {
    title: "Data Processing Agreement",
    description:
      "How we handle and protect customer data in compliance with privacy laws.",
    href: "/legal/dpa",
  },
  {
    title: "Subprocessors",
    description:
      "A list of the trusted third-party providers we rely on to deliver our services.",
    href: "/legal/subprocessors",
  },
];

const LegalLanding: React.FC = () => {
  return (
    <>
      <section className="py-10 px-2 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-5xl sm:text-5xl md:text-6xl pl-0 md:pl-6 leading-10 font-normal text-color leading-[100%] text-left">
            <span className="text-gradient">Legal Center</span>
          </p>
        </div>
      </section>

      <section className="py-3 px-2 sm:px-6 mb-10">
        <div className="mx-auto max-w-7xl pl-0 md:pl-6">
          <p className="leading-10 letter-spacing-[-0.9px] font-normal text-color text-left">
            Here you’ll find all the legal documents, policies, and agreements
            that outline how Openlane operates and what you can expect when
            using our services. We’re committed to transparency and building
            trust, so we’ve made everything easy to access and understand.
          </p>
        </div>
      </section>

      <section className="py-10 px-2 sm:px-6 bg-slate-50 rounded-t-[60px] rounded-b-none border-t border-color box-shadow">
        <div className="max-w-7xl mx-auto pl-0 md:pl-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalDocuments.map((doc) => (
              <a
                key={doc.href}
                href={doc.href}
                className="block p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary transition-colors duration-200 text-left"
              >
                <p className="text-lg font-semibold mb-2 text-left">
                  {doc.title}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-left text-sm">
                  {doc.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalLanding;
