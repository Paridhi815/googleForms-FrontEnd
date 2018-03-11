import React from 'react';
import PropTypes from 'prop-types';
import './QuestionBoxContainer.css';
import QuestionBox from '../QuestionBox/QuestionBox';

const QuestionBoxContainer = props => (
  <div className="QuestionBoxContainer">
    <QuestionBox
      onQuestionTextChange={event => props.onQuestionTextChange(event)}
      onQuestionTypeChange={event => props.onQuestionTypeChange(event)}
    />
  </div>
);

QuestionBoxContainer.propTypes = {
  onQuestionTextChange: PropTypes.func.isRequired,
  onQuestionTypeChange: PropTypes.func.isRequired,
};

QuestionBoxContainer.defaultProps = {
};

export default QuestionBoxContainer;
