import React from 'react';

const Step1 = ({ nextStep, handleImageUpload, imagePreviewUrl, validationMessage, uploadProgress }) => {
  return (
    <div>
      <h2>Step 1</h2>
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
      </div>
      {validationMessage && <div className="alert alert-danger" role="alert">{validationMessage}</div>}
      <input 
        type="file" 
        accept="image/jpeg, image/png, image/svg+xml" 
        onChange={handleImageUpload} 
        style={{ marginTop: '20px' }}
      />
      {imagePreviewUrl && (
        <div style={{ marginTop: '20px' }}>
          <img src={imagePreviewUrl} alt="Image Preview" style={{ width: '200px', height: 'auto' }} />
        </div>
      )}
      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={() => {
            if (imagePreviewUrl) {
              nextStep();
            } else {
              alert('Please upload an image before proceeding.');
            }
          }} 
          className="btn btn-primary btn-sm" 
          style={{ marginLeft: '10px' }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1;
