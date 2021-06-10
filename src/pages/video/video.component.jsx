import React from "react";
import video1Img from "../../assets/crwth.jpg";

import "./video.styles.scss";
import { Container, Col, Row, Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

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
    this.setState({
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
      modalCoverArt: video1Img,
      infoContent: [
        <li>
          <a
            href="https://open.spotify.com/album/56NJFT4FRqP04hM85vU8pF?si=n3Jgg_7-RS2Q4vKUnOf_TA"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} size="3x" />
          </a>
        </li>,
      ],
    });
  }

  render() {
    return (
      <div className="videoContainer">
        <div className="titleContainer">
          <strong>VIDEOS</strong>
          <hr />
        </div>
        <Container fluid className="videos">
          <Row>
            <Col
              onClick={() => {
                this.handleModal1();
              }}
              sm={12}
              md={6}
              className="coverArt"
            >
              <img src={video1Img} alt="Video Still" />;
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