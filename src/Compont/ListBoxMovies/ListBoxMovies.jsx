import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { categoriesContext } from "../../App";

import "./ListBoxMovies.css";
function ListBoxMovies({ index, movie }) {
  const { setSelectedListItem, idCategories } = useContext(categoriesContext);

  const handelSelecteListItem = () => {
    setSelectedListItem(movie);
    localStorage.setItem("selecteListItme", JSON.stringify(movie));
  };
  return (
    <div className="list-box-movies">
      <Link
        to="Details"
        className="list-movie-item"
        onClick={handelSelecteListItem}
      >
        <Box className="img">
          <img
            src={`https://darsoft.b-cdn.net/assets/movies/${movie?.id}.jpg`}
            alt=""
          />
        </Box>
        <Box className="movie-list-title">
          <Typography
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
      </Link>
    </div>
  );
}

export default ListBoxMovies;
