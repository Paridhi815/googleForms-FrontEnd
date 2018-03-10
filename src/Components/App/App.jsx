import React from 'react';
import './App.css';

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
        <div>
                  Paridhi
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
