import { createContext, useContext, useState, ReactNode } from "react";
import { darkTheme, lightTheme } from "./theme";

type Theme = typeof lightTheme;

type ThemeContextType = {
  theme: Theme;
  dark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    setDark((prev) => !prev);
  }

  const theme = dark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve ser usado dentro de ThemeProvider");
  }
  return context;
}
