import { useState, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { CustomComponent } from "./components/CustomComponent/CustomComponent";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { MovieCard } from "./components/MovieCard/MovieCard";
import { MovieList } from "./components/MovieList/MovieList";
import { top100movies } from "./constants/top100movies";
import { ThemeContext, ThemeProvider } from "./context/theme/themeContext";
import {
  tranlations,
  TranslationContext,
} from "./context/translation/translationContext";

function App() {
  const [lang, setLang] = useState("en");
  const { theme } = useContext(ThemeContext);
  function changeLang() {
    setLang((prevLang) => (prevLang === "en" ? "ru" : "en"));
  }

  const isLoggedIn = true;
  return (
    <TranslationContext.Provider value={tranlations[lang]}>
      <div className={`wrapper ${theme}`}>
        <Header changeLang={changeLang} lang={lang} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/movie-list/:id"
            element={<MovieCard movieList={top100movies} />}
          />
          <Route path="/about-us" element={<AboutUs />}>
            <Route path="contacts" element={<div>Contacts!</div>} />
            <Route path="about" element={<div>About</div>} />
          </Route>
          <Route
            path="/movie-list"
            element={
              isLoggedIn ? (
                <MovieList movieList={top100movies} />
              ) : (
                <Navigate to="/custom" />
              )
            }
          />
          <Route path="/custom" element={<CustomComponent />} />
          <Route path="/review" element={<>Отзывы на фильмы</>} />
          <Route path="*" element={<div>Страница не существует!</div>} />
        </Routes>

        <Footer />
      </div>
    </TranslationContext.Provider>
  );
}

export default App;
