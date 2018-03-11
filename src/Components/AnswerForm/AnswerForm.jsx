import React from 'react';
import PropTypes from 'prop-types';
import './AnswerForm.css';
import SubmitButton from '../SubmitButton/SubmitButton';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formTitle: 'hello',
      questions: [{
        questionText: 'pari',
        isRequired: false,
        questionType: 'date',
      }],
      answer: '',
    };
  }


  onAnswerChange(event) {
    this.setState({
      answer: event.target.value,
    });
    console.log(this.state.answer);
  }

  render() {
    return (
      <div className="AnswerForm">
        <input
          type="text"
          className="Answer-Input"
          placeholder="Your Answer"
          onChange={event => this.onAnswerChange(event)}
        />
        <SubmitButton
          onSubmit={() => this.props.onAnswerSubmit()}
        />
      </div>
    );
  }
}

AnswerForm.propTypes = {
  onAnswerSubmit: PropTypes.func.isRequired,
};

AnswerForm.defaultProps = {
};

export default AnswerForm;
