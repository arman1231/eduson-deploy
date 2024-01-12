import React from "react";
import { top100movies } from "../../constants/top100movies";
import { Card } from "../Card/Card";
import styles from "./Main.module.css";
export const Main = () => {
  return (
    <main className={styles.main}>
      {top100movies.map((movie) => (
        <Card
          key={movie.imdbid}
          title={movie.title}
          description={movie.description}
          url={movie.image}
          year={movie.year}
          rating={movie.rating}
        />
      ))}
    </main>
  );
};
