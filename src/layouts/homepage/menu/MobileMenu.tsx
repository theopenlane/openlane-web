import { useState } from "react";
import {
  Menu,
  ChevronRight,
  X,
  BookText,
  ChevronLeft,
  Bot,
  Combine,
  TriangleAlert,
  FolderSearch,
  ScrollText,
  CircleFadingArrowUp,
  Handshake,
} from "lucide-react";
import GithubIcon from "../../../components/icons/GithubIcon.tsx";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<
    "Product" | "Resources" | "Company" | undefined
  >(undefined);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="block lg:hidden text-color cursor-pointer"
        aria-label="Open menu"
      >
        <Menu size={23} />
      </button>

      {isOpen && (
        <div
          className="fixed top-0 left-0 right-0 z-50 bg-card pl-4 pr-4 pb-4 pt-3 mr-3 lg:hidden "
          style={{
            boxShadow:
              "0px 10px 15px -3px rgba(0,0,0,0.10), 0px 4px 6px -4px rgba(0,0,0,0.10)",
          }}
        >
          <div className="flex justify-between items-center mb-6">
            {!activeNav && (
              <div className="flex items-center space-x-2">
                <img
                  src="/logo/openlane-logo-dark.svg"
                  alt="Openlane Logo"
                  className="h-6 w-auto pr-3 dark:hidden"
                />
                <img
                  src="/logo/openlane-logo-light.svg"
                  alt="Openlane Logo"
                  className="h-6 w-auto pr-3 hidden dark:block"
                />
              </div>
            )}

            {activeNav && (
              <div
                className="flex items-center space-x-2 text-color text-normal cursor-pointer"
                onClick={() => setActiveNav(undefined)}
              >
                <ChevronLeft size={20} className="mr-2" /> {activeNav}
              </div>
            )}

            <div className="flex items-center space-x-4">
              <a
                href="/get-started"
                className="text-sm font-semibold px-4 py-2 rounded-full bg-primary text-invert-primary inline-flex items-center gap-2 whitespace-nowrap"
              >
                Get Started{" "}
                <ChevronRight size={18} className="hidden lg:flex" />
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setActiveNav(undefined);
                }}
                aria-label="Close menu"
                className="cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {!activeNav && (
            <nav className="space-y-4 text-base">
              <p
                className="flex justify-between items-center text-color border-b border-color pb-2 cursor-pointer"
                onClick={() => setActiveNav("Product")}
              >
                Product <ChevronRight size={18} />
              </p>
              <a
                href="/pricing"
                className="flex justify-between items-center text-color border-b border-color pb-2 cursor-pointer"
              >
                Pricing
              </a>
              <a
                href="/blog"
                className="flex justify-between items-center text-color border-b border-color pb-2 cursor-pointer"
              >
                Blog
              </a>
              <p
                className="flex justify-between items-center text-color border-b border-color pb-2 cursor-pointer"
                onClick={() => setActiveNav("Resources")}
              >
                Resources <ChevronRight size={18} />
              </p>
              <p
                className="flex justify-between items-center text-color border-b border-color pb-2 cursor-pointer"
                onClick={() => setActiveNav("Company")}
              >
                Company <ChevronRight size={18} />
              </p>
            </nav>
          )}

          {activeNav === "Product" && (
            <nav className="space-y-4 text-base">
              <a href="/product/compliance" class="block">
                <div className="flex items-center space-x-2 cursor-pointer text-color pb-2">
                  <div className=" flex justify-center asset-bg p-1 rounded-lg mr-3">
                    <Bot size={26} className="text-color" strokeWidth={1} />
                  </div>
                  <p>Compliance Automation</p>
                </div>
              </a>

              <div className="flex items-center space-x-2 cursor-pointer text-color pb-2">
                <div className=" flex justify-center asset-bg p-1 rounded-lg mr-3">
                  <Combine size={26} className="text-color" strokeWidth={1} />
                </div>
                <p>Compliance Management</p>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer text-color pb-2">
                <div className=" flex justify-center asset-bg p-1 rounded-lg mr-3">
                  <TriangleAlert
                    size={26}
                    className="text-color"
                    strokeWidth={1}
                  />
                </div>
                <p>Risk Assessment</p>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer text-color pb-2">
                <div className=" flex justify-center asset-bg p-1 rounded-lg mr-3">
                  <FolderSearch
                    size={26}
                    className="text-color"
                    strokeWidth={1}
                  />
                </div>
                <p>Audit Management</p>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer text-color pb-2">
                <div className=" flex justify-center asset-bg p-1 rounded-lg mr-3">
                  <ScrollText
                    size={26}
                    className="text-color"
                    strokeWidth={1}
                  />
                </div>
                <p>Policy and Procedure Management</p>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer text-color pb-2">
                <div className=" flex justify-center asset-bg p-1 rounded-lg mr-3">
                  <CircleFadingArrowUp
                    size={26}
                    className="text-color"
                    strokeWidth={1}
                  />
                </div>
                <p>Scalability and Flexibility</p>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer text-color pb-2">
                <div className=" flex justify-center asset-bg p-1 rounded-lg mr-3">
                  <Handshake size={26} className="text-color" strokeWidth={1} />
                </div>
                <p>Collaboration and Communication</p>
              </div>
              <div className="col-span-full border border-color rounded-lg p-2 flex justify-between items-center text-sm w-full">
                <p className="text-sm font-normal text-color">
                  Got feedback? Let us hear it
                </p>
                <ChevronRight className="color-icon-primary" size={16} />
              </div>
            </nav>
          )}

          {activeNav === "Company" && (
            <nav className="space-y-4 text-base">
              <a href="/about" className="block">
                <div className="flex items-center space-x-2 cursor-pointer text-color pb-2">
                  <p>About</p>
                </div>
              </a>
              <a href="/contact" className="block">
                <div className="flex items-center space-x-2 cursor-pointer text-color pb-2">
                  <p>Contact</p>
                </div>
              </a>
            </nav>
          )}

          {activeNav === "Resources" && (
            <nav className="space-y-4 text-base">
              <div className="flex items-center space-x-2 cursor-pointer text-color pb-2">
                <p>Documentation</p>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer text-color pb-2">
                <p>News, Insight & Resources</p>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer text-color pb-2">
                <p>Compliance Standards</p>
              </div>
            </nav>
          )}

          <div className="flex gap-6 mt-6 items-center text-center justify-center text-sm">
            <a href="/docs" className="flex items-center gap-2">
              <BookText size={16} /> Docs
            </a>
            <a href="/github" className="flex items-center gap-2">
              <GithubIcon /> GitHub
            </a>
          </div>
        </div>
      )}
    </>
  );
}
