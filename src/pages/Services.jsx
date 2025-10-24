{/*import React from 'react';

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Alumni Services</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Alumni Career Vision Approach</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Name of Speaker</th>
                <th className="px-6 py-3 text-left">Present Position</th>
                <th className="px-6 py-3 text-left">Title of Lecture</th>
                <th className="px-6 py-3 text-left">Department</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">30-07-2016</td>
                <td className="px-6 py-4">P.Navneet</td>
                <td className="px-6 py-4">Entrepreneur</td>
                <td className="px-6 py-4">Alumni Guest Lecture</td>
                <td className="px-6 py-4">EIE</td>
              </tr>
              {/* Add more rows as needed 
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Services;*/}

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css'; // Import CSS file for custom styling

const Services = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center text-primary fw-bold mb-4">Alumni Services</h1>

      <div className="mb-5">
        <h2 className="fw-semibold mb-3">Alumni Career Vision Approach</h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover shadow-sm">
            <thead className="table-primary">
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Name of Speaker</th>
                <th scope="col">Present Position</th>
                <th scope="col">Title of Lecture</th>
                <th scope="col">Department</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>30-07-2016</td>
                <td>P. Navneet</td>
                <td>Entrepreneur</td>
                <td>Alumni Guest Lecture</td>
                <td>EIE</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Services;


