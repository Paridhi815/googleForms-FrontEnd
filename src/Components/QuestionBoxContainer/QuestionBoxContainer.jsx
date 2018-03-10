import React from 'react';
// import PropTypes from 'prop-types';
import './QuestionBoxContainer.css';
import QuestionBox from '../QuestionBox/QuestionBox';

const QuestionBoxContainer = () => (
  <div className="QuestionBoxContainer">
    <QuestionBox />
  </div>
);

QuestionBoxContainer.propTypes = {
};

QuestionBoxContainer.defaultProps = {
};

export default QuestionBoxContainer;
