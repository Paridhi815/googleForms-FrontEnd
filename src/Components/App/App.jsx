import React from 'react';
import './App.css';
import CreateForm from '../CreateForm/CreateForm';
// const Axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 0,
    };
  }
  render() {
    if (this.state.pageNumber === 0) {
      return (
        <div className="App">
          {/* Paridhi */}
          <CreateForm />
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
