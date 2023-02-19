import React, { createContext, useState } from "react";
import { Outlet } from "react-router";
import SliderCategories from "../../Compont/SliderCategories/SliderCategories";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <h3>Trending Categories</h3>
      <SliderCategories />
      <Outlet />
    </div>
  );
}

export default Home;
