import React from 'react';
import PropTypes from 'prop-types';
import './PlusAddButton.css';

const PlusAddButton = props => (
  <div className="PlusAddButton">
    <button
      className={props.classValue}
      onClick={() => props.onAddClick()}
    >
      <i className="material-icons">add_circle</i>
    </button>
  </div>
);

PlusAddButton.propTypes = {
  onAddClick: PropTypes.func.isRequired,
  classValue: PropTypes.string,
};

PlusAddButton.defaultProps = {
  classValue: '',
};

export default PlusAddButton;
