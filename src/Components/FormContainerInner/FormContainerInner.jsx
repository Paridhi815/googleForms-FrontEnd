import React from 'react';
// import PropTypes from 'prop-types';
import './FormContainerInner.css';
import FormHeader from '../FormHeader/FormHeader';
import QuestionBoxContainer from '../QuestionBoxContainer/QuestionBoxContainer';

const FormContainerInner = () => (
  <div className="FormContainerInner">
    <FormHeader />
    <QuestionBoxContainer />
  </div>
);

FormContainerInner.propTypes = {
};

FormContainerInner.defaultProps = {
};

export default FormContainerInner;
