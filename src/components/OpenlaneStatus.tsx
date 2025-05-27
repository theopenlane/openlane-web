import { useEffect, useState } from "react";

const OpenlaneStatus = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      const theme = localStorage.getItem("theme");
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      const initialDark = theme === "dark" || (!theme && systemPrefersDark);
      setIsDark(initialDark);
    };

    updateTheme();

    window.addEventListener("storage", updateTheme);
    window.addEventListener("themeChange", updateTheme);

    return () => {
      window.removeEventListener("storage", updateTheme);
      window.removeEventListener("themeChange", updateTheme);
    };
  }, []);

  return (
    <iframe
      src={`https://status.theopenlane.io/badge?theme=${isDark ? "dark" : "light"}`}
      width="250"
      height="30"
      frameBorder="0"
      scrolling="no"
    ></iframe>
  );
};

export default OpenlaneStatus;
