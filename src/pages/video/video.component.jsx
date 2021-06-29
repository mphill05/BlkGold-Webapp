import React from "react";

import "./video.styles.scss";

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
        <hr />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/UJsPXSXz_gs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
        <hr />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2O03Vn8B3l0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
        <hr />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HxdteTe1ZdY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
        <hr />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6XhLmh4y9vE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
        <hr />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/tcHuCjo_KP4"
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