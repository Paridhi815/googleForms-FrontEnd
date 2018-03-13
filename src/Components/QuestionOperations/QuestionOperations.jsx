import React from 'react';
import PropTypes from 'prop-types';
import './QuestionOperations.css';

class QuestionOperations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: props.questionNumber,
      questionIsRequired: props.isRequired,
    };
  }
  handleIsRequiredChange(event) {
    this.setState({
      questionIsRequired: event.target.checked,
    }, () => {
      this.props.onQuestionChange(this.state.questionIsRequired, 'isRequired', this.state.questionNumber);
    });
  }

  render() {
    return (
      <div className="QuestionOperations">
        <button
          className="Question-Delete-Button"
          onClick={() => this.props.onDelete()}
        >
          <i className="material-icons Delete-Button">delete</i>
        </button>
        <div className="Required-Check">
          <input
            type="checkbox"
            name="isRequired"
            value={this.state.questionIsRequired}
            className="Check-ifRequired"
            onChange={event => this.handleIsRequiredChange(event)}
          />
    Required
        </div>

      </div>
    );
  }
}

QuestionOperations.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onQuestionChange: PropTypes.func.isRequired,
  questionNumber: PropTypes.number.isRequired,
  isRequired: PropTypes.bool.isRequired,
};

QuestionOperations.defaultProps = {
};

export default QuestionOperations;

