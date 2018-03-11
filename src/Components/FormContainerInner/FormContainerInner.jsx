import React from 'react';
import PropTypes from 'prop-types';
import './FormContainerInner.css';
import FormHeader from '../FormHeader/FormHeader';
import QuestionBoxContainer from '../QuestionBoxContainer/QuestionBoxContainer';
import QuestionOperations from '../QuestionOperations/QuestionOperations';

class FormContainerInner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formTitle: 'hello',
      questions: [{
        questionText: 'pari',
        isRequired: false,
        questionType: 'date',
      }],
      questionText: '',
      questionType: '',
    };
  }

  onAdd() {
    const newQuestion = this.state.questions.concat({
      questionText: 'paridhi',
      isRequired: true,
      questionType: 'short answer',
    });
    this.setState({
      questions: newQuestion,
    });
  }


  onFormTitleChange(event) {
    this.setState({
      formTitle: event.target.value,
    });
  }

  onQuestionTextChange(event) {
    // const questionsObj = {};
    // questionsObj.questionText = event.target.value;
    // let questionsArray = [];
    // questionsArray = this.state.questions;
    // questionsArray.concat(questionsObj);
    this.setState({
      questionText: event.target.value,
    });
    console.log('qtext', this.state.questionText);
  }

  onQuestionTypeChange(event) {
    this.setState({
      questionType: event.target.value,
    });
    console.log('qtype', this.state.questionType);
  }

  populateQuestions() {
    return this.state.questions.map(question => (
      <div className="Question-Repeat-Component">
        <QuestionBoxContainer
          questionText={question.questionText}
          questionType={question.questionType}
          isRequired={question.isRequired}
          onQuestionTextChange={event => this.onQuestionTextChange(event)}
          onQuestionTypeChange={event => this.onQuestionTypeChange(event)}
        />

        <QuestionOperations />
      </div>
    ));
  }
  render() {
    return (
      <div className="FormContainerInner">
        <FormHeader
          onAddClick={() => this.onAdd()}
          formTitle={this.state.formTitle}
          onSubmit={() => this.props.onSubmit()}
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
