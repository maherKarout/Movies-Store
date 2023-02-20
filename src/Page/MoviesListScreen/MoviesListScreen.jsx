import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import StarIcon from "@mui/icons-material/Star";
import { categoriesContext } from "../../App";
import "./MoviesListScreen.css";
import { Link } from "react-router-dom";
import ListBoxMovies from "../../Compont/ListBoxMovies/ListBoxMovies";

function MoviesListScreen() {
  const urlCategories = useParams("categories");
  const [movies, setMovies] = useState([]);

  // CONTEXT API
  const { idCategories, setSelectedListItem } = useContext(categoriesContext);

  useEffect(() => {
    fetch("https://darsoft.b-cdn.net/movies.json")
      .then((repo) => repo.json())
      .then((data) => {
        setMovies(filterMovies(data.movies, idCategories));
      });
  }, []);

  return (
    <div className="movies-list-screen">
      <h3 className="title-movies">{urlCategories.categories}</h3>
      {movies.length === 0 && (
        <Box className="no-categories">Coming Soon ...</Box>
      )}

      {movies.length !== 0 &&
        movies.map((movie, index) => {
          return <ListBoxMovies key={index} movie={movie} />;
        })}
    </div>
  );
}

export default MoviesListScreen;

function filterMovies(array = [], idCategories) {
  return array.filter((mov, index) => {
    return mov.category_id === idCategories;
  });
}

// function filterCategories(array = [], titleCategorie, setIdCategories) {
//   let id = 0;
//   array.forEach((cate, index) => {
//     if (
//       cate.title.trim().toLowerCase() === titleCategorie.trim().toLowerCase()
//     ) {
//       id = cate.id;
//     }
//   });
//   console.log("iddddddddddddddddddddddddddd", id);
//   setIdCategories(id);
//   return id;
// }
