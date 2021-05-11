import React from "react";

import "./homepage.styles.scss";
import { Container } from "react-bootstrap";

const HomePage = () => (
  <Container fluid sm={12} md={12} lg={12} className="homeContainer">
    <iframe
      title='New Music'
      width="100%"
      height="100%"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1046524978&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
    </iframe>
  </Container>
);

export default HomePage;