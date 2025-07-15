import { useState } from "react";

interface AccordionItem {
  title: string;
  text: string;
  image?: string;
  subImages?: string[];
}

const accordionItems: AccordionItem[] = [
  {
    title: "Create policies & procedures",
    text: "Froth americano con grounds fair ut au cream caffeine rich...",
    image: "/create-policy.png",
  },
  {
    title: "Import existing policies",
    text: "Easily bring in your legacy documentation and convert it...",
    image: "/import-policy.png",
  },
  {
    title: "Association to related controls",
    text: "Easily bring in your legacy documentation and convert it...",
    image: "/related-control.png",
  },
  {
    title:
      "Automated reminders to review & renew to ensure continuous compliance",
    text: "Easily bring in your legacy documentation and convert it...",
  },
  {
    title: "Approval workflow",
    text: "Easily bring in your legacy documentation and convert it...",
    image: "/approve-workflow-2.png",
    subImages: [
      "/approve-workflow-1.png",
      "/approve-workflow-3.png",
      "/approve-workflow-4.png",
    ],
  },
  {
    title: "Versioning",
    text: "Automated approval routing with visibility and status...",
    image: "/versioning.png",
  },
];

export default function PlaygroundSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="pt-20 pb-20 bg-slate-50">
      <div className="grid grid-cols-12">
        <div
          className="col-span-12"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-asset) 50%, var(--color-asset-line) 50%)",
          }}
        >
          <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-1">
            <div className="lg:col-span-4 flex flex-col gap-4 bg-asset p-4 ">
              <p className="text-3xl font-normal tracking-[-0.75px] mb-4">
                Managing policy has never been this easy; these advancements
                streamline the process, allowing for more efficient
                decision-making and implementation
              </p>

              {accordionItems.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left cursor-pointer text-sm font-semibold px-4 py-2 rounded-md inline-flex items-center gap-2 hover:bg-brand-300 !transition-colors !duration-300 ${
                      activeIndex === index
                        ? "bg-primary text-invert-primary"
                        : "bg-card text-primary"
                    }`}
                  >
                    {item.title}
                  </button>

                  {activeIndex === index && (
                    <p className="text-base mt-2 transition-opacity duration-300 ease-in-out pl-3 pr-3">
                      {item.text}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-asset-line lg:col-span-8 flex flex-col justify-center items-center p-4 ">
              {accordionItems[activeIndex]?.image && (
                <>
                  <img
                    src={`/assets/policy-and-procedure/light${accordionItems[activeIndex].image}`}
                    alt={accordionItems[activeIndex].title}
                    className="w-auto object-contain transition-all duration-500 dark:hidden"
                  />
                  <img
                    src={`/assets/policy-and-procedure/dark${accordionItems[activeIndex].image}`}
                    alt={accordionItems[activeIndex].title}
                    className="w-auto object-contain transition-all duration-500 hidden dark:block"
                  />
                </>
              )}

              {accordionItems[activeIndex]?.subImages?.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                  {accordionItems[activeIndex].subImages.map((subImg, idx) => (
                    <div key={idx} className="w-full flex justify-center">
                      <img
                        src={`/assets/policy-and-procedure/dark${subImg}`}
                        alt={`${accordionItems[activeIndex].title} - ${idx + 1}`}
                        className="hidden dark:block h-auto max-h-[300px] w-full object-contain"
                      />
                      <img
                        src={`/assets/policy-and-procedure/light${subImg}`}
                        alt={`${accordionItems[activeIndex].title} - ${idx + 1}`}
                        className="dark:hidden h-auto max-h-[300px] w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
