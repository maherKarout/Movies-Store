import { Container } from "@mui/material";
import { createContext, useState } from "react";
import { Route, Routes } from "react-router";
import MoviesListScreen from "./Page/MoviesListScreen/MoviesListScreen";
import Navbar from "./Compont/Navbar/Navbar";
import Home from "./Page/Home/Home";

export const categoriesContext = createContext();

function App() {
  const [idCategories, setIdCategories] = useState(0);
  return (
    <div className="App">
      <categoriesContext.Provider value={{ setIdCategories, idCategories }}>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":categories" element={<MoviesListScreen />} />
          </Routes>
        </Container>
      </categoriesContext.Provider>
    </div>
  );
}

export default App;
