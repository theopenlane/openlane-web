import { useState } from "react";
import { CircleCheck, ShieldCheck, Puzzle, ChevronDown } from "lucide-react";

type PricingPlan = {
  title: string;
  description: string;
  price: string;
  annual: string;
  features: string[];
  comingSoon?: boolean;
};

type PricingData = {
  Modules: PricingPlan[];
  Addons: PricingPlan[];
};

const pricingData: PricingData = {
  Modules: [
    {
      title: "Compliance Module",
      description:
        "Build and run a structured, audit-ready compliance program without changing how your team works. Centralize policies, evidence, risk, vendors, and controls in one system designed to scale with your organization.",
      price: "$450",
      annual: "$5,000 billed annually",
      features: [
        "Unlimited Frameworks",
        "Program Creation",
        "Evidence Upload",
        "Policy and Procedures",
        "Vendor Management",
        "Risk Management",
        "Asset Management",
        "Personnel Management",
        "Questionnaire Automation",
        "Vulnerability Management",
        "Integrations",
        "Configurable Workflows and Notifications",
        "User and Group Level Permissions",
        "Unlimited Users",
        "Single Sign-On (SSO)",
        "Auditor Access",
        "1:1 Slack Support",
      ],
    },
    {
      title: "Trust Center",
      description:
        "Show prospects and customers exactly how you handle security and compliance. Share documentation behind NDA, customize your branding, and provide transparent subprocessor disclosures all in a professional Trust Center built to accelerate your sales process.",
      price: "$300",
      annual: "$3,000 billed annually",
      features: [
        "Unlimited Documents",
        "Subprocessor Management",
        "Clickwrap NDA",
        "Visitor Analytics",
        "Custom Domain and Branding",
        "Subprocessor Embedding",
      ],
      comingSoon: false,
    },
    // {
    //   title: "Vendor Management",
    //   description:
    //     "Confidently assess vendor risk and enforce security standards across your third-party ecosystem.",
    //   price: "$200",
    //   annual: "$2,000 billed annually",
    //   features: [
    //     "Onboarding Process Flows",
    //     "Criticality Categories",
    //     "Monitoring Cadences",
    //     "Questionnaires",
    //   ],
    //   comingSoon: true,
    // },
    // {
    //   title: "Vulnerability Management",
    //   description:
    //     "Identify and track security vulnerabilities across your systems. Stay ahead of potential threats with continuous monitoring.",
    //   price: "$100",
    //   annual: "$1,000 billed annually",
    //   features: [
    //     "Automated Identification",
    //     "Prioritization on Criticality",
    //     "Reporting Capabilities",
    //   ],
    //   comingSoon: true,
    // },
  ],
  Addons: [
    // {
    //   title: "Policy and Procedure Management",
    //   description:
    //     "Create and maintain your security policies with version control. Keep your documentation audit-ready.",
    //   price: "$10",
    //   annual: "$100 billed annually",
    //   features: [
    //     "Policy and Procedure Documentation",
    //     "Control Association",
    //     "Approval Management",
    //     "Auditor Access Management",
    //   ],
    // },
    // {
    //   title: "Risk Management",
    //   description:
    //     "Comprehensive risk assessment and monitoring solution. Make data-driven decisions about your security posture.",
    //   price: "$10",
    //   annual: "$100 billed annually",
    //   features: [
    //     "Identification and Analysis",
    //     "Risk Assessment Scoring",
    //     "Mitigation Planning",
    //     "Review Cadence",
    //   ],
    // },
    // {
    //   title: "Scanning",
    //   description:
    //     "Proactive security scanning for domains and infrastructure. Detect vulnerabilities before they become threats.",
    //   price: "$100",
    //   annual: "$1,000 billed annually",
    //   features: [
    //     "System and Boundary Creation",
    //     "Scheduled Scanning",
    //     "Report Generation",
    //     "Direct import into Vulnerability Management",
    //   ],
    //   comingSoon: true,
    // },
    {
      title: "Additional Evidence Storage (100GB)",
      description:
        "Expand your secure storage capacity for compliance evidence. Keep your documentation organized and accessible.",
      price: "$10",
      annual: "n/a",
      features: ["Secure Storage for Additional Evidence"],
    },
    {
      title: "Trust Center Attribution Removal",
      description:
        "Removes the “Powered by Openlane” footer from your Trust Center.",
      price: "$10",
      annual: "$100",
      features: [
        "Remove Attribution from Trust Center",
        "Custom Footer Text",
        "Custom Footer Link",
      ],
      comingSoon: true,
    },
  ],
};

