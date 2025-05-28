import React from "react";

export const School = ({ className }) => {
  return (
    <svg
      className={`school ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M9.99967 2.5L0.833008 7.5L4.16634 9.31667V14.3167L9.99967 17.5L15.833 14.3167V9.31667L17.4997 8.40833V14.1667H19.1663V7.5L9.99967 2.5ZM15.683 7.5L9.99967 10.6L4.31634 7.5L9.99967 4.4L15.683 7.5ZM14.1663 13.325L9.99967 15.6L5.83301 13.325V10.225L9.99967 12.5L14.1663 10.225V13.325Z"
        fill="#495360"
      />
    </svg>
  );
};
