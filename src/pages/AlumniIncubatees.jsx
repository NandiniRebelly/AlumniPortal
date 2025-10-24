{/*import React from 'react';

const AlumniIncubatees = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Alumni Incubatees</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Startups at VNRVJIET</h2>
        <p className="text-gray-600 mb-6">VNRVJIET campus is home for many startups in diverse spaces.</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Facilities Provided</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Dedicated workspace</li>
              <li>Mentorship support</li>
              <li>Networking opportunities</li>
              <li>Access to labs and equipment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniIncubatees;*/}

import React from 'react';
import './AlumniIncubatees.css'; // Import the CSS file

const AlumniIncubatees = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">Alumni Incubatees</h1>

      <div className="card p-4 shadow-sm mb-4">
        <h2 className="fw-semibold">Startups at VNRVJIET</h2>
        <p className="text-muted">VNRVJIET campus is home for many startups in diverse spaces.</p>

        <div className="row">
          <div className="col-md-6">
            <div className="border rounded p-3 mt-3">
              <h3 className="fw-semibold">Facilities Provided</h3>
              <ul className="list-group">
                <li className="list-group-item">Dedicated workspace</li>
                <li className="list-group-item">Mentorship support</li>
                <li className="list-group-item">Networking opportunities</li>
                <li className="list-group-item">Access to labs and equipment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniIncubatees;
