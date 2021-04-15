import React from "react";
import PropTypes from "prop-types";
import { InputGroup } from "react-bootstrap";
import axios from "axios";

import "./Subscribe.styles.scss";

export default class Subscribe extends React.Component {
  placeholder = "Join Mailing List";
  buttonText = "Subscribe";

  state = {
    email: "",
  };

  clearForm = (e) => {
    this.setState({ state: "" });
  };

  handleChange = (e) => {
    this.setState({ email: e.target.value.trim() });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const email = this.state.email;

    if (email) {
      e.target.reset();
      axios.post("http://localhost:9000/subscribe", { email });
    }
  };

  render() {
    return (
      <form
        inline
        className="subscribe inputGroup"
        action="/subscribe"
        method="POST"
        onSubmit={this.handleSubmit}
      >
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          </InputGroup.Prepend>
          <input
            className="form-control subscribe-email"
            name="email"
            type="email"
            id="email"
            placeholder={this.placeholder}
            onChange={this.handleChange}
            value={this.email}
            aria-label="Join Mailing List"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
          <InputGroup.Append>
            <button
              className="btn"
              variant="outline-secondary subscribe-button"
              type="submit"
            >
              {this.buttonText}
            </button>
          </InputGroup.Append>
        </InputGroup>
      </form>
    );
  }
}

Subscribe.propTypes = {
  placeholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
