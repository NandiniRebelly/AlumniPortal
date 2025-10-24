{/*import React from 'react';

const ExecutiveCommittee = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Executive Committee</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            alt="Committee Member"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-1">John Smith</h3>
            <p className="text-blue-600 mb-2">President</p>
            <p className="text-gray-600 text-sm">Leading the alumni association since 2022</p>
          </div>
        </div>
        
        {/* Add more committee members 
      </div>
    </div>
  );
};

export default ExecutiveCommittee;*/}

{/*import React from 'react';
import './ExecutiveCommittee.css'; // Import the CSS file

const ExecutiveCommittee = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">Executive Committee</h1>
      
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm mb-4">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              alt="Committee Member"
              className="card-img-top"
            />
            <div className="card-body text-center">
              <h3 className="card-title mb-1">John Smith</h3>
              <p className="text-primary fw-semibold mb-2">President</p>
              <p className="text-muted">Leading the alumni association since 2022</p>
            </div>


          </div>
        </div>

        {/* Add more committee members here 
      </div>
    </div>
  );
};

export default ExecutiveCommittee;*/}

import React from 'react';
import './ExecutiveCommittee.css'; // Import the CSS file

const committeeMembers = [
  {
    name: "John Smith",
    role: "President",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    description: "Leading the alumni association since 2022"
  },
  {
    name: "Emma Johnson",
    role: "Vice President",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    description: "Working towards stronger alumni connections"
  },
  {
    name: "Michael Brown",
    role: "Secretary",
    img: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    description: "Ensuring smooth administration of alumni activities"
  },
  {
    name: "Sophia Williams",
    role: "Treasurer",
    img: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    description: "Managing alumni fund and financial records"
  },
  {
    name: "David Lee",
    role: "Event Coordinator",
    img: "https://images.unsplash.com/photo-1531561855568-3036cd4f03ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    description: "Organizing networking events for alumni"
  },
  {
    name: "Olivia Martinez",
    role: "Public Relations Officer",
    img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    description: "Building strong alumni engagement initiatives"
  }
];

const ExecutiveCommittee = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">Executive Committee</h1>
      
      <div className="row">
        {committeeMembers.map((member, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card shadow-sm mb-4 text-center">
              <img src={member.img} alt={member.name} className="card-img-top rounded-circle mx-auto mt-3" style={{ width: '150px', height: '150px', objectFit: 'cover', border: '5px solid #007bff' }} />
              <div className="card-body">
                <h3 className="card-title mb-1">{member.name}</h3>
                <p className="text-primary fw-semibold mb-2">{member.role}</p>
                <p className="text-muted">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExecutiveCommittee;
