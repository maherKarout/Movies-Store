import { Box, Button, List, ListItem } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import DarsoftImg from "./DarSoft.png";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = ["Home", "WatchList", "About"];
function Navbar() {
  const itemRef = useRef([]);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    itemRef.current[0].classList.add("active");
  });
  return (
    <Box
      className="nav-bar"
      sx={{
        justifyContent: { xs: "space-between", md: "space-around" },
        paddingX: { xs: "20px", md: "0" },
      }}
    >
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
          padding: { xs: "10px", md: "0px" },
          display: { xs: "block", md: "flex" },
          flexDirection: { xs: "column", md: "row" },
          flexWrap: "nowrap",
          alignItems: { xs: "start", md: "center" },
          position: { xs: "absolute", md: "static" },
          zIndex: 3,
          left: showMenu === false ? "-100%" : "0",
          top: "0",
          transition: "0.5s",
          background: {
            xs: "var(--secondary-black-color)",
            md: "var(--primary-black-color)",
          },
          height: { xs: "100vh", md: "100%" },
        }}
      >
        <List
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <ListItem
            sx={{
              display: {
                xs: "flex",
                md: "none",
                marginBottom: "20px",
                justifyContent: "space-between",
              },
            }}
          >
            Movies Store
            <Box
              className="company"
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <img src={DarsoftImg} alt="not font" />
            </Box>
          </ListItem>
          {navItems.map((item, index) => {
            return (
              <ListItem
                key={index}
                sx={{
                  marginBottom: { xs: "30px", md: "0px" },
                  borderBottom: {
                    xs: "1px solid var(--white-color)",
                    md: "none",
                  },
                }}
              >
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

        <Box className="company" sx={{ display: { xs: "none", md: "flex" } }}>
          <img src={DarsoftImg} alt="not font" />
          <span>
            <Link to={"https://darsoft.net"}>DarSoft</Link>
          </span>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
