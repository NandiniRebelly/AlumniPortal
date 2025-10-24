import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

{/*const Team = () => {
  const alumni = [
    { name: "John Doe", role: "Software Engineer", img: "https://media.istockphoto.com/id/1830126474/photo/portrait-of-a-business-man-sitting-in-an-office.jpg?s=612x612&w=0&k=20&c=jFJl6x5NUZOXEH230n2asejE-vDZ0YtATM0pbfJFTgk=" },
    { name: "Sameera Sharma", role: "Data Scientist", img: "https://thumbs.dreamstime.com/b/office-worker-pretty-young-sitting-41462649.jpg" },
    { name: "Ashish Kumar", role: "Entrepreneur", img: "https://static.vecteezy.com/system/resources/previews/032/168/016/large_2x/coffee-job-males-happy-smile-office-men-person-indian-businessman-sitting-lifestyle-laptop-technology-manager-success-photo.jpg" },
    { name: "Emily Davis", role: "UX Designer", img: "https://raajratna.com/wp-content/uploads/2019/01/person2.jpg" },
  ];

  return (
    <section className="team py-5 bg-light">
      <div className="container text-center">
        <h2 className="text-primary fw-bold">Meet Our Alumni</h2>
        <div className="row mt-4">
          {alumni.map((member, index) => (
            <div key={index} className="col-md-3 d-flex align-items-stretch">
              <div className="card shadow-sm border-0 rounded-4 w-100">
                <img src={member.img} alt={member.name} className="card-img-top rounded-top" style={{ objectFit: 'cover', height: '200px' }} />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{member.name}</h5>
                  <p className="card-text text-muted">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};*/}

const Team = () => {
    const alumni = [
      { name: "John Doe", role: "Software Engineer", img: "https://media.istockphoto.com/id/1830126474/photo/portrait-of-a-business-man-sitting-in-an-office.jpg?s=612x612&w=0&k=20&c=jFJl6x5NUZOXEH230n2asejE-vDZ0YtATM0pbfJFTgk=" },
      { name: "Sameera Sharma", role: "Data Scientist", img: "https://thumbs.dreamstime.com/b/office-worker-pretty-young-sitting-41462649.jpg" },
      { name: "Ashish Kumar", role: "Entrepreneur", img: "https://static.vecteezy.com/system/resources/previews/032/168/016/large_2x/coffee-job-males-happy-smile-office-men-person-indian-businessman-sitting-lifestyle-laptop-technology-manager-success-photo.jpg" },
      { name: "Emily Davis", role: "UX Designer", img: "https://raajratna.com/wp-content/uploads/2019/01/person2.jpg"},
    ];
    return (
      <section className="team p-5 bg-white">
        <div className="container text-center">
          <h1 className="text-primary fs-3 fw-bold pb-5">Meet Our Alumni</h1>
          <div className="row mt-4 d-flex justify-content-center">
            {alumni.map((member, index) => (
              <div key={index} className="col-md-3 d-flex align-items-stretch">
                <div className="card shadow-lg border-0 rounded-4 w-100" style={{ width: '18rem', height: '100%' }}>
                  <img src={member.img} alt={member.name} className="card-img-top rounded-top" style={{ objectFit: 'cover', height: '300px' }} />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold text-dark">{member.name}</h5>
                    <p className="card-text text-muted">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  

export default Team;
