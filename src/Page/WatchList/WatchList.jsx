import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";

import { categoriesContext } from "../../App";
import ListBoxMovies from "../../Compont/ListBoxMovies/ListBoxMovies";
function WatchList() {
  const { watchList } = useContext(categoriesContext);
  return (
    <>
      <Typography
        sx={{
          fontSize: "40px",
          fontWeight: "800",
          color: "var(--pink-color)",
          marginBottom: "30px",
        }}
      >
        Watchlist
      </Typography>
      {watchList.length !== 0 ? (
        watchList.map((movie, index) => {
          return <ListBoxMovies key={index} movie={movie} />;
        })
      ) : (
        <Box
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
    </>
  );
}

export default WatchList;
