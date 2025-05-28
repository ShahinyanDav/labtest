import React from "react";
import { Lab } from "../../icons/Lab";
import { MediaIconsArrowsChevronLeft1 } from "../../icons/MediaIconsArrowsChevronLeft1";
import "./style.css";

export const FrameWrapper = ({
  className,
  mediaIconsArrowsClassName,
  mediaIconsArrowsClassNameOverride,
}) => {
  return (
    <div className={`frame-wrapper ${className}`}>
      <div className="button-blue-small">
        <MediaIconsArrowsChevronLeft1 className="media-icons-arrows" />
        <div className="label-5">Back to AI coach</div>
      </div>

      <div className="frame-16">
        <Lab className="lab-instance" />
        <div className="text-wrapper-6">Lab</div>

        <img
          className={`media-icons-arrows-2 ${mediaIconsArrowsClassName}`}
          alt="Media icons arrows"
        />
      </div>

      <div className="button-blue-small-2">
        <img
          className={`media-icons-arrows-3 ${mediaIconsArrowsClassNameOverride}`}
          alt="Media icons arrows"
        />

        <div className="label-5">Back to AI coach</div>
      </div>
    </div>
  );
};
