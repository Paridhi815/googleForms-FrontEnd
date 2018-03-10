import React from 'react';
// import PropTypes from 'prop-types';
import './QuestionBox.css';
import QuestionTypeDropdown from '../QuestionTypeDropdown/QuestionTypeDropdown';

const QuestionBox = () => (
  <div className="QuestionBox">
    <div className="Question-Input">
      <input
        type="text"
        className="Question-Title-Input"
        placeholder="Untitled Question"
      />
    </div>
    <div className="Dropdown-Countdown">
      <QuestionTypeDropdown />
    </div>
  </div>
);

QuestionBox.propTypes = {
};

QuestionBox.defaultProps = {
};

export default QuestionBox;
