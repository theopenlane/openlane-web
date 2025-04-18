import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initialDark = theme === "dark" || (!theme && systemPrefersDark);
    setIsDark(initialDark);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newDark = !isDark;
    setIsDark(newDark);

    if (newDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className="w-9 h-9 flex items-center justify-center rounded-md border hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
