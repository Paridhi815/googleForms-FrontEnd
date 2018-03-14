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
        formTitle={props.formTitle}
        answerQuestions={props.answerQuestions}
      />
    </FormContainerOuter>
    <div className="AnswerQuestions-Body">
      <Body />
    </div>
  </div>
);

AnswerQuestions.propTypes = {
  onAnswerSubmit: PropTypes.func.isRequired,
  formTitle: PropTypes.string,
  answerQuestions: PropTypes.array.isRequired,
};

AnswerQuestions.defaultProps = {
  formTitle: '',
};

export default AnswerQuestions;
