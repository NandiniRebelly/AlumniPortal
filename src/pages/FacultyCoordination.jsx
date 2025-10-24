{/*import React from 'react';

const FacultyCoordination = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Faculty Coordination Committee</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            alt="Faculty Coordinator"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-1">Dr. Sarah Johnson</h3>
            <p className="text-blue-600 mb-2">CSE Department Coordinator</p>
            <p className="text-gray-600 text-sm">Coordinating alumni activities since 2020</p>
          </div>
        </div>
        
        {/* Add more faculty coordinators 
      </div>
    </div>
  );
};

export default FacultyCoordination;*/}

{/*import React from 'react';
import './FacultyCoordination.css'; // Import CSS file for styling

const FacultyCoordination = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">Faculty Coordination Committee</h1>
      
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm mb-4">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              alt="Faculty Coordinator"
              className="card-img-top"
            />
            <div className="card-body text-center">
              <h3 className="card-title mb-1">Dr. Sarah Johnson</h3>
              <p className="text-primary fw-semibold mb-2">CSE Department Coordinator</p>
              <p className="text-muted">Coordinating alumni activities since 2020</p>
            </div>
          </div>
        </div>

        {/* Add more faculty coordinators here 
      </div>
    </div>
  );
};

export default FacultyCoordination;*/}



import React from 'react';
import './FacultyCoordination.css'; // Import CSS file for styling

const facultyMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "CSE Department Coordinator",
    img: "https://nirmalacollege.ac.in/content/uploads/2024/04/DSC07425-scaled.jpg",
    description: "Coordinating alumni activities since 2020"
  },
  {
    name: "Dr. Robert Williams",
    role: "ECE Department Coordinator",
    img: "https://static.vecteezy.com/system/resources/thumbnails/035/617/807/small/ai-generated-man-holding-laptop-and-smiling-at-camera-man-free-photo.jpeg",
    description: "Guiding alumni relations for the ECE department"
  },
  {
    name: "Dr. Emily Brown",
    role: "Mechanical Department Coordinator",
    img: "https://static.toiimg.com/thumb/msid-66494869,width-400,resizemode-4/66494869.jpg",
    description: "Strengthening industry-academia collaborations"
  },
  {
    name: "Dr. Olivia Martinez",
    role: "IT Department Coordinator",
    img: "https://media.istockphoto.com/id/1429125771/photo/portrait-of-mature-indian-female-employee-in-office-indian-businesswoman-looking-at-camera.jpg?s=612x612&w=0&k=20&c=_iGnH3qxUbODW5dNe6ayaUw9Yr14HRFp_nEIXbiACjM=",
    description: "Enhancing digital engagement for alumni"
  },
  {
    name: "Dr. Olivia Martinez",
    role: "IT Department Coordinator",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd670E9IN_IZ_nPIPWkoxQIQxhmN2SXLB5Dg&s",
    description: "Enhancing digital engagement for alumni"
  },
  {
    name: "Dr. Olivia Martinez",
    role: "IT Department Coordinator",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNTPGObDAjG1fkJ31ZoJWW5BjH7EGv8hhSEw&s",
    description: "Enhancing digital engagement for alumni"
  },
  {
    name: "Dr. Olivia Martinez",
    role: "IT Department Coordinator",
    img: "https://www.pscmr.ac.in/alumni/priyanka.jpeg",
    description: "Enhancing digital engagement for alumni"
  },
  {
    name: "Dr. Olivia Martinez",
    role: "IT Department Coordinator",
    img: "https://www.wptckylm.org/iedc.wptckylm.org/img/iedc/renjini.jpg",
    description: "Enhancing digital engagement for alumni"
  },
  {
    name: "Dr. Olivia Martinez",
    role: "IT Department Coordinator",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-45J7hMt-zQUQN5cAtBad9-qhO5piXZlFwA&s",
    description: "Enhancing digital engagement for alumni"
  }
];

const FacultyCoordination = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">Faculty Coordination Committee</h1>
      
      <div className="row">
        {facultyMembers.map((member, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card shadow-sm mb-4 text-center">
              <img 
                src={member.img} 
                alt={member.name} 
                className="card-img-top rounded-circle mx-auto mt-3 border border-primary" 
                style={{ width: "180px", height: "200px", objectFit: "cover" }}
              />
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

export default FacultyCoordination;

