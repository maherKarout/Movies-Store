import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./BoxCategories.css";

function BoxCategories({ children }) {
  return (
    <Link to={`/${children.id}/${children.title}`} className="box-categories">
      {children.title}
    </Link>
  );
}

export default BoxCategories;
