import React from "react";
import "./VideoAction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const VideoAction = () => {
  return (
    <div className="video-action">
      <div className="container">
        <div className="row">
          <div className="info col-md-9">
            <h1>
              When a man's stomach is full it makes no difference whether he is
              rich or poor.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio <br /> finibus bibendum in sit amet leo. Mauris
              feugiat erat tellus.
            </p>
            <a href="/">
              <div>
                <FontAwesomeIcon icon={faPlay} /> Watch Our Story
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoAction;
