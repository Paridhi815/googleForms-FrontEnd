import React from 'react';
import PropTypes from 'prop-types';
import './SubmitButton.css';

const SubmitButton = props => (
  <div className="SubmitButton">
    <button
      className="Submit-Button"
      onClick={() => props.onSubmit()}
      disabled={props.disableValue}
    >
      SUBMIT
    </button>
  </div>
);

SubmitButton.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

SubmitButton.defaultProps = {
};

export default SubmitButton;
