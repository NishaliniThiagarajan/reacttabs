import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Success = ({ formData }) => {
  const [catFact, setCatFact] = useState('');

  useEffect(() => {
    axios.get('https://catfact.ninja/fact')
      .then(response => setCatFact(response.data.fact))
      .catch(error => console.error('Error fetching cat fact:', error));
  }, []);

  return (
    <>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button className="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="false">Step1</button>
          <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Step2</button>
          <button className="nav-link active" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="true">Success</button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
          <h2>Congratulations, your info is registered,</h2>
          <p><strong>First Name:</strong> {formData.firstName}</p>
          <p><strong>Last Name:</strong> {formData.lastName}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <h3>Here's a fact for you:</h3>
          <p>{catFact}</p>
        </div>
      </div>
    </>
  );
};

export default Success;
