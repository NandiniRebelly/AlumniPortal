{/*import React from 'react';

const DAA = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Distinguished Alumni Awards</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            alt="Veera Venkatesh Vedurumudi"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Mr. Veera Venkatesh Vedurumudi</h3>
            <p className="text-blue-600">Academic Excellence</p>
          </div>
        </div>
        
        {/* Add more award recipients 
      </div>
    </div>
  );
};

export default DAA;*/}

{/*import React from 'react';
import './DAA.css'; // Import the CSS file

const DAA = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">Distinguished Alumni Awards</h1>

      <div className="row g-4">
        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              alt="Veera Venkatesh Vedurumudi"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Mr. Veera Venkatesh Vedurumudi</h5>
              <p className="text-primary">Academic Excellence</p>
            </div>
          </div>
        </div>

        {/* Add more award recipients here 
      </div>
    </div>
  );
};

export default DAA;*/}

import React from 'react';
import './DAA.css'; // Import the CSS file

const awardRecipients = [
  {
    name: "Mr. Veera Venkatesh Vedurumudi",
    category: "Academic Excellence",
    img: "https://vaave.s3.amazonaws.com/user_files/851f5ac9941d720844d143ed9cfcf60a_7aec30ad20404bd6a0b78bc4591128c3.jpeg"
  },
  {
    name: "Dr. Anjali Rao",
    category: "Research & Innovation",
    img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Mr. Rajesh Kumar",
    category: "Entrepreneurial Excellence",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Ms. Priya Mehta",
    category: "Social Impact",
    img: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Mr. Arjun Sharma",
    category: "Corporate Leadership",
    img: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  }
];

const DAA = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">Distinguished Alumni Awards</h1>
      
      <div className="d-flex flex-column align-items-center gap-4">
        {awardRecipients.map((recipient, index) => (
          <div key={index} className="card shadow-sm" style={{ width: '40rem' }}>
            <img 
              src={recipient.img} 
              alt={recipient.name} 
              className="card-img-top"
              style={{ width: '400px', height: '300px', objectFit: 'cover', margin: '20px auto' }}
            />
            <div className="card-body text-center">
              <h5 className="card-title">{recipient.name}</h5>
              <p className="text-primary">{recipient.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DAA;

