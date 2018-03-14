import React from 'react';
import PropTypes from 'prop-types';
import './AnswerForm.css';
import SubmitButton from '../SubmitButton/SubmitButton';

const Axios = require('axios');

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

  onAnswerSubmitHandler=() => {
    Axios({
      method: 'POST',
      url: '/responses',
      data: {
        questionIdWithAnswerObject: this.state.answer,
      },
    }).then(() => {
      this.props.onAnswerSubmit();
    });
  }

  displayQuestions=() => (
    this.props.questions.map(question => (
      <div>
        <div className="AnswerForm-questions">
          {question.questionText}
        </div>
        {this.displayAnswers(question.questionType, question.id)}
      </div>
    ))
  )

  displayAnswers=(questionType, questionId) => {
    if (questionType === 'Short answer') {
      return (
        <input
          type="text"
          className="Answer-Input"
          placeholder="Your Answer"
          onChange={event => this.onAnswerChange(event, questionId)}
        />
      );
    } else if (questionType === 'date') {
      return (
        <input
          type="date"
          className="Answer-Input"
          placeholder="Your Answer"
          onChange={event => this.onAnswerChange(event, questionId)}
        />
      );
    }

    return (
      <textarea
        className="Answer-Input"
        placeholder="Your Answer"
        onChange={event => this.onAnswerChange(event, questionId)}
      />
    );
  }

  render() {
    return (
      <div className="AnswerForm">
        <div className="AnswerForm-FormTitle">
          {this.props.formTitle}
        </div>
        {this.displayQuestions()}

        <SubmitButton
          onSubmit={() => this.onAnswerSubmitHandler()}
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
