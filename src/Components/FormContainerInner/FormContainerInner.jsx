import React from 'react';
import PropTypes from 'prop-types';
import './FormContainerInner.css';
import FormHeader from '../FormHeader/FormHeader';
import QuestionBoxContainer from '../QuestionBoxContainer/QuestionBoxContainer';

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


  populateQuestions() {
    return this.state.questions.map(question => (
      <QuestionBoxContainer
        questionText={question.questionText}
        questionType={question.questionType}
        isRequired={question.isRequired}
      />
    ));
  }


  render() {
    return (
      <div className="FormContainerInner">
        <FormHeader
          onAddClick={() => this.onAdd()}
          formTitle={this.state.formTitle}
          onSubmit={() => this.props.onSubmit()}
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
