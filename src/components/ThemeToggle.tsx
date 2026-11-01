import { Moon, Sun } from "lucide-react";
import { setTheme, useTheme } from "../theme";

const ThemeToggle = () => {
  const theme = useTheme();
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className="fixed top-4 left-4 z-[70] w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 border border-gray-600 text-ink hover:border-cyan-400 transition-colors"
    >
      {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

export default ThemeToggle;
