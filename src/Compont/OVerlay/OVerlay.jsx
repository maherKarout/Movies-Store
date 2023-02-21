import React from "react";
import "./OVerlay.css";
function OVerlay({ setShowMenu }) {
  return (
    <div
      className="overlay"
      onClick={() => {
        setShowMenu(false);
      }}
    >
      OVerlay
    </div>
  );
}

export default OVerlay;
