import React from 'react';
import PropTypes from 'prop-types';
import './DisplayForms.css';
import Header from '../Header/Header';
import Body from '../Body/Body';
import AvailableForms from '../AvailableForms/AvailableForms';
import PlusAddButton from '../PlusAddButton/PlusAddButton';

const Axios = require('axios');

class DisplayForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allForms: [],
    };
  }

  componentDidMount() {
    Axios({
      method: 'GET',
      url: '/forms',
    }).then((allFormsArray) => {
      this.setState({
        allForms: allFormsArray.data,
      });
    });
    console.log(this.state.allForms);
  }

  render() {
    return (
      <div className="DisplayForms">
        <div className="DisplayForms-Header" >
          <Header >
            <div className="New-Form-Button">
              <PlusAddButton
                classValue="white"
                onAddClick={() => this.props.onCreateForm()}
              />
              <p className="Create-Form-Label">Create Form</p>
            </div>
          </Header>
        </div>
        <div className="DisplayForms-Body">
          <Body >
            <p className="Label">Available Forms</p>
            <div className="All-Forms">
              {this.state.allForms.map(eachForm => (
                <AvailableForms
                  formTitle={eachForm.title}
                  formId={eachForm.id}
                  onOpenFormToAnswer={(formId, formTitle) =>
                    this.props.onOpenFormToAnswer(formId, formTitle)}
                  onResponseClick={formId => this.props.onResponseClick(formId)}
                />
                ))}
              <AvailableForms />
            </div>
          </Body>
        </div>
      </div>
    );
  }
}
DisplayForms.propTypes = {
  onCreateForm: PropTypes.func.isRequired,
  onOpenFormToAnswer: PropTypes.func.isRequired,
  onResponseClick: PropTypes.func.isRequired,
};

export default DisplayForms;
