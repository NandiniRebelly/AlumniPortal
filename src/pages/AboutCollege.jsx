{/*import React from 'react';

const AboutCollege = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">About VNRVJIET</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="College Campus"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
            <p className="text-gray-600">To be a center of excellence in technical education and research, evolving value-based professionals, entrepreneurs, and leaders for the service of society.</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-gray-600">To impart quality technical education that enables students to become competent professionals and entrepreneurs with strong ethical values.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCollege;*/}

import React from 'react';
import './AboutCollege.css'; // Import the CSS file

const AboutCollege = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">About VNRVJIET</h1>

      <div className="row align-items-center">
        <div className="col-md-6">
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="College Campus"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <div className="mb-4">
            <h2 className="section-title">Our Vision</h2>
            <p>To be a center of excellence in technical education and research, evolving value-based professionals, entrepreneurs, and leaders for the service of society.</p>
          </div>

          <div>
            <h2 className="section-title">Our Mission</h2>
            <p>To impart quality technical education that enables students to become competent professionals and entrepreneurs with strong ethical values.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCollege;


