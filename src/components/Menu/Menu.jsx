import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";
import { useContext } from "react";
import { TranslationContext } from "../../context/translation/translationContext";

export const Menu = () => {
  const translation = useContext(TranslationContext);
  return (
    <nav>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        <li>
          <NavLink to="/">{translation.menu.main}</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">{translation.menu.about}</NavLink>
        </li>
        <li>
          <NavLink to="/movie-list">{translation.menu.movieList}</NavLink>
        </li>
        <li>
          <NavLink to="/review">{translation.menu.review}</NavLink>
        </li>
      </ul>
    </nav>
  );
};
