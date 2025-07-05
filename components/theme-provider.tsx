"use client";

import { useEffect } from "react";
import { useThemeStore } from "@/lib/store";

interface ThemeProviderProps {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "dark",
  enableSystem = true,
}: ThemeProviderProps) {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    // Set initial theme
    if (enableSystem && !theme) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setTheme(systemTheme as "light" | "dark");
    } else {
      setTheme(defaultTheme as "light" | "dark");
    }
  }, [enableSystem, defaultTheme, theme, setTheme]);

  useEffect(() => {
    document.documentElement.setAttribute(attribute, theme);
  }, [theme, attribute]);

  return <>{children}</>;
}
