import React from 'react';
import PropTypes from 'prop-types';
import './FormHeader.css';
import PlusAddButton from '../PlusAddButton/PlusAddButton';
import SubmitButton from '../SubmitButton/SubmitButton';

const FormHeader = props => (
  <div className="FormHeader">
    <div className="Form-Submit">
      <SubmitButton
        onSubmit={() => props.onSubmit()}
      />
    </div>
    <div className="Form-Input">
      <input
        type="text"
        className="Form-Title-Input"
        placeholder="Untitled Form"
      />
    </div>
    <div className="Add-Button">
      <PlusAddButton
        classValue="purple"
        onAddClick={() => props.onAddClick()}
      />
    </div>
  </div>
);

FormHeader.propTypes = {
  onAddClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

FormHeader.defaultProps = {
};

export default FormHeader;
