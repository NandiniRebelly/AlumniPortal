{/*import React from 'react';

const Directory = () => {
  const alumni = [
    {
      name: "John Doe",
      batch: "2020",
      department: "Computer Science",
      currentRole: "Software Engineer at Google",
      email: "john.doe@example.com"
    },
    {
      name: "Jane Smith",
      batch: "2019",
      department: "Electronics",
      currentRole: "Product Manager at Microsoft",
      email: "jane.smith@example.com"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Alumni Directory</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Batch</th>
              <th className="px-6 py-3 text-left">Department</th>
              <th className="px-6 py-3 text-left">Current Role</th>
              <th className="px-6 py-3 text-left">Email</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {alumni.map((person, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">{person.name}</td>
                <td className="px-6 py-4">{person.batch}</td>
                <td className="px-6 py-4">{person.department}</td>
                <td className="px-6 py-4">{person.currentRole}</td>
                <td className="px-6 py-4">{person.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Directory;*/}



import React from 'react';
import './Directory.css'; // Import the CSS file

const Directory = () => {
  const alumni = [
    {
      name: "John Doe",
      batch: "2020",
      department: "Computer Science",
      currentRole: "Software Engineer at Google",
      email: "john.doe@example.com"
    },
    {
      name: "Jane Smith",
      batch: "2019",
      department: "Electronics",
      currentRole: "Product Manager at Microsoft",
      email: "jane.smith@example.com"
    }
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">Alumni Directory</h1>

      <div className="table-responsive">
        <table className="table table-bordered table-hover shadow-sm">
          <thead className="table-primary text-center">
            <tr>
              <th>Name</th>
              <th>Batch</th>
              <th>Department</th>
              <th>Current Role</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {alumni.map((person, index) => (
              <tr key={index}>
                <td>{person.name}</td>
                <td>{person.batch}</td>
                <td>{person.department}</td>
                <td>{person.currentRole}</td>
                <td>{person.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Directory;
