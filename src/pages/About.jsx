{/*import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">About VNRVJIET Alumni Association</h1>
      
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Link to="/about-college" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3">About College</h2>
          <p className="text-gray-600">Learn about our institution's history, vision, and achievements.</p>
        </Link>
        
        <Link to="/executive-committee" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3">Executive Committee</h2>
          <p className="text-gray-600">Meet the leadership team driving our alumni association forward.</p>
        </Link>
        
        <Link to="/faculty-coordination" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3">Faculty Coordination</h2>
          <p className="text-gray-600">Our dedicated faculty coordinators supporting alumni initiatives.</p>
        </Link>
      </div>
    </div>
  );
};

export default About;*/}


import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">About VNRVJIET Alumni Association</h1>

      <div className="row">
        <div className="col-md-4">
          <Link to="/about-college" className="about-card">
            <h2 className="card-title">About College</h2>
            <p>Learn about our institution's history, vision, and achievements.</p>
          </Link>
        </div>

        <div className="col-md-4">
          <Link to="/executive-committee" className="about-card">
            <h2 className="card-title">Executive Committee</h2>
            <p>Meet the leadership team driving our alumni association forward.
            </p>
          </Link>
        </div>

        <div className="col-md-4">
          <Link to="/faculty-coordination" className="about-card">
            <h2 className="card-title">Faculty Coordination</h2>
            <p>Our dedicated faculty coordinators supporting alumni initiatives.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;


