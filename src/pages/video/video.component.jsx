import React from "react";

import "./video.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

class VideoPage extends React.Component {

  render() {
    return (
      <div className="videoContainer">
        <div className="titleContainer">
          <strong>VIDEOS</strong>
          <hr />
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/y3jwRGLNBoM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
        <div>
          <h1>downloadLinks</h1>
        </div>
        <hr />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/y3jwRGLNBoM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    );
  }
}

export default VideoPage;