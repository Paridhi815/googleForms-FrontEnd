import React from 'react';
import PropTypes from 'prop-types';
import './QuestionTypeDropdown.css';

const QuestionTypeDropdown = props => (
  <div className="QuestionTypeDropdown">
    <select
      name="Question-Type"
      onChange={event => props.onQuestionTypeChange(event)}
    >
      <option value="Date" ><i className="material-icons">date_range</i>Date</option>
      <option value="Short answer"><i className="material-icons">short_text</i>Short answer</option>
      <option value="Paragraph"><i className="material-icons">view_headline</i>Paragraph</option>
    </select>
  </div>
);

QuestionTypeDropdown.propTypes = {
  onQuestionTypeChange: PropTypes.func.isRequired,
};

QuestionTypeDropdown.defaultProps = {
};

export default QuestionTypeDropdown;
