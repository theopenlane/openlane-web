import { useEffect, useState } from "react";

const OpenlaneStatus = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const getEffectiveTheme = () => {
      const theme = localStorage.getItem("theme");
      if (theme === "dark") return true;
      if (theme === "light") return false;
      return mediaQuery.matches;
    };

    const updateTheme = () => {
      setIsDark(getEffectiveTheme());
    };

    updateTheme();

    window.addEventListener("storage", updateTheme);
    window.addEventListener("themeChange", updateTheme);
    mediaQuery.addEventListener("change", updateTheme);

    return () => {
      window.removeEventListener("storage", updateTheme);
      window.removeEventListener("themeChange", updateTheme);
      mediaQuery.removeEventListener("change", updateTheme);
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
