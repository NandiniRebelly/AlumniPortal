{/*import React from 'react';

const FAQ = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">How do I join the Alumni Association?</h3>
          <p className="text-gray-600">You can register through our online portal by clicking the Register button in the navigation bar.</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">What benefits do alumni members receive?</h3>
          <p className="text-gray-600">Members get access to networking events, career resources, mentorship opportunities, and exclusive alumni gatherings.</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">How can I update my information?</h3>
          <p className="text-gray-600">Log in to your alumni account and navigate to your profile settings to update your personal information.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;*/}



import React from 'react';
import './FAQ.css'; // Import CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const FAQ = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">Frequently Asked Questions</h1>
      
      <div className="mx-auto faq-container">
        <div className="card mb-3 shadow-sm">
          <div className="card-body">
            <h3 className="card-title">How do I join the Alumni Association?</h3>
            <p className="card-text">You can register through our online portal by clicking the Register button in the navigation bar.</p>
          </div>
        </div>

        <div className="card mb-3 shadow-sm">
          <div className="card-body">
            <h3 className="card-title">What benefits do alumni members receive?</h3>
            <p className="card-text">Members get access to networking events, career resources, mentorship opportunities, and exclusive alumni gatherings.</p>
          </div>
        </div>

        <div className="card mb-3 shadow-sm">
          <div className="card-body">
            <h3 className="card-title">How can I update my information?</h3>
            <p className="card-text">Log in to your alumni account and navigate to your profile settings to update your personal information.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
