import React from "react";
import { Gifts } from "../../../../icons/Gifts";
import { MediaIconsArrowsChevronDown2 } from "../../../../icons/MediaIconsArrowsChevronDown2";
import "./style.css";

export const ScrolledHeader = () => {
  return (
    <div className="scrolled-header">
      <div className="layer-wrapper">
        <div className="layer" />
      </div>

      <div className="frame-12">
        <div className="button-blue-large">
          <div className="label-4">Courses &amp; more</div>

          <MediaIconsArrowsChevronDown2 className="icon-instance-node-2" />
        </div>

        <div className="button-blue-large">
          <div className="label-4">Blog</div>
        </div>

        <div className="button-blue-large">
          <div className="label-4">Get inspired</div>

          <MediaIconsArrowsChevronDown2 className="icon-instance-node-2" />
        </div>

        <div className="button-blue-large">
          <div className="label-4">Pricing</div>
        </div>

        <div className="badge">
          <Gifts className="icon-instance-node-2" />
          <div className="badge-2">Expires soon</div>
        </div>
      </div>

      <div className="frame-13">
        <div className="frame-14">
          <img
            className="icons-moody"
            alt="Icons moody"
            src="https://c.animaapp.com/mb81dggmN0nCAD/img/icons--moody-3-2.png"
          />

          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <img
                className="notifications-black"
                alt="Notifications black"
                src="https://c.animaapp.com/mb81dggmN0nCAD/img/notifications-black-24dp--2-.svg"
              />

              <img
                className="oval"
                alt="Oval"
                src="https://c.animaapp.com/mb81dggmN0nCAD/img/oval.svg"
              />

              <div className="text-wrapper-4">5</div>
            </div>
          </div>

          <div className="group-2">
            <div className="text-wrapper-5">9,223,011</div>

            <div className="moodcoin-icon">
              <div className="layer-2">
                <div className="layer-3">
                  <div className="overlap-group-2">
                    <img
                      className="element"
                      alt="Element"
                      src="https://c.animaapp.com/mb81dggmN0nCAD/img/2.png"
                    />

                    <img
                      className="element"
                      alt="Element"
                      src="https://c.animaapp.com/mb81dggmN0nCAD/img/1.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="frame-15">
            <div className="avatar">
              <div className="overlap-group-3">
                <div className="avatar-style-small-wrapper">
                  <div className="avatar-style-small">
                    <div className="avatar-master-small">
                      <div className="avatar-2" />
                    </div>
                  </div>
                </div>

                <div className="plan-icons">
                  <div className="group-wrapper">
                    <img
                      className="group-3"
                      alt="Group"
                      src="https://c.animaapp.com/mb81dggmN0nCAD/img/group-1.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            <MediaIconsArrowsChevronDown2 className="icon-instance-node-2" />
          </div>
        </div>
      </div>
    </div>
  );
};
