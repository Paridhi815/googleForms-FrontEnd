import React from 'react';
import './App.css';
import CreateForm from '../CreateForm/CreateForm';
import DisplayForms from '../DisplayForms/DisplayForms';
import AnswerQuestions from '../AnswerQuestions/AnswerQuestions';
import ResponsesContainer from '../ResponsesContainer/ResponsesContainer';

const Axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 0,
      formTitle: '',
      questions: [],
      questionResponses: [],
      formName: '',
    };
  }

  onSubmit() {
    this.setState({
      pageNumber: 0,
    });
  }

  onCreateForm() {
    this.setState({
      pageNumber: 1,
    });
  }


  onAnswerSubmit() {
    this.setState({
      pageNumber: 0,
    });
  }

  onOpenFormToAnswer(formId, formTitle) {
    Axios({
      method: 'GET',
      url: `/forms/${formId}`,
    }).then((questionArray) => {
      this.setState({
        questions: questionArray.data,
        formTitle,
        pageNumber: 2,
      });
    });
    console.log('q', this.state.questions);
  }

  onResponseClick=(formId) => {
    Axios({
      method: 'GET',
      url: `/responses/${formId}`,
    }).then((response) => {
      this.setState({
        pageNumber: 3,
        questionResponses: response.data[0].questions,
        formName: response.data[0].title,
      });
    });
    console.log('res', this.state.questionResponses);
  }

  render() {
    if (this.state.pageNumber === 1) {
      return (
        <div className="App">
          <CreateForm
            onSubmit={() => this.onSubmit()}
          />
        </div>
      );
    } else if (this.state.pageNumber === 0) {
      return (
        <div>
          <DisplayForms
            onCreateForm={() => this.onCreateForm()}
            onOpenFormToAnswer={(formId, formTitle) => this.onOpenFormToAnswer(formId, formTitle)}
            onResponseClick={formId => this.onResponseClick(formId)}
          />
        </div>
      );
    } else if (this.state.pageNumber === 2) {
      return (
        <AnswerQuestions
          onAnswerSubmit={() => this.onAnswerSubmit()}
          formTitle={this.state.formTitle}
          questions={this.state.questions}
        />
      );
    }
    return (
      <ResponsesContainer
        questionResponses={this.state.questionResponses}
        formTitle={this.state.formName}
      />
    );
  }
}

export default App;
