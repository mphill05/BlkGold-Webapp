import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/blkgoldLogo.svg";
import { Navbar, Nav } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faBandcamp,
  faDiscord,
  faFacebook,
  faInstagram,
  faSoundcloud,
  faSpotify,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import "./header.styles.scss";

function Header() {
  const [expand, updateExpanded] = useState(false);

  return (
    <Navbar expand="lg" className="color-nav" variant="dark" fixed="top">
      <Navbar.Brand onClick={NavbarCollapse}>
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => {
          updateExpanded(expand ? false : "expanded");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Navbar.Toggle>
      <Navbar.Collapse className="justify-content-end" onClick={NavbarCollapse}>
        <Nav.Link className="options">
          <Link className="option" to="/music">
            Music
          </Link>
        </Nav.Link>
        <Nav.Link className="options">
          <Link className="option" to="/store">
            Store
          </Link>
        </Nav.Link>
        <ul className="mobileSocials">
          <li>
            <a
              href="https://open.spotify.com/artist/233z0IfLJLQZJwGeaZXvZR"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faSpotify} />
            </a>
          </li>
          <li>
            <a
              href="https://music.apple.com/us/artist/blkgold/1497838952"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faApple} />
            </a>
          </li>
          <li>
            <a
              href="https://soundcloud.com/blkgoldmusic"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faSoundcloud} />
            </a>
          </li>
          <li>
            <a
              href="https://blkgold.bandcamp.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faBandcamp} />
            </a>
          </li>
          <li>
            <a
              href="http://instagram.com/blkgoldmusic"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a
              href="http://twitter.com/blkgoldmusic"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a
              href="http://facebook.com/blkgoldmusic"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a
              href="http://twitch.com/blkgoldtv"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitch} />
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/96Ktkq6EBp"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
