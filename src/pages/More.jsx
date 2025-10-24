{/*import React from 'react';
import { Link } from 'react-router-dom';

const More = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">More Resources</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link to="/events" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3">Events</h2>
          <p className="text-gray-600">Stay updated with our latest events and reunions.</p>
        </Link>
        
        <Link to="/gallery" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3">Gallery</h2>
          <p className="text-gray-600">Browse through memories of alumni gatherings and events.</p>
        </Link>
        
        <Link to="/directory" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3">Directory</h2>
          <p className="text-gray-600">Connect with fellow alumni through our directory.</p>
        </Link>
        
        <Link to="/achievements" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3">Achievements</h2>
          <p className="text-gray-600">Celebrate the success stories of our alumni.</p>
        </Link>
      </div>
    </div>
  );
};

export default More;*/}



import React from 'react';
import { Link } from 'react-router-dom';
import './More.css'; // Import CSS file for custom styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const More = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center text-primary fw-bold mb-4">More Resources</h1>

      <div className="row g-4">
        <div className="col-md-6 col-lg-3">
          <Link to="/events" className="card more-card text-decoration-none text-dark">
            <div className="card-body text-center">
              <h2 className="h5 fw-semibold">Events</h2>
              <p className="text-muted">Stay updated with our latest events and reunions.</p>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-lg-3">
          <Link to="/gallery" className="card more-card text-decoration-none text-dark">
            <div className="card-body text-center">
              <h2 className="h5 fw-semibold">Gallery</h2>
              <p className="text-muted">Browse through memories of alumni gatherings and events.</p>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-lg-3">
          <Link to="/directory" className="card more-card text-decoration-none text-dark">
            <div className="card-body text-center">
              <h2 className="h5 fw-semibold">Directory</h2>
              <p className="text-muted">Connect with fellow alumni through our directory.</p>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-lg-3">
          <Link to="/achievements" className="card more-card text-decoration-none text-dark">
            <div className="card-body text-center">
              <h2 className="h5 fw-semibold">Achievements</h2>
              <p className="text-muted">Celebrate the success stories of our alumni.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default More;
