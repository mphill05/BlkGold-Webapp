import React from "react";

import "./homepage.styles.scss";
import { Container } from "react-bootstrap";

const HomePage = () => (
  <Container fluid sm={12} md={12} lg={12} className="homeContainer">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/y3jwRGLNBoM"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </Container>
);

export default HomePage;