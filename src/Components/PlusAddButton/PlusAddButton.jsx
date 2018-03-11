import React from 'react';
import PropTypes from 'prop-types';
import './PlusAddButton.css';

const PlusAddButton = props => (
  <div className="PlusAddButton">
    <button
      className="PlusAdd-button"
      onClick={() => props.onAddClick()}
    >
      <i className="material-icons">add_circle</i>
    </button>
  </div>
);

PlusAddButton.propTypes = {
  onAddClick: PropTypes.func.isRequired,
};

PlusAddButton.defaultProps = {
};

export default PlusAddButton;
