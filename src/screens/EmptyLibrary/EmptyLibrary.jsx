import React from "react";
import { Frame } from "./sections/Frame";
import { Group } from "./sections/Group";
import { LabNavigation } from "./sections/LabNavigation";
import { ScrolledHeader } from "./sections/ScrolledHeader";
import "./style.css";

export const EmptyLibrary = () => {
  return (
    <div className="empty-library">
      <LabNavigation />
      <Group />
      <ScrolledHeader />
      <Frame />
      <div className="alert-inline">
        <img
          className="media-icons-general-6"
          alt="Media icons general"
          src="https://c.animaapp.com/mb81dggmN0nCAD/img/media---icons---general---tick.svg"
        />

        <div className="content">
          <div className="text-icon">
            <div className="text">
              <div className="title">PGN uploaded!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
