import { useState } from "react";

interface AccordionItem {
  title: string;
  text: string;
  image?: string;
  subImages?: string[];
  comingSoon?: boolean;
}

const accordionItems: AccordionItem[] = [
  {
    title: "Create Policies",
    text: "Craft your policies effortlessly using our intuitive rich-text editor, complete with support for tables, lists, images, and more—ensuring clarity and readability.",
    image: "/create-policy.png",
  },
  {
    title: "Import Documents",
    text: "Seamlessly import existing documents directly into Openlane, or automatically keep your policies synchronized through our robust API, integrated with the tools your team already uses.",
    image: "/import-policy.png",
  },
  {
    title: "Link to Controls",
    text: "Easily link policies to the specific controls they support, enabling clear visibility into your organization’s compliance relationships and coverage.",
    image: "/related-control.png",
  },
  // {
  //   title: "Automated reminders",
  //   text: "Stay proactive with built-in automated reminders, ensuring your policies remain current. Enhance your workflow with notifications sent directly through integrations with popular chat tools like Slack.",
  // },
  {
    title: "Approval Workflow",
    text: "Streamline policy governance with an approval workflow. Propose, review, and validate changes directly in Openlane—ensuring updates are thoughtfully vetted before they become live.",
    image: "/approve-workflow-2.png",
    // subImages: [
    //   "/approve-workflow-1.png",
    //   "/approve-workflow-3.png",
    //   "/approve-workflow-4.png",
    // ],
    comingSoon: true,
  },
  {
    title: "Versioning",
    text: "Automatically track policy versions using semantic versioning (semver). Major revisions are clearly marked, while minor updates increment the patch version, maintaining precise control and historical accuracy for all your documents.",
    image: "/versioning.png",
    comingSoon: true,
  },
];

export default function PlaygroundSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="pt-20 bg-color-secondary">
      <div className="grid grid-cols-12">
        <div
          className="col-span-12 "
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-asset) 50%, var(--color-asset-line) 50%)",
          }}
        >
          <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-1">
            <div className="lg:col-span-4 flex flex-col gap-4 bg-asset p-4 pt-15 pb-15">
              <p className="text-3xl font-normal tracking-[-0.75px] mb-4">
                Managing polices has never been this easy; these advancements
                streamline the process, allowing for more efficient
                decision-making and implementation
              </p>

              {accordionItems.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left cursor-pointer text-sm font-semibold px-4 py-2 rounded-md inline-flex items-center gap-2 hover:bg-primary !transition-colors !duration-300 text-color ${
                      activeIndex === index ? "bg-primary" : "bg-secondary"
                    }`}
                  >
                    {item.comingSoon ? (
                      <div className="flex items-center gap-2">
                        <span>{item.title}</span>
                        <span
                          className={`px-2 py-1 bg-accent-300 var(--color-text-dark) text-xs font-medium rounded-full ${
                            activeIndex === index
                              ? "!text-text-dark dark:!text-white"
                              : ""
                          }`}
                        >
                          Coming Soon
                        </span>
                      </div>
                    ) : (
                      item.title
                    )}
                  </button>

                  {activeIndex === index && (
                    <p className="text-base mt-2 transition-opacity duration-300 ease-in-out pl-3 pr-3">
                      {item.text}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-asset-line lg:col-span-8 flex flex-col justify-center items-center p-4 pt-10">
              {accordionItems[activeIndex]?.image && (
                <>
                  <img
                    src={`/assets/policy-and-procedure/light${accordionItems[activeIndex].image}`}
                    alt={accordionItems[activeIndex].title}
                    className="w-auto max-h-[550px] object-contain transition-all duration-500 dark:hidden"
                  />
                  <img
                    src={`/assets/policy-and-procedure/dark${accordionItems[activeIndex].image}`}
                    alt={accordionItems[activeIndex].title}
                    className="w-auto max-h-[550px] object-contain transition-all duration-500 hidden dark:block"
                  />
                </>
              )}

              {accordionItems[activeIndex]?.subImages &&
                accordionItems[activeIndex].subImages.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                    {accordionItems[activeIndex]?.subImages.map(
                      (subImg, idx) => (
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
                      ),
                    )}
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
