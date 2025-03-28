import React from "react";

export interface ISVG {
  fill?: string;
  className?: string;
}

const Dot = ({ className }: ISVG) => {
  return (
    <svg
      width="6"
      height="6"
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="3" cy="3" r="3" fill="#1AD598" />
    </svg>
  );
};

export default Dot;
