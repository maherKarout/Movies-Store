import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { categoriesContext } from "../../App";
import "./MovieDetails.css";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import "swiper/css/scrollbar";

import "swiper/css/autoplay";
import "swiper/css/virtual";

function MovieDetails() {
  const { selectedListItem, setSelectedListItem, setWatchList, watchList } =
    useContext(categoriesContext);

  // console.log(JSON.parse(localStorage.getItem("selecteListItme")));
  useEffect(() => {
    if (localStorage.getItem("selectedListItem") !== undefined) {
      console.log(JSON.parse(localStorage.getItem("selecteListItme")));
      setSelectedListItem(JSON.parse(localStorage.getItem("selecteListItme")));
    }
  }, []);

  console.log(Object.keys(selectedListItem).length);
  return (
    <div className="movie-details">
      {selectedListItem.id != undefined ? (
        <>
          {console.log("cnditon run ")}
          <Box className="box-vedio">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${selectedListItem.youtube_video_id}`}
              title="YouTube video player"
              frameBorder="0"
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
                  sx={{
                    fontSize: "30px",
                    fontWeight: "500",
                    marginRight: "20px",
                  }}
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
                disabled={
                  watchList.findIndex(
                    (item) => item.id === selectedListItem.id
                  ) + 1
                    ? true
                    : false
                }
                sx={{
                  borderRadius: "30px",
                  width: "250px",
                  paddingY: "15px",
                  paddingX: "20px",
                  fontSize: "18px",
                  opacity:
                    watchList.findIndex((item) => item === selectedListItem) + 1
                      ? "0.5"
                      : "1",
                }}
                onClick={() => {
                  setWatchList([...watchList, selectedListItem]);
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
            <Typography
              component="p"
              sx={{ fontSize: "30px", fontWeight: 300 }}
            >
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

          <Box className="casts">
            <Typography sx={{ fontSize: "40px" }}>acast</Typography>
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              // slidesPerView={4}
              slidesPerView={selectedListItem.actors.length <= 4 ? 3 : 4}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              {selectedListItem.actors.map((actor, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Box sx={{ textAlign: "center" }}>
                      <Box
                        className="img"
                        sx={{
                          width: "160px",
                          height: "160px",
                          borderRadius: "50%",
                          overflow: "hidden",
                          marginX: "auto",
                          marginY: "20px",
                          border: " 1.5px solid #8292A9",
                        }}
                      >
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
              <br />
            </Swiper>
          </Box>
        </>
      ) : (
        <div>someError</div>
      )}
    </div>
  );
}

export default MovieDetails;
