import React from 'react';
import PropTypes from 'prop-types';
import './AvailableForms.css';

const AvailableForms = props => (
  <div className="Available-Form-Container">

    <div
      className="AvailableForms"
      onClick={() => props.onOpenFormToAnswer(props.formId, props.formTitle)}
    >

      {props.formTitle}
    </div>
    <div >
      <button
        className="Response-Button"
        onClick={() => props.onResponseClick()}
      >
      Responses
      </button>
    </div>
  </div>
);

AvailableForms.propTypes = {
  onResponseClick: PropTypes.func.isRequired,
  formTitle: PropTypes.string,
  onOpenFormToAnswer: PropTypes.func.isRequired,
  formId: PropTypes.number,
};

AvailableForms.defaultProps = {
  formTitle: '',
  formId: 0,
};

export default AvailableForms;
