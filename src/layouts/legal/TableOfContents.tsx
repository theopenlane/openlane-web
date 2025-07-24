import React from "react";

interface Section {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  sections: Section[];
  activeSection?: string;
  onSectionClick?: (sectionId: string) => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({
  sections,
  activeSection,
  onSectionClick,
}) => {
  return (
    <aside className="p-4 md:w-[250px] shrink-0">
      <nav className="space-y-1 sticky top-2 pt-6">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => {
              e.preventDefault();
              onSectionClick?.(section.id);
              // Smooth scroll to the section
              document
                .getElementById(section.id)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`block w-full text-left px-4 py-2.5 rounded-md transition-all duration-200 leading-[100%] font-normal cursor-pointer hover:bg-slate-50 ${
              activeSection === section.id
                ? "active-tab-bg font-medium"
                : "hover:bg-slate-50"
            }`}
          >
            {section.label}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default TableOfContents;
