import React from "react";
import CoverArt1 from "../../assets/crwth.jpg";
import CoverArt2 from "../../assets/atreides final FRONT.png";
import CoverArt3 from "../../assets/SandboxCoverArt.jpg";
import CoverArt4 from "../../assets/ucRemixCoverArt.jpg";
import CoverArt5 from "../../assets/DoomsdayCoverArt.png";

import "./music.styles.scss";
import { Container, Col, Row, Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faBandcamp,
  faSoundcloud,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

class MusicPage extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      modalTitle: "",
      coverArt: "",
      infoContent: "",
    };
  }

  defaultModal() {
    this.state({
      show: false,
      modalTitle: "",
      coverArt: "",
      infoContent: "",
    });
  }

  handleModal1() {
    this.setState({
      show: !this.state.show,
      modalTitle: "Ultimate",
      modalCoverArt: CoverArt1,
      infoContent: [
        <li>
          <a
            href="https://open.spotify.com/album/56NJFT4FRqP04hM85vU8pF?si=n3Jgg_7-RS2Q4vKUnOf_TA"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faSpotify} size="2x" />
          </a>
        </li>,
        <li>
          <a
            href="https://soundcloud.com/blkgoldmusic/crwth-ultimate-blkgold-remix"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faSoundcloud} size="2x" />
          </a>
        </li>,
      ],
    });
  }

  handleModal2() {
    this.setState({
      show: !this.state.show,
      modalTitle: "JRNY",
      modalCoverArt: CoverArt2,
      infoContent: [
        <li>
          <a
            href="https://open.spotify.com/track/7cua8hdvRigUI8eyGBa1Oe"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faSpotify} size="2x" />
          </a>
        </li>,
        <li>
          <a
            href="https://soundcloud.com/blkgoldmusic/jrny"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faSoundcloud} size="2x" />
          </a>
        </li>,
        <li>
          <a
            href="http://ripplestowaves.bandcamp.com/releases"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faBandcamp} size="2x" />
          </a>
        </li>,
      ],
    });
  }

  handleModal3() {
    this.setState({
      show: !this.state.show,
      modalTitle: "Sandbox",
      modalCoverArt: CoverArt3,
      infoContent: [
        <li>
          <a
            href="https://open.spotify.com/track/2WesyiDwZiMgsxYM8C6Fdp"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faSpotify} size="2x" />
          </a>
        </li>,
        <li>
          <a
            href="https://soundcloud.com/blkgoldmusic/sandbox"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faSoundcloud} size="2x" />
          </a>
        </li>,
        <li>
          <a
            href="https://youtu.be/KePzJu_h-xI"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </li>,
      ],
    });
  }

  handleModal4() {
    this.setState({
      show: !this.state.show,
      modalTitle: "Under Control Remix",
      modalCoverArt: CoverArt4,
      infoContent: [
        <li>
          <a
            href="https://soundcloud.com/blkgoldmusic/said-x-glitter-soda-under-control-blkgold-remix"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faSoundcloud} size="2x" />
          </a>
        </li>,
        <li>
          <a
            href="https://youtu.be/TX1aGfhgjfA"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </li>,
      ],
    });
  }

  handleModal5() {
    this.setState({
      show: !this.state.show,
      modalTitle: "Doomsday",
      modalCoverArt: CoverArt5,
      infoContent: [
        <li>
          <a
            href="https://open.spotify.com/track/4WNIDIHKryqhHVmmfd63ON?si=52636c6c0c3541a6"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faSpotify} size="2x" />
          </a>
        </li>,
        <li>
          <a
            href="https://soundcloud.com/blkgoldmusic/doomsday"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faSoundcloud} size="2x" />
          </a>
        </li>,
        <li>
          <a
            href="https://www.youtube.com/watch?v=QFqs9gobuvs&list=OLAK5uy_mTK9qI2-xUWGTQavoIjdR213Fh1ujUQho"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </li>,
      ],
    });
  }

  render() {
    return (
      <div className="musicContainer">
        <div className="titleContainer">
          <strong>MUSIC</strong>
          <hr />
        </div>
        <Container fluid className="music">
          <Row>
            <Col
              onClick={() => {
                this.handleModal5();
              }}
              sm={12}
              md={4}
              className="coverArt"
            >
              <img src={CoverArt5} alt="Cover Art" />;
            </Col>
            <Col
              onClick={() => {
                this.handleModal4();
              }}
              sm={12}
              md={4}
              className="coverArt"
            >
              <img src={CoverArt4} alt="Cover Art" />;
            </Col>
            <Col
              onClick={() => {
                this.handleModal3();
              }}
              sm={12}
              md={4}
              className="coverArt"
            >
              <img src={CoverArt3} alt="Cover Art" />;
            </Col>
          </Row>
        </Container>
        <Container fluid className="music2">
          <Row>
            <Col
              onClick={() => {
                this.handleModal2();
              }}
              sm={12}
              md={6}
              className="coverArt"
            >
              <img src={CoverArt2} alt="Cover Art" />;
            </Col>
            <Col
              onClick={() => {
                this.handleModal1();
              }}
              sm={12}
              md={6}
              className="coverArt"
            >
              <img src={CoverArt1} alt="Cover Art" />;
            </Col>
          </Row>
        </Container>

        {/* Modal */}
        <Modal className="my-modal" show={this.state.show} size="lg" centered>
          <Modal.Header>
            <h5 ref="header text">{this.state.modalTitle}</h5>
            <Button
              className="timesFA"
              onClick={() => {
                this.defaultModal();
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </Modal.Header>
          <Modal.Body className="modalBody">
            <img
              src={this.state.modalCoverArt}
              className="img-fluid"
              alt="Cover Art"
            />
          </Modal.Body>
          <Modal.Footer className="modalFooter">
            <ul ref="downloadLinks">{this.state.infoContent}</ul>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default MusicPage;