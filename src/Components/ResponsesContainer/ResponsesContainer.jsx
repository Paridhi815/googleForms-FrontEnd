import React from 'react';
import PropTypes from 'prop-types';
import './ResponsesContainer.css';
import Header from '../Header/Header';
import Body from '../Body/Body';
import FormContainerOuter from '../FormContainerOuter/FormContainerOuter';
import ResponseBox from '../ResponseBox/ResponseBox';

const ResponsesContainer = props => (
  <div className="ResponsesContainer">
    <div className="ResponsesContainer-Header" >
      <Header />
    </div>
    <div className="ResponsesContainer-Body">
      <Body>

        <FormContainerOuter >
          <ResponseBox
            questionResponses={props.questionResponses}
            formTitle={props.formTitle}
          />
        </FormContainerOuter>
      </Body >
    </div>
  </div>
);

ResponsesContainer.propTypes = {
  questionResponses: PropTypes.array.isRequired,
  formTitle: PropTypes.string,
};

ResponsesContainer.defaultProps = {
  formTitle: '',
};

export default ResponsesContainer;
