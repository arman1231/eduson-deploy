import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme/themeContext";

export const ThemeSwitcher = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <div
      onClick={changeTheme}
      style={{ fontSize: "30px", color: "purple", cursor: "pointer" }}
    >
      {theme === "dark" ? "☼" : "☽"}
    </div>
  );
};
