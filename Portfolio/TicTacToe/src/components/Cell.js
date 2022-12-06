import React from "react";

const Cell = ({ value, handleClick }) => {
  return (
    <button 
    onClick={handleClick}
      style={{
        height: "167px",
        width: "165px", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid #333",
        fontSize: "4rem",
      }}
    >
      {value}
    </button>
  );
};

export { Cell };