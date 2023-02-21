import {
  Box,
  Button,
  createTheme,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { categoriesContext } from "../../App";
import "./MovieDetails.css";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
// import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/css/scrollbar";
// import "swiper/css/hash-navigation ";

import "swiper/css/autoplay";
import "swiper/css/virtual";

function MovieDetails() {
  const { selectedListItem, setSelectedListItem, setWatchList, watchList } =
    useContext(categoriesContext);

  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const sizeSlider = (widthScreen) => {
    if (widthScreen < 600) return 1;
    else if (widthScreen < 900) return 3;
    else return selectedListItem.actors.length <= 4 ? 3 : 4;
  };

  useEffect(() => {
    if (localStorage.getItem("selecteListItme")) {
      setSelectedListItem(JSON.parse(localStorage.getItem("selecteListItme")));
    }
  }, []);

  const theme = createTheme({
    palette: {
      error: {
        main: "#b0413d",
      },
      secondary: {
        main: "#ffea00",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="movie-details">
        {selectedListItem.id ? (
          <Fragment>
            <Box className="box-vedio">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${selectedListItem?.youtube_video_id}`}
                title="YouTube video player"
                frameBorder="0"
              ></iframe>
            </Box>
            <Stack
              // spacing={40}
              direction={{ xs: "colulmn", md: "row" }}
              alignItems={{ xs: "start", md: "center" }}
              justifyContent="space-between"
              sx={{
                marginBottom: "50px",
              }}
            >
              <Box className="title">
                <h1 className="big-font">{selectedListItem.title}</h1>
                <Box>
                  <span className="year smallfont">
                    {selectedListItem.year}
                  </span>

                  <Typography className="md-font" component="span">
                    <StarIcon color="secondary" />
                    {selectedListItem.rating}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Button
                  color="error"
                  variant="contained"
                  endIcon={<AddIcon sx={{ fontSize: "30px" }} />}
                  disabled={
                    watchList.findIndex(
                      (item) => item.id === selectedListItem.id
                    ) + 1
                      ? true
                      : false
                  }
                  onClick={() => setWatchList([...watchList, selectedListItem])}
                >
                  Addto watchlist
                </Button>
              </Box>
            </Stack>
            <Box className="summary">
              <Typography component="h3">Summary</Typography>
              <Typography component="p">{selectedListItem.summary}</Typography>

              <Box className="directors-writer">
                <p>
                  <span className="weight">Director:</span>
                  {selectedListItem.director}
                </p>
                <p>
                  <span className="weight">Writer:</span>
                  {selectedListItem.length !== 0 &&
                    selectedListItem.writers.map((writer, index) => (
                      <span key={index}>{writer},</span>
                    ))}
                </p>
              </Box>
            </Box>

            <Box className="casts">
              <Typography sx={{ fontSize: "40px" }}>acast</Typography>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                // slidesPerView={4}
                // slidesPerView={selectedListItem.actors.length <= 4 ? 3 : 4}
                slidesPerView={sizeSlider(widthScreen)}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                navigation={true}
              >
                {selectedListItem.actors?.map((actor, index) => {
                  return (
                    <SwiperSlide className="slider-swiper" key={index}>
                      <Box sx={{ textAlign: "center" }}>
                        <Box className="img-actor">
                          <img
                            src={`https://darsoft.b-cdn.net/assets/artists/${actor.id}.jpg`}
                            alt=""
                          />
                        </Box>
                        <Typography sx={{ textAlign: "center" }}>
                          {actor.name}
                        </Typography>
                      </Box>
                    </SwiperSlide>
                  );
                })}
                <br />
                <br />
              </Swiper>
            </Box>
          </Fragment>
        ) : (
          <div>someError</div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default MovieDetails;
