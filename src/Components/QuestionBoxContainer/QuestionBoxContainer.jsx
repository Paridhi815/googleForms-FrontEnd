import React from 'react';
import PropTypes from 'prop-types';
import './QuestionBoxContainer.css';
import QuestionBox from '../QuestionBox/QuestionBox';
import QuestionOperations from '../QuestionOperations/QuestionOperations';

const QuestionBoxContainer = props => (
  <div className="QuestionBoxContainer">
    <QuestionBox
      questionNumber={props.questionNumber}
      questionText={props.questionText}
      questionType={props.questionType}
      onQuestionChange={props.onQuestionChange}
    />
    <QuestionOperations
      questionNumber={props.questionNumber}
      isRequired={props.isRequired}
      onQuestionChange={props.onQuestionChange}
      onQuestionDelete={props.onQuestionDelete}
    />
  </div>
);

QuestionBoxContainer.propTypes = {
  onQuestionChange: PropTypes.func.isRequired,
  questionNumber: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default QuestionBoxContainer;
