import React, { useContext, useEffect, useState } from "react";
import "./SliderCategories.css";
import { Box, Grid } from "@mui/material";
import BoxCategories from "../BoxCategories/BoxCategories";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { categoriesContext } from "../../App";
import { splitArray } from "../../Utils/SpiltArrrayForCategories/SplitArray";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function SliderCategories() {
  const [categoreis, setCategoreis] = useState([]);
  const [sizeWindow, setSizeWindow] = useState(window.innerWidth);

  window.addEventListener("resize", () => setSizeWindow(window.innerWidth));

  // CONTEXT API
  const { setIdCategories } = useContext(categoriesContext);

  useEffect(() => {
    fetch("https://darsoft.b-cdn.net/movies_categories.json")
      .then((repo) => repo.json())
      .then((data) => setCategoreis(data.categories));
  }, []);

  return (
    <Box className="silder-categories">
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {splitArray(categoreis).map((arrayCategore, index) => {
          return (
            <SwiperSlide key={index}>
              <Grid container spacing={3}>
                {arrayCategore.map((catego, index) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      key={index}
                      onClick={() => {
                        setIdCategories(catego.id);
                      }}
                    >
                      <BoxCategories>{catego}</BoxCategories>
                    </Grid>
                  );
                })}
              </Grid>
            </SwiperSlide>
          );
        })}

        <br />
        <br />
        <br />
      </Swiper>
    </Box>
  );
}

export default SliderCategories;

// FUNCTIN TO SPLIT ARRAY TO 6 ARREAYS

// function splitArray(array = []) {
//   let arraEle = [];
//   let bigarray = [];

//   array.forEach((item, index) => {
//     if ((index + 1) % 6 === 0) {
//       arraEle.push(item);
//       bigarray.push(arraEle);
//       arraEle = [];
//     } else {
//       arraEle.push(item);
//     }
//   });
//   arraEle.length !== 0 && bigarray.push(arraEle);

//   return bigarray;
// }
