import { useState, useEffect } from "react";

interface Section {
  id: string;
  label: string;
}

export const useActiveSection = (
  sections: Section[],
  defaultSection: string,
) => {
  const [activeSection, setActiveSection] = useState<string>(defaultSection);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Filter for visible sections
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length > 0) {
          // Sort by visibility ratio and Y position
          const mostVisible = visibleEntries.reduce((prev, current) => {
            // If they have the same intersection ratio, prefer the one closer to the top
            if (
              Math.abs(current.intersectionRatio - prev.intersectionRatio) < 0.1
            ) {
              return current.boundingClientRect.y < prev.boundingClientRect.y
                ? current
                : prev;
            }
            // Otherwise prefer the one with higher intersection ratio
            return current.intersectionRatio > prev.intersectionRatio
              ? current
              : prev;
          });

          setActiveSection(mostVisible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return activeSection;
};
