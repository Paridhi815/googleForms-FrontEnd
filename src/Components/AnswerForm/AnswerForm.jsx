import React from 'react';
import PropTypes from 'prop-types';
import './AnswerForm.css';
import SubmitButton from '../SubmitButton/SubmitButton';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: {},
    };
  }


  onAnswerChange(event, questionId) {
    const answerArr = Object.assign({}, this.state.answer);
    answerArr[questionId] = event.target.value;
    this.setState({
      answer: answerArr,
    });
    console.log(this.state.answer);
  }

  displayQuestions=() => (
    this.props.questions.map(question => (
      <div>
        <div>
          {question.questionText}
        </div>
        <input
          type="text"
          className="Answer-Input"
          placeholder="Your Answer"
          onChange={event => this.onAnswerChange(event, question.id)}
        />
      </div>
    ))
  )

  render() {
    return (
      <div className="AnswerForm">
        {this.props.formTitle}
        {this.displayQuestions()}

        <SubmitButton
          onSubmit={() => this.props.onAnswerSubmit()}
        />
      </div>
    );
  }
}

AnswerForm.propTypes = {
  formTitle: PropTypes.string,
  questions: PropTypes.array.isRequired,
  onAnswerSubmit: PropTypes.func.isRequired,
};

AnswerForm.defaultProps = {
  formTitle: '',
};

export default AnswerForm;
