import React from 'react';
import PropTypes from 'prop-types';
import './FormContainerOuter.css';

const FormContainerOuter = props => (
  <div className="FormContainerOuter">
    {props.children}
    {/* <FormContainerInner /> */}
  </div>
);

FormContainerOuter.propTypes = {
  children: PropTypes.node.isRequired,
};

FormContainerOuter.defaultProps = {
};

export default FormContainerOuter;
