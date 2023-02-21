import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import "./WatchList.css";
import { categoriesContext } from "../../App";
import ListBoxMovies from "../../Compont/ListBoxMovies/ListBoxMovies";
function WatchList() {
  const { watchList } = useContext(categoriesContext);
  return (
    <div className="watch-list">
      <Typography component={"h1"}>Watchlist</Typography>
      {watchList.length ? (
        watchList?.map((watch, index) => {
          return <ListBoxMovies key={index} movie={watch} />;
        })
      ) : (
        <Box
          className="no-movies"
          sx={{
            width: "100%",
            textAlign: "center",
            marginTop: "20%",
            transform: "translateY(-50%)",
          }}
        >
          <Typography sx={{ fontSize: "30px" }}>No Movies Selected</Typography>
        </Box>
      )}
    </div>
  );
}

export default WatchList;
