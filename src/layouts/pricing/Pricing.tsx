import { useState } from "react";
import { ChevronRight, CircleCheck, ShieldCheck, Puzzle } from "lucide-react";

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

const tabs = [
  { title: "Modules", icon: <ShieldCheck size={32} /> },
  { title: "Addons", icon: <Puzzle size={32} /> },
] as const;

type TabType = (typeof tabs)[number]["title"];

const pricingData: PricingData = {
  Modules: [
    {
      title: "Base Module",
      description:
        "Essential foundation for managing your organization's compliance program. Start building your security infrastructure.",
      price: "$0",
      annual: "Included",
      features: ["Organization Creation", "Group Management"],
    },
    {
      title: "Compliance Module",
      description:
        "Streamline your certification process with automated workflows and evidence collection. Perfect for teams pursuing SOC 2, ISO 27001, and other frameworks.",
      price: "$450",
      annual: "$5,000 billed annually",
      features: [
        "Unlimited Frameworks",
        "Program Creation",
        "Evidence Upload",
        "User and Group Management",
        "Auditor Access Management",
        "Policy and Procedures",
      ],
    },
    {
      title: "Trust Center",
      description:
        "Build customer trust with a professional security portal. Share compliance documentation securely with stakeholders.",
      price: "$300",
      annual: "$3,000 billed annually",
      features: [
        "Unlimited Documents",
        "Subprocessor Management",
        "Clickwrap NDA",
        "Private and Public Access",
        "Custom Domain",
      ],
      comingSoon: true,
    },
    {
      title: "Vendor Management",
      description:
        "Streamline third-party risk assessment and vendor monitoring. Ensure your supply chain meets security requirements.",
      price: "$200",
      annual: "$2,000 billed annually",
      features: [
        "Onboarding Process Flows",
        "Criticality Categories",
        "Monitoring Cadences",
        "Questionnaires",
      ],
      comingSoon: true,
    },
    {
      title: "Vulnerability Management",
      description:
        "Identify and track security vulnerabilities across your systems. Stay ahead of potential threats with continuous monitoring.",
      price: "$100",
      annual: "$1,000 billed annually",
      features: [
        "Automated Identification",
        "Prioritization on Criticality",
        "Reporting Capabilities",
      ],
      comingSoon: true,
    },
  ],
  Addons: [
    {
      title: "Policy & Procedure Management",
      description:
        "Create and maintain your security policies with version control. Keep your documentation audit-ready.",
      price: "$10",
      annual: "$100 billed annually",
      features: [
        "Policy and Procedure Documentation",
        "Control Association",
        "Approval Management",
        "Auditor Access Management",
      ],
    },
    {
      title: "Risk Management",
      description:
        "Comprehensive risk assessment and monitoring solution. Make data-driven decisions about your security posture.",
      price: "$10",
      annual: "$100 billed annually",
      features: [
        "Risk Identification",
        "Risk Scoring",
        "Risk Management",
        "Review Cadence",
      ],
    },
    {
      title: "Scanning",
      description:
        "Proactive security scanning for domains and infrastructure. Detect vulnerabilities before they become threats.",
      price: "$100",
      annual: "$1,000 billed annually",
      features: [
        "System and Boundary Creation",
        "Scheduled Scanning",
        "Report Generation",
        "Direct import to Vulnerability Management",
      ],
      comingSoon: true,
    },
    {
      title: "Additional Evidence Storage (100GB)",
      description:
        "Expand your secure storage capacity for compliance evidence. Keep your documentation organized and accessible.",
      price: "$10",
      annual: "Billed monthly only",
      features: ["Simple Storage for Additional Evidence"],
    },
  ],
};

export default function PricingTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("Modules");

  return (
    <div>
      {/* Tab Buttons */}
      <div className="bg-card">
        <div className="grid grid-cols-2 gap-4 max-w-[1300px] mx-auto bg-card">
          {tabs.map((tab) => (
            <button
              key={tab.title}
              className={`px-4 py-2 flex flex-col items-center${
                activeTab === tab.title
                  ? " bg-color-secondary border-t-[5px] border-green rounded-t-xl"
                  : ""
              }`}
              onClick={() => setActiveTab(tab.title)}
            >
              {tab.icon}
              <p className="text-sm font-semibold font-normal leading-[100%] mt-2">
                {tab.title}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="bg-color-secondary">
        <div className="grid md:grid-cols-3 gap-4 max-w-[1300px] pt-15 pb-15 justify-center mx-auto bg-color-secondary">
          {pricingData[activeTab]?.length > 0 ? (
            pricingData[activeTab].map((plan, index) => (
              <div key={index} className="p-4 rounded-lg text-left bg-card">
                <div className="h-[200px] border-b border-border mb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-xl font-medium tracking-[-0.6px]">
                      {plan.title}
                    </p>
                    {plan.comingSoon && (
                      <span className="px-2 py-1 bg-brand-100 dark:bg-brand-500 text-brand-500 dark:text-white text-xs font-medium rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <p className="mb-4 text-sm leading-6 font-normal">
                    {plan.description}
                  </p>
                </div>
                <div className="flex items-center w-full max-w-md mx-auto">
                  <p className="text-5xl font-normal tracking-[-1.2px]">
                    {plan.price}
                  </p>

                  <div className="pl-4 flex flex-col justify-center leading-snug">
                    <p className="text-xs font-normal opacity-70">
                      /month (USD)
                    </p>
                    <p className="text-xs font-normal mt-1 opacity-70">
                      {plan.annual}
                    </p>
                  </div>
                </div>

                <ul className="list-disc list-inside text-sm mt-3">
                  {plan.features?.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 mb-3">
                      <CircleCheck className="text-color-primary w-[20px] h-[20px] mt-1 shrink-0" />
                      <p className="font-normal text-base leading-6">
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p>No pricing information available for this tab.</p>
          )}
        </div>
      </div>
    </div>
  );
}
