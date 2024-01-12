import React from "react";
import { useContext } from "react";
import { TranslationContext } from "../../context/translation/translationContext";
import { CustomComponent } from "../CustomComponent/CustomComponent";
import { Logo } from "../Logo/Logo";
import { Menu } from "../Menu/Menu";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import styles from "./Header.module.css";

export const Header = ({ changeLang, lang }) => {
  const translation = useContext(TranslationContext);
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div>
          <button onClick={changeLang}>{lang}</button>
          <ThemeSwitcher />
        </div>
        <Logo />
        <h1 className={styles.title}>{translation.siteName}</h1>
        <img src="/user-icon.png" alt="User Icon" />
      </div>
      <Menu />
      {/* <CustomComponent /> */}
    </header>
  );
};
