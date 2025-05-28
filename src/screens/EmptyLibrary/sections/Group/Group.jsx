import React from "react";
import { LibraryBooks2 } from "../../../../icons/LibraryBooks2";
import { MediaIconsGeneralPlusBig } from "../../../../icons/MediaIconsGeneralPlusBig";
import { MediaIconsGeneralSearch } from "../../../../icons/MediaIconsGeneralSearch";
import "./style.css";

export const Group = () => {
  return (
    <div className="group">
      <div className="frame-6">
        <div className="frame-7">
          <div className="frame-8" />

          <div className="search-bar">
            <div className="left-content">
              <div className="media-icons-general-search-wrapper">
                <MediaIconsGeneralSearch className="media-icons-general-search" />
              </div>

              <div className="text-cursor">
                <div className="text-wrapper-2">Search in Lab</div>
              </div>
            </div>
          </div>
        </div>

        <img
          className="vector-2"
          alt="Vector"
          src="https://c.animaapp.com/mb81dggmN0nCAD/img/vector-2987.svg"
        />

        <div className="frame-9">
          <div className="frame-10">
            <div className="frame-11">
              <LibraryBooks2 className="library-books" />
              <div className="text-wrapper-3">Library is empty</div>
            </div>

            <div className="button-3">
              <MediaIconsGeneralPlusBig className="media-icons-general-plus-big" />
              <div className="label-3">Add your first PGN</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
