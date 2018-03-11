import React from 'react';
// import PropTypes from 'prop-types';
import './ResponsesContainer.css';
import Header from '../Header/Header';
import Body from '../Body/Body';
import FormContainerOuter from '../FormContainerOuter/FormContainerOuter';
import Responses from '../Responses/Responses';

const ResponsesContainer = () => (
  <div className="ResponsesContainer">
    <div className="ResponsesContainer-Header" >
      <Header />
    </div>
    <FormContainerOuter >
      <Responses />
    </FormContainerOuter>
    <div className="ResponsesContainer-Body">
      <Body />
    </div>
  </div>
);

ResponsesContainer.propTypes = {
//   onAnswerSubmit: PropTypes.func.isRequired,
//   name: PropTypes.string,
};

ResponsesContainer.defaultProps = {
//   title: '',
//   hello: '',
//   name: '',
};

export default ResponsesContainer;
