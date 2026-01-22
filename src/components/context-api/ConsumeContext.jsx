// Header.jsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle Theme ({theme})
    </button>
  );
}
