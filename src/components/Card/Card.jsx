import React from "react";
import styles from "./Card.module.css";

const film = {
  rank: 1,
  title: "The Shawshank Redemption",
  description:
    "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  image:
    "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
  big_image:
    "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@",
  genre: ["Drama"],
  thumbnail:
    "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
  rating: "9.3",
  id: "top1",
  year: 1994,
  imdbid: "tt0111161",
  imdb_link: "https://www.imdb.com/title/tt0111161",
};

export const Card = ({
  title = "No Title",
  description,
  url,
  year,
  rating,
}) => {
  return (
    <div className={`${styles.card} ${year > 2000 && styles.green}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.poster}>
        <img className={styles.image} src={url} alt={`${title} Poster`} />
      </div>
      <p>Year: {year}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};
