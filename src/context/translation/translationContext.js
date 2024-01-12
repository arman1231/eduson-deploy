import React from "react";

export const TranslationContext = React.createContext();

export const tranlations = {
  en: {
    siteName: "MovieRating",
    menu: {
      main: "Main",
      about: "About us",
      movieList: "Movie List",
      review: "Review",
    },
  },
  ru: {
    siteName: "КиноРейтинг",
    menu: {
      main: "Главная",
      about: "О нас",
      movieList: "Список фильмов",
      review: "Отзывы",
    },
  },
};
