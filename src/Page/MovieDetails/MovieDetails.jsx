import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { categoriesContext } from "../../App";
import "./MovieDetails.css";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";

function MovieDetails() {
  const { selectedListItem } = useContext(categoriesContext);
  console.log(selectedListItem);
  return (
    <div className="movie-details">
      <Box className="box-img">
        {/* <img src={`https://darsoft.b-cdn.net/assets/movies/2.jpg`} alt="" /> */}

        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${selectedListItem.youtube_video_id}`}
          title="YouTube video player"
          frameborder="0"
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // allowfullscreen
        ></iframe>
      </Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          marginBottom: "50px",
        }}
      >
        <Box className="title">
          <Typography
            component="p"
            sx={{ fontSize: "50px", fontWeight: "800" }}
          >
            {selectedListItem.title}
          </Typography>
          <Box>
            <Typography
              component="span"
              sx={{ fontSize: "30px", fontWeight: "500", marginRight: "20px" }}
            >
              {selectedListItem.year}
            </Typography>

            <Typography
              component="span"
              sx={{ fontSize: "30px", fontWeight: "500" }}
            >
              <StarIcon sx={{ color: "yellow", fontSize: "30px" }} />
              {selectedListItem.rating}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Button
            color="error"
            variant="contained"
            endIcon={<AddIcon sx={{ fontSize: "30px" }} />}
            sx={{
              borderRadius: "30px",
              width: "250px",
              paddingY: "15px",
              paddingX: "20px",
              fontSize: "18px",
            }}
          >
            Addto watchlist
          </Button>
        </Box>
      </Stack>
      <Box className="summary">
        <Typography
          component="h3"
          sx={{ fontSize: " 40px", fontWeight: 800, marginBottom: "10px" }}
        >
          Summary
        </Typography>
        <Typography component="p" sx={{ fontSize: "30px", fontWeight: 300 }}>
          {selectedListItem.summary}
        </Typography>

        <Box className="directors-writer" sx={{ marginY: "20px" }}>
          <p>
            <span className="weight">Director:</span>
            {selectedListItem.director}
          </p>
          <p>
            <span className="weight">Writer:</span>
            {selectedListItem.length !== 0 &&
              selectedListItem.writers.map((writer, index) => {
                return <span key={index}>{writer},</span>;
              })}
          </p>
        </Box>
      </Box>
    </div>
  );
}

export default MovieDetails;