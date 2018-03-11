import React from 'react';
import PropTypes from 'prop-types';
import './QuestionBox.css';
import QuestionTypeDropdown from '../QuestionTypeDropdown/QuestionTypeDropdown';

const QuestionBox = props => (
  <div className="QuestionBox">
    <div className="Question-Input">
      <input
        type="text"
        className="Question-Title-Input"
        placeholder="Untitled Question"
        onChange={event => props.onQuestionTextChange(event)}
      />
    </div>
    <div className="Dropdown-Countdown">
      <QuestionTypeDropdown
        onQuestionTypeChange={event => props.onQuestionTypeChange(event)}
      />
    </div>
  </div>
);

QuestionBox.propTypes = {
  onQuestionTextChange: PropTypes.func.isRequired,
  onQuestionTypeChange: PropTypes.func.isRequired,
};

QuestionBox.defaultProps = {
};

export default QuestionBox;
