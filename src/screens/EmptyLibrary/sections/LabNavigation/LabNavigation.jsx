import React from "react";
import { ChevronLeft } from "../../../../icons/ChevronLeft";
import { Extension } from "../../../../icons/Extension";
import { Home } from "../../../../icons/Home";
import { LibraryBooks } from "../../../../icons/LibraryBooks";
import { LibraryBooks3 } from "../../../../icons/LibraryBooks3";
import { LocalLibrary } from "../../../../icons/LocalLibrary";
import { MediaIconsGeneralPlusBig } from "../../../../icons/MediaIconsGeneralPlusBig";
import { School } from "../../../../icons/School";
import "./style.css";

export const LabNavigation = () => {
  return (
    <div className="LAB-navigation">
      <div className="button">
        <MediaIconsGeneralPlusBig className="icon-instance-node" />
        <div className="label">New</div>
      </div>

      <div className="div">
        <div className="text-wrapper">My Library</div>

        <div className="div-wrapper">
          <div className="frame-2">
            <div className="frame-3">
              <div className="library-row">
                <div className="frame-4">
                  <Home className="icon-instance-node" />
                  <div className="my-openings">Home</div>
                </div>
              </div>

              <div className="library-row-2">
                <div className="frame-4">
                  <LocalLibrary className="icon-instance-node" />
                  <div className="my-openings-2">My Openings</div>
                </div>

                <div className="media-icons-general-wrapper">
                  <img
                    className="media-icons-general"
                    alt="Media icons general"
                  />
                </div>
              </div>

              <div className="library-row-2">
                <div className="frame-4">
                  <Extension className="icon-instance-node" />
                  <div className="my-openings-2">My games</div>
                </div>

                <div className="media-icons-general-wrapper">
                  <img className="img" alt="Media icons general" />
                </div>
              </div>

              <div className="library-row-2">
                <div className="frame-4">
                  <School className="icon-instance-node" />
                  <div className="my-openings-3">ChessMood Courses</div>
                </div>

                <div className="media-icons-general-wrapper">
                  <img
                    className="media-icons-general-2"
                    alt="Media icons general"
                  />
                </div>
              </div>
            </div>

            <img
              className="vector"
              alt="Vector"
              src="https://c.animaapp.com/mb81dggmN0nCAD/img/vector-2987.svg"
            />

            <div className="div">
              <div className="frame-5">
                <div className="text-wrapper">Custom Libraries</div>

                <ChevronLeft className="icon-instance-node" />
              </div>

              <div className="frame-3">
                <div className="library-row-3">
                  <div className="frame-4">
                    <LibraryBooks3 className="icon-instance-node" />
                    <div className="my-openings-4">My old repertoire</div>
                  </div>

                  <div className="media-icons-general-wrapper">
                    <img
                      className="media-icons-general-3"
                      alt="Media icons general"
                    />
                  </div>
                </div>

                <div className="library-row-2">
                  <div className="frame-4">
                    <LibraryBooks className="icon-instance-node" />
                    <div className="my-openings-5">GMs Camp - Opening</div>
                  </div>

                  <div className="media-icons-general-wrapper">
                    <img
                      className="media-icons-general-4"
                      alt="Media icons general"
                    />
                  </div>
                </div>

                <div className="library-row-2">
                  <div className="frame-4">
                    <LibraryBooks className="icon-instance-node" />
                    <div className="my-openings-2">Need to organize</div>
                  </div>

                  <div className="media-icons-general-wrapper">
                    <img
                      className="media-icons-general-5"
                      alt="Media icons general"
                    />
                  </div>
                </div>

                <div className="button-2">
                  <MediaIconsGeneralPlusBig className="icon-instance-node" />
                  <div className="label-2">Add new</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
