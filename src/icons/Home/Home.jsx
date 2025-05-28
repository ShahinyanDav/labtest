import React from "react";

export const Home = ({ className }) => {
  return (
    <svg
      className={`home ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10.0003 5.15817L14.167 8.90817V15.4165H12.5003V10.4165H7.50033V15.4165H5.83366V8.90817L10.0003 5.15817ZM10.0003 2.9165L1.66699 10.4165H4.16699V17.0832H9.16699V12.0832H10.8337V17.0832H15.8337V10.4165H18.3337L10.0003 2.9165Z"
        fill="#686F78"
      />
    </svg>
  );
};
