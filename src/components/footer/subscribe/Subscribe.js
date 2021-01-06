import React, { useState } from "react";
import PropTypes from "prop-types";
import { InputGroup } from 'react-bootstrap';

import "./Subscribe.styles.scss";

const Subscribe = ({
    placeholder,
    buttonText,
}) => {
    const [state, setState] = useState({
        email: ""
    });

    const handleChange = e => {
        setState({ email: e.target.value.trim() });
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (state.email) {
            console.log(state.email)
            if (err => console.log(err))

            setState({ email: '' });
        }
    };

    return (
        <form 
            inline
            className="subscribe inputGroup" 
            method='POST'
            onSubmit={handleSubmit}>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text id='basic-addon1'>@</InputGroup.Text>
                </InputGroup.Prepend>
                <input
                    className='form-control subscribe-email'
                    name="email"
                    type="email"
                    placeholder={placeholder}
                    onChange={handleChange}
                    value={state.email}
                    aria-label='Join Mailing List'
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                />
                <InputGroup.Append>
                    <button
                        className='btn'
                        variant='outline-secondary subscribe-button'
                        type='submit'>{ buttonText }</button>
                </InputGroup.Append>
            </InputGroup>
        </form>
    );
};

Subscribe.propTypes = {
    placeholder: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
};

export default Subscribe;