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
      pageNumber: 1,
    });
  }


  render() {
    if (this.state.pageNumber === 0) {
      return (
        <div className="App">
          {/* Paridhi */}
          <CreateForm
            onSubmit={() => this.onSubmit()}
          />
        </div>
      );
    } else if (this.state.pageNumber === 1) {
      return (
        <div>
          <DisplayForms />
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
