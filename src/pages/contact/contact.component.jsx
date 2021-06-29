import React from "react";

import "./contact.styles.scss";

class ContactPage extends React.Component {

  render() {
    return (
      <div className="contactContainer">
        <div className="titleContainer">
          <strong>CONTACT</strong>
          <hr />
        </div>
        <h4>Contact: <a href='contact@blkgoldmusic.com'>contact@blkgoldmusic.com</a></h4>
      </div>
    );
  }
}

export default ContactPage;