import React from 'react';
// import PropTypes from 'prop-types';
import './FormHeader.css';
import PlusAddButton from '../PlusAddButton/PlusAddButton';
import SubmitButton from '../SubmitButton/SubmitButton';

const FormHeader = () => (
  <div className="FormHeader">
    <div className="Form-Submit">
      <SubmitButton />
    </div>
    <div className="Add-Button">
      <PlusAddButton />
    </div>
  </div>
);

FormHeader.propTypes = {
};

FormHeader.defaultProps = {
};

export default FormHeader;
