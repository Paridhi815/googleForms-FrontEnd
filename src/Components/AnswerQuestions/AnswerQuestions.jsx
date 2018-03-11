import React from 'react';
import PropTypes from 'prop-types';
import './AnswerQuestions.css';
import Header from '../Header/Header';
import Body from '../Body/Body';
import FormContainerOuter from '../FormContainerOuter/FormContainerOuter';
import AnswerForm from '../AnswerForm/AnswerForm';

const AnswerQuestions = props => (
  <div className="AnswerQuestions">
    <div className="AnswerQuestions-Header" >
      <Header />
    </div>
    <FormContainerOuter >
      <AnswerForm
        onAnswerSubmit={() => props.onAnswerSubmit()}
      />
    </FormContainerOuter>
    <div className="AnswerQuestions-Body">
      <Body />
    </div>
  </div>
);

AnswerQuestions.propTypes = {
  onAnswerSubmit: PropTypes.func.isRequired,
//   name: PropTypes.string,
};

AnswerQuestions.defaultProps = {
//   title: '',
//   hello: '',
//   name: '',
};

export default AnswerQuestions;
