import React from 'react';
import PropTypes from 'prop-types';
import './ResponseBox.css';
import Responses from '../Responses/Responses';

const ResponseBox = props => (
  <div className="ResponseBox">
    <div className="Response-FormTitle">
      {props.formTitle}
    </div>
    {
        props.questionResponses.map(eachQuestionResponse =>
            (
              <div>
                <div className="Response-Question">
                  {eachQuestionResponse.questionText}
                  <br />
                  <p className="Last">
                  Last 7 Responses
                  </p>
                </div>
                <div className="Response-Container">
                  <Responses
                    responses={eachQuestionResponse.answers}
                  />
                </div>
              </div>
            ))
    }
  </div>
);

ResponseBox.propTypes = {
  questionResponses: PropTypes.array.isRequired,
  formTitle: PropTypes.string,
};

ResponseBox.defaultProps = {
  formTitle: '',
};

export default ResponseBox;
