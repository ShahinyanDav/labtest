import React from "react";

export const ChevronLeft = ({ className }) => {
  return (
    <svg
      className={`chevron-left ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M5.5875 7.4999C5.2625 7.8249 5.2625 8.3499 5.5875 8.6749L9.4125 12.4999C9.7375 12.8249 10.2625 12.8249 10.5875 12.4999L14.4125 8.6749C14.7375 8.3499 14.7375 7.8249 14.4125 7.4999C14.0875 7.1749 13.5625 7.1749 13.2375 7.4999L9.99583 10.7332L6.7625 7.4999C6.4375 7.1749 5.90417 7.18324 5.5875 7.4999Z"
        fill="#686F78"
      />
    </svg>
  );
};
