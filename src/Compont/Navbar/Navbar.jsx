import {
  Box,
  Button,
  createTheme,
  List,
  ListItem,
  ThemeProvider,
} from "@mui/material";
import React, { useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import DarsoftImg from "../../Assets/Img/DarSoft.png";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import OVerlay from "../OVerlay/OVerlay";

const navItems = ["Home", "WatchList", "About"];

function Navbar() {
  const itemRef = useRef([]);
  const [showMenu, setShowMenu] = useState(false);

  const theme = createTheme({
    palette: {
      error: {
        main: "#b0413d",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box className="nav-bar">
        {showMenu && window.innerWidth < 900 && (
          <OVerlay setShowMenu={setShowMenu} />
        )}

        <Box className="left-side">
          <h3 className="logo">Movies Store</h3>
        </Box>
        <Button
          color="error"
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <MenuIcon />
        </Button>
        <Box
          className="right-side"
          sx={{
            left: showMenu === false ? "-100%" : "0",
          }}
        >
          <List>
            <ListItem className="header-menu">
              Movies Store
              <Box
                className="company"
                sx={{ display: { xs: "flex", md: "none" } }}
              >
                <Link to={"https://darsoft.net"}>
                  <img src={DarsoftImg} alt="not font" />
                </Link>
              </Box>
            </ListItem>
            {navItems.map((item, index) => {
              return (
                <ListItem key={index} onClick={() => setShowMenu(!showMenu)}>
                  {" "}
                  <NavLink
                    to={`${item == "Home" ? "/" : item}`}
                    ref={(c) => itemRef.current.push(c)}
                  >
                    {item}
                  </NavLink>
                </ListItem>
              );
            })}
          </List>

          <Box className="search">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </Box>

          <Box className="company">
            <Link to={"https://darsoft.net"}>
              <img src={DarsoftImg} alt="not font" />
              <span>DarSoft</span>
            </Link>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Navbar;
