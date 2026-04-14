import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-muted hover:bg-accent transition-colors border border-border"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle dark mode"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 360 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </motion.div>
    </motion.button>
  );
}
