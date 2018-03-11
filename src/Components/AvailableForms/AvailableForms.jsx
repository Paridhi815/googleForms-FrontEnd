import React from 'react';
import PropTypes from 'prop-types';
import './AvailableForms.css';

const AvailableForms = props => (
  <div className="Available-Form-Container">

    <div
      className="AvailableForms"
      onClick={() => props.onOpenFormToAnswer()}
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
//   name: PropTypes.string,
};

AvailableForms.defaultProps = {
//   title: '',
  formTitle: '',
//   name: '',
};

export default AvailableForms;
