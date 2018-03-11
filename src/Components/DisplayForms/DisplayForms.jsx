import React from 'react';
// import PropTypes from 'prop-types';
import './DisplayForms.css';
import Header from '../Header/Header';
import Body from '../Body/Body';
import AvailableForms from '../AvailableForms/AvailableForms';

const DisplayForms = () => (
  <div className="DisplayForms">
    <div className="DisplayForms-Header" >
      <Header />
    </div>
    <div className="DisplayForms-Body">
      <Body >
        <AvailableForms />
      </Body>
    </div>
  </div>
);

DisplayForms.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   hello: PropTypes.string,
//   name: PropTypes.string,
};

DisplayForms.defaultProps = {
//   title: '',
//   hello: '',
//   name: '',
};

export default DisplayForms;
