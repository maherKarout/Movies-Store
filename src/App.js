import { Box, Container } from "@mui/material";
import { createContext, useState } from "react";
import { Route, Routes } from "react-router";
import MoviesListScreen from "./Page/MoviesListScreen/MoviesListScreen";
import Navbar from "./Compont/Navbar/Navbar";
import Home from "./Page/Home/Home";
import MovieDetails from "./Page/MovieDetails/MovieDetails";

export const categoriesContext = createContext();

function App() {
  const [idCategories, setIdCategories] = useState(0);
  // const [idMovie, setIdMovie] = useState(1);
  const [selectedListItem, setSelectedListItem] = useState({});
  return (
    <div className="App">
      <categoriesContext.Provider
        value={{
          setIdCategories,
          idCategories,
          selectedListItem,
          setSelectedListItem,
        }}
      >
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":categories" element={<MoviesListScreen />} />
            <Route path=":categories/Details" element={<MovieDetails />} />
            <Route path="*" element={<Box>Error</Box>} />
          </Routes>
        </Container>
      </categoriesContext.Provider>
    </div>
  );
}

export default App;
