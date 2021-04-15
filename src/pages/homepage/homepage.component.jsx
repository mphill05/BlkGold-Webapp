import React from "react";
import CoverArt from "../../assets/DoomsdayCoverArt.png";

import "./homepage.styles.scss";
import { Container } from "react-bootstrap";

const HomePage = () => (
  <Container fluid sm={12} md={12} lg={12} className="homeContainer">
    <img src={CoverArt} alt="Cover Art" className="mainPageCoverArt" />
    <h1>5.10.21</h1>
  </Container>
);

export default HomePage;
