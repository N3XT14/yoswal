import React from "react";

const Wave = () => {
  const waveS = { position: "absolute", bottom: "-1px" };
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#edf2f8"
        preserveAspectRatio="none"
        viewBox="0 0 1680 40"
        style={waveS}
      >
        <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z"></path>
      </svg>
    </div>
  );
};

export default Wave;
