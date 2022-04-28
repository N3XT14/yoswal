import React from "react";

const Circle = ({ fill, circleClass }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        height="28"
        viewBox="0 0 28 20"
        width="28"
        aria-hidden="true"
        className={circleClass}
      >
        <circle
          cx="14"
          cy="10"
          fill={fill}
          r="5"
          stroke="#dadfe9"
          strokeWidth="2"
        ></circle>
      </svg>
    </div>
  );
};

export default Circle;
    