const billingOptions = [
  { label: "Monthly", value: "monthly", discount: "" },
  { label: "Yearly", value: "yearly", discount: "7% OFF" },
] as const;

export default function PricingVertical() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [openModule, setOpenModule] = useState<number | null>(0);
  const [openAddon, setOpenAddon] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-10 pb-1">
      {/* Billing Toggle */}
      <div className="flex justify-center mb-10">
        <div className="flex bg-card rounded-full p-1 shadow-sm">
          {billingOptions.map((option, idx) => (
            <button
              key={option.value}
              className={`relative px-8 py-2 rounded-full font-semibold text-lg transition-all duration-150
                ${
                  billing === option.value
                    ? "bg-white shadow"
                    : "bg-transparent"
                }
              `}
              style={{ zIndex: billing === option.value ? 1 : 0 }}
              onClick={() => setBilling(option.value as "monthly" | "yearly")}
            >
              {option.label}
              {option.discount && option.value === "yearly" && (
                <span className="ml-2 align-middle inline-block bg-white border border-border text-xs px-2 py-[2px] rounded-md shadow-sm font-medium">
                  {option.discount}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Modules Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center mb-6">
          <ShieldCheck className="text-brand w-7 h-7 mr-3" />
          <h3 className="text-5xl font-semibold text-gray-800">
            Select your modules
          </h3>
        </div>
        {pricingData.Modules.map((plan, idx) => (
          <div
            key={idx}
            className="rounded-2xl shadow p-10 mb-10 border border-border flex flex-col"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <p className="text-2xl font-semibold text-gray-800 mb-0">
                    {plan.title}
                  </p>
                  {plan.comingSoon && (
                    <span className="text-xs bg-brand px-2 py-1 rounded-full w-fit">
                      Coming Soon
                    </span>
                  )}
                </div>
                <p className="text-lg text-gray-700 mb-4">{plan.description}</p>
              </div>
              <div className="flex flex-col items-end min-w-[200px] ml-6">
                <button
                  className="mb-4"
                  onClick={() => setOpenModule(openModule === idx ? null : idx)}
                  aria-expanded={openModule === idx}
                >
                  <ChevronDown
                    className={`w-7 h-7 transition-transform ${openModule === idx ? "rotate-180" : ""}`}
                  />
                </button>
                <span className="text-3xl font-semibold leading-none">
                  {billing === "monthly"
                    ? plan.price
                    : plan.annual.split(" ")[0]}
                </span>
                <span className="text-xl text-gray-400 font-semibold mb-2">
                  {billing === "monthly" ? "/month" : "/year"}
                </span>
              </div>
            </div>
            {openModule === idx && (
              <div className="mt-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-medium text-gray-800 font-medium"
                    >
                      <CircleCheck className="text-brand w-7 h-7 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Addons Section */}
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <Puzzle className="text-brand w-7 h-7 mr-3" />
          <h3 className="font-semibold text-gray-800">Select your addons</h3>
        </div>
        {pricingData.Addons.map((plan, idx) => (
          <div
            key={idx}
            className="rounded-2xl shadow p-10 mb-10 border border-border flex flex-col"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <p className="text-2xl font-semibold text-gray-800 mb-0">
                    {plan.title}
                  </p>
                  {plan.comingSoon && (
                    <span className="text-xs bg-brand px-2 py-1 rounded-full w-fit">
                      Coming Soon
                    </span>
                  )}
                </div>
                <p className="text-lg text-gray-700 mb-4">{plan.description}</p>
              </div>
              <div className="flex flex-col items-end min-w-[200px] ml-6">
                <button
                  className="mb-4"
                  onClick={() => setOpenAddon(openAddon === idx ? null : idx)}
                  aria-expanded={openAddon === idx}
                >
                  <ChevronDown
                    className={`w-7 h-7 transition-transform ${openAddon === idx ? "rotate-180" : ""}`}
                  />
                </button>
                <span className="text-3xl font-semibold leading-none">
                  {billing === "monthly"
                    ? plan.price
                    : plan.annual.split(" ")[0]}
                </span>
                <span className="text-xl text-gray-400 font-semibold mb-2">
                  {billing === "monthly" ? "/month" : "/year"}
                </span>
              </div>
            </div>
            {openAddon === idx && (
              <div className="mt-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-medium text-gray-800 font-medium"
                    >
                      <CircleCheck className="text-brand w-7 h-7 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
