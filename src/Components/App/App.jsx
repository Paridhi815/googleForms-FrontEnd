import React from 'react';
import './App.css';
import CreateForm from '../CreateForm/CreateForm';
import DisplayForms from '../DisplayForms/DisplayForms';
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
          />
        </div>
      );
    }
    return (
      <div>
            Mohindra
      </div>
    );
  }
}

export default App;
