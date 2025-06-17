import { useEffect, useState } from "react";
import { Computer, Moon, Sun } from "lucide-react";

type TThemeToggleProps = {
  hideComputer?: boolean;
};

export default function ThemeToggle({ hideComputer }: TThemeToggleProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initialDark = theme === "dark" || (!theme && systemPrefersDark);

    setIsDark(initialDark);

    const html = document.documentElement;
    if (initialDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, []);

  const toggleTheme = (setDark: boolean) => {
    const html = document.documentElement;
    setIsDark(setDark);

    if (setDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    window.dispatchEvent(new Event("themeChange"));
  };

  return (
    <div className="flex items-center gap-2">
      {!hideComputer && (
        <button
          aria-label="Toggle Light Mode"
          className={`w-9 h-9 flex items-center justify-center rounded-full`}
        >
          <Computer size={18} />
        </button>
      )}
      <button
        onClick={() => toggleTheme(false)}
        aria-label="Toggle Light Mode"
        className={`w-9 h-9 cursor-pointer flex items-center justify-center rounded-full ${!isDark ? "toggle-bg" : "hover:!text-brand-300 !transition-colors !duration-300"}`}
      >
        <Sun size={18} />
      </button>
      <button
        onClick={() => toggleTheme(true)}
        aria-label="Toggle Dark Mode"
        className={`w-9 h-9 cursor-pointer flex items-center justify-center rounded-full ${isDark ? "toggle-bg" : "hover:!text-brand-300 !transition-colors !duration-300"}`}
      >
        <Moon size={18} />
      </button>
    </div>
  );
}
