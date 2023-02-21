import { Box, Typography } from "@mui/material";
import React from "react";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ErrorIcon from "@mui/icons-material/Error";

function Error() {
  return (
    <Box
      className="error"
      sx={{
        textAlign: "center",
        marginTop: "150px",
        textTransform: "capitalize",
      }}
    >
      <ErrorIcon sx={{ color: "var(--red-color)", fontSize: "200px" }} />
      <Typography sx={{ color: "var(--red-color)", fontSize: "20px" }}>
        Errors Incorrect use of the site is expected
      </Typography>
      <Typography
        sx={{
          color: "#ffff0085",
          display: "flex",
          justifyContent: "center",
          marginTop: "15px",
        }}
      >
        <WarningAmberIcon sx={{ marginRight: "10px" }} /> To fix the issues, go
        to the homepage and refresh the site{" "}
      </Typography>
    </Box>
  );
}

export default Error;
