import { useState, useEffect, useRef } from "react";

interface Section {
  id: string;
  label: string;
}

export const useActiveSection = (
  sections: Section[],
  defaultSection: string,
) => {
  const [activeSection, setActiveSection] = useState<string>(defaultSection);
  const isScrollingRef = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  const handleClick = (sectionId: string) => {
    setActiveSection(sectionId);
    isScrollingRef.current = true;

    // Clear any existing timeout
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    // Reset the scrolling flag after animation completes
    scrollTimeout.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000); // Typical scroll animation duration
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Don't update active section if we're programmatically scrolling
        if (isScrollingRef.current) return;

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

    return () => {
      observer.disconnect();
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [sections]);

  return { activeSection, handleClick };
};
