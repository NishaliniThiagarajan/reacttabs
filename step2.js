import React, { useState } from 'react';
import { Form, Button, ProgressBar } from 'react-bootstrap';

const Step2 = ({ nextStep, prevStep, handleChange, formData, uploadProgress }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      nextStep();
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <nav className="w-100">
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button className="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="false">Step1</button>
          <button className="nav-link active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="true">Step2</button>
          <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Success</button>
        </div>
      </nav>
      <div className="tab-content w-100" id="nav-tabContent">
        <div className="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">...</div>
        <div className="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
          <div className="container d-flex flex-column align-items-center">
            <div className="progress w-50" style={{ height: '20px', marginBottom: '10px' }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${uploadProgress}%` }}
                aria-valuenow={uploadProgress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {uploadProgress}%
              </div>
            </div>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="w-50">
              <Form.Group controlId="formFirstName" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  required
                  onChange={handleChange('firstName')}
                  defaultValue={formData.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter first name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formLastName" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  required
                  onChange={handleChange('lastName')}
                  defaultValue={formData.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter last name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  required
                  onChange={handleChange('email')}
                  defaultValue={formData.email}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email.
                </Form.Control.Feedback>
              </Form.Group>
              <div className="d-flex justify-content-between">
                <Button variant="secondary" onClick={prevStep}>Back</Button>
                <Button variant="primary" type="submit">Next</Button>
              </div>
            </Form>
          </div>
        </div>
        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
      </div>
    </div>
  );
};

export default Step2;
