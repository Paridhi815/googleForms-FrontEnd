import React from 'react';
import PropTypes from 'prop-types';
import './QuestionOperations.css';

const QuestionOperations = props => (
  <div className="QuestionOperations">
    <button
      className="Question-Delete-Button"
      onClick={() => props.onDelete()}
    >
      <i className="material-icons Delete-Button">delete</i>
    </button>
    <div className="Required-Check">
      <input
        type="checkbox"
        value="isRequired"
        className="Check-ifRequired"
      />
    Required
    </div>

  </div>
);

QuestionOperations.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

QuestionOperations.defaultProps = {
};

export default QuestionOperations;

