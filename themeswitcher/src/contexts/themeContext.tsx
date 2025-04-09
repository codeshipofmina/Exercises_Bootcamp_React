import { createContext } from "react";

type ThemeContext = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};
export const themeContext = createContext<ThemeContext>(null!);
