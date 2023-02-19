import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import StarIcon from "@mui/icons-material/Star";
import { categoriesContext } from "../../App";
import "./MoviesListScreen.css";

function MoviesListScreen() {
  const urlCategories = useParams("categories");
  const [movies, setMovies] = useState([]);
  // CONTEXT API
  const { idCategories } = useContext(categoriesContext);

  useEffect(() => {
    fetch("https://darsoft.b-cdn.net/movies.json")
      .then((repo) => repo.json())
      .then((data) => {
        console.log("Data Equal :", data.movies);
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
          return (
            <Box className="list-movie-item" key={index}>
              <Box
                className="img"
                sx={{
                  width: "200px",
                  height: "200px",
                  background: "var(--white-color)",
                }}
              >
                <img
                  src={`https://darsoft.b-cdn.net/assets/movies/${movie.id}.jpg`}
                  alt="no imagsfde"
                />
              </Box>
              <Box className="movie-list-title">
                <Typography
                  variant="p"
                  component="p"
                  sx={{ fontSize: "30px", fontWeight: "800" }}
                  className="title"
                >
                  {movie.title}
                </Typography>
                <h4 className="year">{movie.year}</h4>
                <Typography
                  component="p"
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignContent: "center",
                  }}
                  className="rating"
                >
                  <Typography
                    component="span"
                    sx={{ color: "yellow", marginRight: "5px" }}
                  >
                    <StarIcon />
                  </Typography>
                  {movie.rating}
                </Typography>
              </Box>
            </Box>
          );
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
