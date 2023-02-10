import React from "react";

const Cell = ({
  endGame,
  value,
  handleClick,
}) => {
  return (
    <button
      onClick={() => {
        !endGame ? handleClick() : console.log("end");
      }}
      style={{
        height: "167px",
        width: "167px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "10px solid #333",
        fontSize: "4rem",
        borderRadius: "0px",
      }}
    >
      {value}
    </button>
  );
};

export { Cell };
