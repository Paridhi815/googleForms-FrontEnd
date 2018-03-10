import React from 'react';
// import PropTypes from 'prop-types';
import './FormContainerOuter.css';
import FormContainerInner from '../FormContainerInner/FormContainerInner';

const FormContainerOuter = () => (
  <div className="FormContainerOuter">
    <FormContainerInner />
  </div>
);

FormContainerOuter.propTypes = {
};

FormContainerOuter.defaultProps = {
};

export default FormContainerOuter;
