import React from 'react';
import PropTypes from 'prop-types';
import './CreateForm.css';
import Header from '../Header/Header';
import Body from '../Body/Body';
import FormContainerOuter from '../FormContainerOuter/FormContainerOuter';
import FormContainerInner from '../FormContainerInner/FormContainerInner';

const CreateForm = props => (
  <div className="CreateForm">
    <div className="CreateForm-Header" >
      <Header />
    </div>

    <div className="CreateForm-Body">
      <Body>
        <FormContainerOuter >
          <FormContainerInner
            onSubmit={() => props.onSubmit()}
          />
        </FormContainerOuter>
      </Body >
    </div>
  </div>
);

CreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
//   hello: PropTypes.string,
//   name: PropTypes.string,
};

CreateForm.defaultProps = {
//   title: '',
//   hello: '',
//   name: '',
};

export default CreateForm;
