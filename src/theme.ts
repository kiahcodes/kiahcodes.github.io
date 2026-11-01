import { useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const KEY = "theme";
const listeners = new Set<() => void>();

const read = (): Theme => {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* storage unavailable */
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
};

export const getTheme = (): Theme =>
  document.documentElement.classList.contains("light") ? "light" : "dark";

export const setTheme = (theme: Theme) => {
  document.documentElement.classList.toggle("light", theme === "light");
  try {
    localStorage.setItem(KEY, theme);
  } catch {
    /* storage unavailable */
  }
  listeners.forEach((l) => l());
};

export const initTheme = () => {
  document.documentElement.classList.toggle("light", read() === "light");
};

export const useTheme = (): Theme =>
  useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    getTheme,
    () => "dark",
  );

// Skill colors are authored for the dark page; these are their light-page counterparts.
const LIGHT_TONES: Record<string, string> = {
  "#00D4FF": "#213885",
  "#8B5CF6": "#893172",
  "#00FF94": "#3050B8",
  "#F97316": "#9A5E2E",
  "#EF4444": "#5F3475",
  "#10B981": "#2C47A8",
  "#3B82F6": "#5F3475",
  "#378ADD": "#213885",
  "#1D9E75": "#3050B8",
  "#EF9F27": "#9A5E2E",
  "#7F77DD": "#5F3475",
  "#D85A30": "#893172",
  "#639922": "#2C47A8",
  "#185FA5": "#3050B8",
  "#BA7517": "#9A5E2E",
  "#3B6D11": "#2C47A8",
};
export const tone = (hex: string, theme: Theme) =>
  theme === "light" ? (LIGHT_TONES[hex] ?? hex) : hex;
