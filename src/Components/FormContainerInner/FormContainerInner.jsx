import React from 'react';
import PropTypes from 'prop-types';
import './FormContainerInner.css';
import FormHeader from '../FormHeader/FormHeader';
import QuestionBoxContainer from '../QuestionBoxContainer/QuestionBoxContainer';

const Axios = require('axios');

class FormContainerInner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formTitle: '',
      questions: [{
        questionText: '',
        isRequired: false,
        questionType: 'date',
      }],
    };
    this.onQuestionChange = this.onQuestionChange.bind(this);
  }

  onQuestionDelete=(index) => {
    let questionsArray = [...this.state.questions];
    const questionsArrayFirstPart = questionsArray.slice(0, index);
    const questionsArraySecondPart = questionsArray.slice(index + 1, questionsArray.length);
    questionsArray = questionsArrayFirstPart.concat(questionsArraySecondPart);
    this.setState({
      questions: questionsArray,
    });
    console.log(this.state.questions);
  }

  onSubmitHandler() {
    Axios({
      method: 'POST',
      url: '/forms',
      data: {
        formTitle: this.state.formTitle,
        questions: this.state.questions,
      },
    }).then(() => {
      this.props.onSubmit();
    });
  }

  onAdd() {
    const newQuestion = this.state.questions.concat({
      questionText: '',
      isRequired: false,
      questionType: 'date',
    });
    this.setState({
      questions: newQuestion,
    });
  }


  onFormTitleChange(event) {
    this.setState({
      formTitle: event.target.value,
    });
    console.log('formTitle', this.state.formTitle);
  }

  onQuestionChange(value, key, index) {
    const quesArr = this.state.questions.slice();
    quesArr[index][key] = value;
    this.setState({
      questions: quesArr,
    });
  }

  populateQuestions = () => this.state.questions.map((question, index) => (
    <div className="Question-Repeat-Component">
      <QuestionBoxContainer
        questionNumber={index}
        questionText={question.questionText}
        isRequired={question.isRequired}
        questionType={question.questionType}
        onQuestionChange={this.onQuestionChange}
        onQuestionDelete={this.onQuestionDelete}
      />
    </div>
  ))

  render() {
    return (
      <div className="FormContainerInner">
        <FormHeader
          onAddClick={() => this.onAdd()}
          onSubmitHandler={() => this.onSubmitHandler()}
          onFormTitleChange={event => this.onFormTitleChange(event)}
        />
        {this.populateQuestions()}
      </div>
    );
  }
}

FormContainerInner.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

FormContainerInner.defaultProps = {
};

export default FormContainerInner;
