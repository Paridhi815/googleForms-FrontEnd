import React from 'react';
import PropTypes from 'prop-types';
import './QuestionBoxContainer.css';
import QuestionBox from '../QuestionBox/QuestionBox';
import QuestionOperations from '../QuestionOperations/QuestionOperations';

const QuestionBoxContainer = props => (
  <div className="QuestionBoxContainer">
    <QuestionBox
      questionNumber={props.questionNumber}
      onQuestionChange={props.onQuestionChange}
    />
    <QuestionOperations
      questionNumber={props.questionNumber}
      onQuestionChange={props.onQuestionChange}
    />
  </div>
);

QuestionBoxContainer.propTypes = {
  onQuestionChange: PropTypes.func.isRequired,
  questionNumber: PropTypes.number.isRequired,
  // questionText: PropTypes.string.isRequired,
  // questionType: PropTypes.string.isRequired,
  // isRequired: PropTypes.bool.isRequired,
};

export default QuestionBoxContainer;
