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

  populateQuestions() {
    return this.state.questions.map((question, index) => (
      <div className="Question-Repeat-Component">
        <QuestionBoxContainer
          questionNumber={index}

          onQuestionChange={this.onQuestionChange}
        />
      </div>
    ));
  }

  render() {
    return (
      <div className="FormContainerInner">
        <FormHeader
          onAddClick={() => this.onAdd()}
          formTitle={this.state.formTitle}
          onSubmitHandler={() => this.onSubmitHandler()}
          onFormTitleChange={event => this.onFormTitleChange(event)}
        />
        {/* <QuestionBoxContainer /> */}
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
