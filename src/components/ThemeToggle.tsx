import { useEffect, useState } from "react";
import { Computer, Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | "system"
      | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    const getSystemPreference = () => (prefersDark.matches ? "dark" : "light");

    const applyTheme = (themeToApply: "light" | "dark") => {
      const html = document.documentElement;
      html.classList.toggle("dark", themeToApply === "dark");
      window.dispatchEvent(new Event("themeChange"));
    };

    const initialTheme =
      storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : "system";

    setTheme(initialTheme);
    applyTheme(
      initialTheme === "system" ? getSystemPreference() : initialTheme,
    );

    const listener = () => {
      if (theme === "system") {
        applyTheme(getSystemPreference());
      }
    };

    prefersDark.addEventListener("change", listener);
    return () => prefersDark.removeEventListener("change", listener);
  }, [theme]);

  const setAndApplyTheme = (newTheme: "light" | "dark" | "system") => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const html = document.documentElement;
    const actualTheme =
      newTheme === "system" ? (prefersDark ? "dark" : "light") : newTheme;
    html.classList.toggle("dark", actualTheme === "dark");
    window.dispatchEvent(new Event("themeChange"));
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setAndApplyTheme("system")}
        aria-label="Toggle System Mode"
        className={`w-9 h-9 cursor-pointer flex items-center justify-center rounded-full ${
          theme === "system"
            ? "toggle-bg"
            : "hover:!text-brand-300 !transition-colors !duration-300"
        }`}
      >
        <Computer size={18} />
      </button>
      <button
        onClick={() => setAndApplyTheme("light")}
        aria-label="Toggle Light Mode"
        className={`w-9 h-9 cursor-pointer flex items-center justify-center rounded-full ${
          theme === "light"
            ? "toggle-bg"
            : "hover:!text-brand-300 !transition-colors !duration-300"
        }`}
      >
        <Sun size={18} />
      </button>
      <button
        onClick={() => setAndApplyTheme("dark")}
        aria-label="Toggle Dark Mode"
        className={`w-9 h-9 cursor-pointer flex items-center justify-center rounded-full ${
          theme === "dark"
            ? "toggle-bg"
            : "hover:!text-brand-300 !transition-colors !duration-300"
        }`}
      >
        <Moon size={18} />
      </button>
    </div>
  );
}
