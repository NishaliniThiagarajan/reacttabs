import React, { useState } from 'react';
import Step1 from './Component/Step1/step1';
import Step2 from './Component/Step2/step2';
import Success from './Component/Success/success';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [uploadProgress, setUploadProgress] = useState(0); // Initial progress set to 0%
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const nextStep = () => {
    setStep(step + 1);
    setUploadProgress((prevProgress) => prevProgress + 25); // Increment progress by 25% for each step
  };

  const prevStep = () => {
    setStep(step - 1);
    setUploadProgress((prevProgress) => prevProgress - 25); // Decrement progress by 25% for each step
  };

  const handleChange = input => e => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const handleImageUpload = e => {
    const file = e.target.files[0];
    if (file) {
      const fileTypes = ['image/jpeg', 'image/png', 'image/svg+xml'];
      if (!fileTypes.includes(file.type)) {
        setValidationMessage('Invalid file type. Please upload a JPEG, PNG, or SVG image.');
        alert('Invalid file type. Please upload a JPEG, PNG, or SVG image.');
        return;
      }
      setValidationMessage('');
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
        setUploadProgress(50); // Simulate upload progress
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="App">
      {step === 1 && (
        <Step1 
          nextStep={nextStep} 
          handleImageUpload={handleImageUpload} 
          imagePreviewUrl={imagePreviewUrl} 
          validationMessage={validationMessage}
          uploadProgress={uploadProgress}
        />
      )}
      {step === 2 && (
        <Step2 
          nextStep={nextStep} 
          prevStep={prevStep} 
          handleChange={handleChange} 
          formData={formData} 
          uploadProgress={uploadProgress} 
        />
      )}
      {step === 3 && <Success formData={formData} />}
    </div>
  );
}

export default App;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
