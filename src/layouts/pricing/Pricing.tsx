import { useState } from "react";
import { ChevronRight, CircleCheck, ShieldCheck, Puzzle } from "lucide-react";

const tabs = [
  { title: "Modules", icon: <ShieldCheck size={32} /> },
  { title: "Addons", icon: <Puzzle size={32} /> },
];

const pricingData = {
  Modules: [
    {
      title: "Base Module",
      description: "Core system access",
      price: "$0",
      annual: "Included",
      features: [
        "Organization Creation",
        "Group Management",
      ],
    },
    {
      title: "Compliance Module",
      description: "Core compliance automation",
      price: "$450",
      annual: "$5,000 billed annually",
      features: [
        "Unlimited Frameworks",
        "Program Creation",
        "Evidence Upload",
        "User and Group Management",
        "Auditor Access Management",
        "Policy and Procedure",
      ],
    },
    {
      title: "Trust Center",
      description: "Public security portal",
      price: "$300",
      annual: "$3,000 billed annually",
      features: [
        "Unlimited Documents",
        "Access Group Management",
        "Clickwrap NDA",
      ],
    },
    {
      title: "Vendor Management",
      description: "Vendor Risk Management",
      price: "$200",
      annual: "$2,000 billed annually",
      features: [
        "Onboarding Process Flows",
        "Criticality Categories",
        "Monitoring Cadences",
        "Questionnaires",
      ],
    },
    {
      title: "Vulnerability Management",
      description: "Vulnerability management",
      price: "$100",
      annual: "$1,000 billed annually",
      features: [
        "Import Systems",
        "Identification",
        "Prioritization",
        "Reporting",
      ],
    },
  ],
  Addons: [
    {
      title: "Policy & Procedure Management",
      description: "Policy and Procedure Management",
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
      description: "Risk Management",
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
      description: "Domain and Vulnerability Scanning",
      price: "$100",
      annual: "$1,000 billed annually",
      features: [
        "System and Boundary Creation",
        "Scheduled Scanning",
        "Report Generation",
        "Direct import to Vulnerability Management",
      ],
    },
    {
      title: "Additional Evidence Storage (100GB)",
      description: "Additional evidence storage for compliance",
      price: "$10",
      annual: "Billed monthly only",
      features: [
        "Simple Storage for Additional Evidence",
      ],
    },
  ],
};

export default function PricingTabs() {
  const [activeTab, setActiveTab] = useState("Modules");

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
                  ? " bg-slate-50 border-t-[5px] border-green rounded-t-xl"
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
      <div className="bg-slate-50">
        <div className="grid md:grid-cols-3 gap-4 max-w-[1300px] pt-15 pb-15 justify-center mx-auto bg-slate-50">
          {pricingData[activeTab]?.length > 0 ? (
            pricingData[activeTab].map((plan, index) => (
              <div key={index} className="p-4 rounded-lg text-left bg-card">
                <div className="h-[200px] border-b border-border mb-8">
                  <p className="text-xl font-medium tracking-[-0.6px] mb-2">
                    {plan.title}
                  </p>
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

                {/*<a
                  href="https://getopenlane.io/"
                  target="_blank"
                  className="text-sm font-semibold px-4 py-2 rounded-full bg-primary text-invert-primary inline-flex items-center gap-2 whitespace-nowrap mt-4 mb-8"
                >
                  Get Started{" "}
                  <ChevronRight size={18} className="hidden lg:flex" />
                </a>*/}
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
