import React from 'react';
// import PropTypes from 'prop-types';
import './PlusAddButton.css';

const PlusAddButton = () => (
  <div className="PlusAddButton">
    <button className="PlusAdd-button" >
      <i className="material-icons">add_circle</i>
    </button>
  </div>
);

PlusAddButton.propTypes = {
};

PlusAddButton.defaultProps = {
};

export default PlusAddButton;
