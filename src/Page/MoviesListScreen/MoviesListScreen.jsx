import { Box } from "@mui/material";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import "./MoviesListScreen.css";
import ListBoxMovies from "../../Compont/ListBoxMovies/ListBoxMovies";
import { categoriesContext } from "../../App";
import { filterMovies } from "../../Utils/FilterMives/FilterMoives";
function MoviesListScreen() {
  // URL PARAMS
  const urlCategories = useParams("categories");
  const { setIdCategories } = useContext(categoriesContext);
  const [movies, setMovies] = useState([]);
  const idUrl = useParams("id");

  useEffect(() => {
    fetch("https://darsoft.b-cdn.net/movies.json")
      .then((repo) => repo.json())
      .then((data) => {
        setMovies(filterMovies(data.movies, idUrl.id));
        setIdCategories(idUrl.id);
      });
  }, []);

  return (
    <div className="movies-list-screen">
      <h3 className="title-movies">{urlCategories.categories}</h3>

      {movies.length === 0 ? (
        <Fragment>
          <Box className="no-categories">Coming Soon ...</Box>
        </Fragment>
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
