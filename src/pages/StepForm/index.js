import React, { Component } from 'react';
import './step-form.css';

class StepForm extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      formData: {
        name: '',
        age: '',
        phone: '',
        fatherName: '',
        motherName: '',
        address: '',
      },
      validationErrors: {},
      submittedData: null,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  nextStep = () => {
    if (this.validateStep()) {
      this.setState((prevState) => ({
        step: prevState.step + 1,
      }));
    }
  };

  prevStep = () => {
    this.setState((prevState) => ({
      step: prevState.step - 1,
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateStep()) {
      const dataAsArray = [this.state.formData];
      this.setState({ submittedData: dataAsArray });
    }
  };
  

  renderSubmittedData() {
    if (this.state.submittedData) {
      return (
        <div className="submitted-data">
          <h2>Submitted Data:</h2>
          <ul>
            {this.state.submittedData.map((data, index) => (
              <li key={index}>
                <h3>Step {index + 1}</h3>
                <ul>
                  {Object.entries(data).map(([key, value]) => (
                    <li key={key}>
                      <strong>{key}:</strong> {value}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return null;
  }
  
  validateStep = () => {
    const { formData } = this.state;
    const validationErrors = {};

    if (this.state.step === 1) {
      if (formData.name.trim() === '' || formData.age.trim() === '' || formData.phone.trim() === '') {
        validationErrors.step1 = 'Please fill in all fields.';
      }
    } else if (this.state.step === 2) {
      if (formData.fatherName.trim() === '' || formData.motherName.trim() === '') {
        validationErrors.step2 = 'Please fill in all fields.';
      }
    } else if (this.state.step === 3) {
      if (formData.address.trim() === '') {
        validationErrors.step3 = 'Please fill in the address field.';
      }
    }

    if (Object.keys(validationErrors).length === 0) {
      this.setState({ validationErrors: {} });
      return true;
    } else {
      this.setState({ validationErrors });
      return false;
    }
  };

  render() {
    const { step, formData, validationErrors, submittedData } = this.state;

    return (
      <div className="admission-form">
        <form onSubmit={this.handleSubmit}>
          {step === 1 && (
            <div>
              <h1>Personal Details</h1>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={this.handleInputChange}
                placeholder="Name"
              />
              <input
                type="text"
                name="age"
                value={formData.age}
                onChange={this.handleInputChange}
                placeholder="Age"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={this.handleInputChange}
                placeholder="Phone"
              />
              {validationErrors.step1 && <p className="error">{validationErrors.step1}</p>}
              <button onClick={this.nextStep}>Next</button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h1>Guardian Details</h1>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={this.handleInputChange}
                placeholder="Father's Name"
              />
              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={this.handleInputChange}
                placeholder="Mother's Name"
              />
              {validationErrors.step2 && <p className="error">{validationErrors.step2}</p>}
              <button onClick={this.prevStep}>Previous</button>
              <button onClick={this.nextStep}>Next</button>
            </div>
          )}

          {step === 3 && (
            <div>
              <h1>Residential Details</h1>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={this.handleInputChange}
                placeholder="Address"
              />
              {validationErrors.step3 && <p className="error">{validationErrors.step3}</p>}
              <button onClick={this.prevStep}>Previous</button>
              <button type="submit">Submit</button>
            </div>
          )}
        </form>
        {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Data:</h2>
          <ul>
            {submittedData.map((data, index) => (
              <li key={index}>
                <ul>
                  {Object.entries(data).map(([key, value]) => (
                    <li key={key}>
                      <strong>{key}:</strong> {value}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
    );
  }
}

export default StepForm;
