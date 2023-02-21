import { Box, List, ListItem } from "@mui/material";
import React, { useEffect, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import DarsoftImg from "./DarSoft.png";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const navItems = ["Home", "WatchList", "About"];
function Navbar() {
  const itemRef = useRef([]);

  useEffect(() => {
    itemRef.current[0].classList.add("active");
  });
  return (
    <Box className="nav-bar">
      <Box className="right-side">
        <h3 className="logo">Movies Store</h3>
      </Box>
      <Box
        className="left-side"
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          alignItems: "center",
        }}
      >
        <List sx={{ display: "flex", flexDirection: "row" }}>
          {navItems.map((item, index) => {
            return (
              <ListItem key={index}>
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
