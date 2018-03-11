import React from 'react';
import PropTypes from 'prop-types';
import './AvailableForms.css';

const AvailableForms = props => (
  <div className="Available-Form-Container">
    <p className="Label">Available Forms</p>
    <div className="AvailableForms">

      {props.formTitle}
    </div>
  </div>
);

AvailableForms.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
  formTitle: PropTypes.string,
//   name: PropTypes.string,
};

AvailableForms.defaultProps = {
//   title: '',
  formTitle: '',
//   name: '',
};

export default AvailableForms;
