import React from 'react';
import PropTypes from 'prop-types';
import './QuestionBox.css';

class QuestionBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionText: props.questionText,
      questionNumber: props.questionNumber,
      questionType: props.questionType,
    };
  }

  handleOuestionTextChange(event) {
    this.setState({
      questionText: event.target.value,
    }, () => {
      this.props.onQuestionChange(this.state.questionText, 'questionText', this.state.questionNumber);
    });
  }

  handleOuestionTypeChange(event) {
    this.setState({
      questionType: event.target.value,
    }, () => {
      this.props.onQuestionChange(this.state.questionType, 'questionType', this.state.questionNumber);
    });
  }

  render() {
    return (
      <div className="QuestionBox">
        <div className="Question-Input">
          <input
            type="text"
            name="questionText"
            value={this.props.questionText}
            className="Question-Title-Input"
            placeholder="Untitled Question"
            onChange={event => this.handleOuestionTextChange(event)}
          />
        </div>
        <div className="Dropdown-Countdown">
          <div className="QuestionTypeDropdown">
            <select
              value={this.props.questionType}
              name="questionType"
              onChange={event => this.handleOuestionTypeChange(event)}
            >
              <option value="Date" ><i className="material-icons">date_range</i>Date</option>
              <option value="Short answer"><i className="material-icons">short_text</i>Short answer</option>
              <option value="Paragraph"><i className="material-icons">view_headline</i>Paragraph</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

QuestionBox.propTypes = {
  onQuestionChange: PropTypes.func.isRequired,
  questionNumber: PropTypes.number.isRequired,
};

export default QuestionBox;
