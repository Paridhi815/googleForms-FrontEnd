import React from 'react';
import PropTypes from 'prop-types';
import './Responses.css';

class Responses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  responsesDisplay() {
    return this.props.responses.map(eachAnswer => (
      <div className="Responses">
        {eachAnswer.answerText}
      </div>
    ));
  }

  render() {
    return (
      <div className="Responses">
        {this.responsesDisplay()}
      </div>
    );
  }
}

Responses.propTypes = {
  responses: PropTypes.array.isRequired,
};

Responses.defaultProps = {
};

export default Responses;
