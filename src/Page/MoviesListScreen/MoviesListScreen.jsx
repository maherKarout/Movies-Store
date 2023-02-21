import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { categoriesContext } from "../../App";
import "./MoviesListScreen.css";
import ListBoxMovies from "../../Compont/ListBoxMovies/ListBoxMovies";

function MoviesListScreen() {
  // URL PARAMS
  const urlCategories = useParams("categories");

  const [movies, setMovies] = useState([]);
  const idCategories = useParams("id");

  useEffect(() => {
    fetch("https://darsoft.b-cdn.net/movies.json")
      .then((repo) => repo.json())
      .then((data) => {
        setMovies(filterMovies(data.movies, idCategories.id));
      });
  }, []);

  return (
    <div className="movies-list-screen">
      <h3 className="title-movies">{urlCategories.categories}</h3>
      {/* SHOW LIST MOVIES  */}
      {movies.length === 0 ? (
        <Box className="no-categories">Coming Soon ...</Box>
      ) : (
        movies.length !== 0 &&
        movies.map((movie, index) => {
          return <ListBoxMovies key={index} movie={movie} />;
        })
      )}
    </div>
  );
}

export default MoviesListScreen;

function filterMovies(array = [], idCategories) {
  return array.filter((mov, index) => {
    return mov.category_id.toString() === idCategories.toString();
  });
}
