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
      isRequiredOrNot: {},
      disable: true,
    };
  }
  onAnswerChange=(event, questionId) => {
    const ans = event.target.value;
    if (this.state.isRequiredOrNot[questionId]) {
      if (ans.length === 0) {
        this.state.isRequiredOrNot[questionId] = true;
      } else {
        this.state.isRequiredOrNot[questionId] = false;
      }
    }
    const answerArr = Object.assign({}, this.state.answer);
    answerArr[questionId] = ans;
    this.setState({
      answer: answerArr,
    });
    console.log(this.state.answer);
    this.checkForDisable();
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

  checkForDisable=() => {
    for (let i = 0; i < Object.values(this.state.isRequiredOrNot).length; i += 1) {
      if (Object.values(this.state.isRequiredOrNot)[i] === true) {
        this.setState({
          disable: true,
        });
        return;
      }
      this.setState({
        disable: false,
      });
      return;
    }
    this.setState({
      disable: false,
    });
  }

  questionIsRequiredHandler=(questionId, isRequired) => {
    if (isRequired === true) {
      this.state.isRequiredOrNot[questionId] = true;
    }
  }


  displayQuestions=() => (
    this.props.answerQuestions.map(question => (
      <div>
        <div className="AnswerForm-questions">
          {question.questionText}
        </div>
        {this.displayAnswers(question.questionType, question.id)}
        {this.questionIsRequiredHandler(question.id, question.isRequired)}
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
          disableValue={this.state.disable}
          onSubmit={() => this.onAnswerSubmitHandler()}
        />
      </div>
    );
  }
}

AnswerForm.propTypes = {
  formTitle: PropTypes.string,
  answerQuestions: PropTypes.array.isRequired,
  onAnswerSubmit: PropTypes.func.isRequired,
};

AnswerForm.defaultProps = {
  formTitle: '',
};

export default AnswerForm;
