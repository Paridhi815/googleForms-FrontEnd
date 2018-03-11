import React from 'react';
import './App.css';
import CreateForm from '../CreateForm/CreateForm';
import DisplayForms from '../DisplayForms/DisplayForms';
import AnswerQuestions from '../AnswerQuestions/AnswerQuestions';
import ResponsesContainer from '../ResponsesContainer/ResponsesContainer';
// const Axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 0,
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

  onOpenFormToAnswer() {
    this.setState({
      pageNumber: 2,
    });
  }

  onResponseClick() {
    this.setState({
      pageNumber: 3,
    });
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
            onOpenFormToAnswer={() => this.onOpenFormToAnswer()}
            onResponseClick={() => this.onResponseClick()}
          />
        </div>
      );
    } else if (this.state.pageNumber === 2) {
      return (
        <AnswerQuestions
          onAnswerSubmit={() => this.onAnswerSubmit()}
        />
      );
    }
    return (
      <div>
        <ResponsesContainer />
      </div>
    );
  }
}

export default App;
