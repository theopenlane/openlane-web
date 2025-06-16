import { useState } from "react";
import {
  ChevronRight,
  CircleCheck,
  GlobeLock,
  Handshake,
  ShieldCheck,
} from "lucide-react";

const tabs = [
  { title: "Compliance", icon: <ShieldCheck size={32} /> },
  { title: "Security", icon: <GlobeLock size={32} /> },
  { title: "Trust Center", icon: <Handshake size={32} /> },
];

const pricingData = {
  Compliance: [
    {
      title: "Trust Foundation Bundle",
      description:
        "Galão rich extra sit filter barista body cultivar milk mocha chireyo whipped blue that. Extra whipped filter dripper viennese as cultivar strong arabica that pot beans est whisp. Caramelization tirado whipped extra cultivar body id origin strong cream pot.",
      price: "$100",
      annual: "$1,000 billed annually",
    },
    {
      title: "Essential Trust Pack",
      description:
        "Pumpkin Irish sit at body bar seasonal dark brewed filter variety. Seasonal trifecta frappuccino robust filter ut skinny and press up sugar flavour cup cultivar robust.",
      price: "$100",
      annual: "$1,000 billed annually",
    },
    {
      title: "Compliance Ready Bundle",
      description:
        "Redeye depolo cortado cup cream aromatic robust black. Black and caffeine cinnamon depolo spoon est plunger.",
      price: "$100",
      annual: "$1,000 billed annually",
    },
  ],
  Security: [
    {
      title: "Trust Foundation Bundle",
      description:
        "Galão rich extra sit filter barista body cultivar milk mocha chireyo whipped blue that. Extra whipped filter dripper viennese as cultivar strong arabica that pot beans est whisp. Caramelization tirado whipped extra cultivar body id origin strong cream pot.",
      price: "$100",
      annual: "$1,000 billed annually",
    },
    {
      title: "Essential Trust Pack",
      description:
        "Pumpkin Irish sit at body bar seasonal dark brewed filter variety. Seasonal trifecta frappuccino robust filter ut skinny and press up sugar flavour cup cultivar robust.",
      price: "$100",
      annual: "$1,000 billed annually",
    },
    {
      title: "Compliance Ready Bundle",
      description:
        "Redeye depolo cortado cup cream aromatic robust black. Black and caffeine cinnamon depolo spoon est plunger.",
      price: "$100",
      annual: "$1,000 billed annually",
    },
  ],
  "Trust Center": [
    {
      title: "Trust Foundation Bundle",
      description:
        "Galão rich extra sit filter barista body cultivar milk mocha chireyo whipped blue that. Extra whipped filter dripper viennese as cultivar strong arabica that pot beans est whisp. Caramelization tirado whipped extra cultivar body id origin strong cream pot.",
      price: "$100",
      annual: "$1,000 billed annually",
    },
    {
      title: "Essential Trust Pack",
      description:
        "Pumpkin Irish sit at body bar seasonal dark brewed filter variety. Seasonal trifecta frappuccino robust filter ut skinny and press up sugar flavour cup cultivar robust.",
      price: "$100",
      annual: "$1,000 billed annually",
    },
    {
      title: "Compliance Ready Bundle",
      description:
        "Redeye depolo cortado cup cream aromatic robust black. Black and caffeine cinnamon depolo spoon est plunger.",
      price: "$100",
      annual: "$1,000 billed annually",
    },
  ],
};

export default function PricingTabs() {
  const [activeTab, setActiveTab] = useState("Compliance");

  return (
    <div>
      <div className="bg-card">
        <div className="grid grid-cols-3 gap-4 max-w-[1300px] mx-auto bg-card">
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

      <div className="bg-slate-50">
        <div className="grid md:grid-cols-3 gap-4 bg-slate max-w-[1300px] flex pt-15 pb-15 justify-center mx-auto bg-slate-50">
          {pricingData[activeTab].length > 0 ? (
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

                <a
                  href="https://getopenlane.io/"
                  target="_blank"
                  className="text-sm font-semibold px-4 py-2 rounded-full bg-primary text-invert-primary inline-flex items-center gap-2 whitespace-nowrap mt-4 mb-8"
                >
                  Get Started{" "}
                  <ChevronRight size={18} className="hidden lg:flex" />
                </a>
                <ul className="list-disc list-inside text-sm">
                  <li className="flex items-start gap-2 mb-3">
                    <CircleCheck className="text-color-primary w-[20px] h-[20px] mt-1 shrink-0" />
                    <p className="font-normal text-base leading-6">
                      Policy and Procedure module
                    </p>
                  </li>
                  <li className="flex items-start gap-2 mb-3">
                    <CircleCheck className="text-color-primary w-[20px] h-[20px] mt-1 shrink-0" />
                    <p className="font-normal text-base leading-6">
                      Vendor Management
                    </p>
                  </li>
                  <li className="flex items-start gap-2 mb-3">
                    <CircleCheck className="text-color-primary w-[20px] h-[20px] mt-1 shrink-0" />
                    <p className="font-normal text-base leading-6">
                      Asset Management
                    </p>
                  </li>
                  <li className="flex items-start gap-2 mb-3">
                    <CircleCheck className="text-color-primary w-[20px] h-[20px] mt-1 shrink-0" />
                    <p className="font-normal text-base leading-6">
                      Compliance Module
                    </p>
                  </li>
                  <li className="flex items-start gap-2 mb-3">
                    <CircleCheck className="text-color-primary w-[20px] h-[20px] mt-1 shrink-0" />
                    <p className="font-normal text-base leading-6">
                      Template Registry
                    </p>
                  </li>
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
