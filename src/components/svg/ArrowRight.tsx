import { ISVG } from "@/components/svg/Dot";
import React from "react";

const ArrowRight = ({ className, fill }: ISVG) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20.7806 12.9407L14.0306 19.6907C13.8899 19.8314 13.699 19.9105 13.5 19.9105C13.301 19.9105 13.1101 19.8314 12.9694 19.6907C12.8286 19.55 12.7496 19.3591 12.7496 19.1601C12.7496 18.9611 12.8286 18.7702 12.9694 18.6295L18.4397 13.1601H3.75C3.55109 13.1601 3.36032 13.0811 3.21967 12.9404C3.07902 12.7998 3 12.609 3 12.4101C3 12.2112 3.07902 12.0204 3.21967 11.8798C3.36032 11.7391 3.55109 11.6601 3.75 11.6601H18.4397L12.9694 6.19071C12.8286 6.04998 12.7496 5.85911 12.7496 5.66008C12.7496 5.46106 12.8286 5.27019 12.9694 5.12946C13.1101 4.98873 13.301 4.90967 13.5 4.90967C13.699 4.90967 13.8899 4.98873 14.0306 5.12946L20.7806 11.8795C20.8504 11.9491 20.9057 12.0318 20.9434 12.1229C20.9812 12.2139 21.0006 12.3115 21.0006 12.4101C21.0006 12.5086 20.9812 12.6062 20.9434 12.6973C20.9057 12.7883 20.8504 12.8711 20.7806 12.9407Z"
        fill="#667F93"
        stroke={fill || "currentColor"}
      />
    </svg>
  );
};

export default ArrowRight;
