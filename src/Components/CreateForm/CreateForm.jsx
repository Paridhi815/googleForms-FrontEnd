import React from 'react';
// import PropTypes from 'prop-types';
import './CreateForm.css';
import Header from '../Header/Header';
import Body from '../Body/Body';
import FormContainerOuter from '../FormContainerOuter/FormContainerOuter';
import FormContainerInner from '../FormContainerInner/FormContainerInner';

const CreateForm = () => (
  <div className="CreateForm">
    <div className="CreateForm-Header" >
      <Header />
    </div>
    <FormContainerOuter >
      <FormContainerInner />
    </FormContainerOuter>
    <div className="CreateForm-Body">
      <Body />
    </div>
  </div>
);

CreateForm.propTypes = {
//   title: PropTypes.string,
//   hello: PropTypes.string,
//   name: PropTypes.string,
};

CreateForm.defaultProps = {
//   title: '',
//   hello: '',
//   name: '',
};

export default CreateForm;
