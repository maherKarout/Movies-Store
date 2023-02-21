import { Box, Container } from "@mui/material";
import { createContext, useRef, useState } from "react";
import { Route, Routes } from "react-router";

import WatchList from "./Page/WatchList/WatchList";
import { Navbar } from "./Compont/indexCompont";
import {
  Home,
  MovieDetails,
  MoviesListScreen,
  Error,
  About,
} from "./Page/indexPage";

export const categoriesContext = createContext();

function App() {
  const [idCategories, setIdCategories] = useState(0);
  const [watchList, setWatchList] = useState([]);

  const [selectedListItem, setSelectedListItem] = useState({});

  return (
    <div className="App">
      <categoriesContext.Provider
        value={{
          setIdCategories,
          idCategories,
          selectedListItem,
          setSelectedListItem,
          watchList,
          setWatchList,
        }}
      >
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":id/:categories" element={<MoviesListScreen />} />
            <Route path=":id/:categories/Details" element={<MovieDetails />} />
            <Route path="/WatchList" element={<WatchList />} />
            <Route path="/WatchList/Details" element={<MovieDetails />} />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Container>
      </categoriesContext.Provider>
    </div>
  );
}

export default App;
