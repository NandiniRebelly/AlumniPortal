{/*import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Alumni Connect</h1>
        <p className="text-xl text-gray-600">Reconnect, Share, and Inspire. Join our alumni community and stay updated.</p>
      </section>
      
      <div className="relative h-96 mb-12">
        <img 
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Alumni gathering" 
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>

      <section className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Connect</h3>
          <p className="text-gray-600">Stay connected with your alma mater and fellow alumni through our network.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Grow</h3>
          <p className="text-gray-600">Access career resources, mentorship opportunities, and professional development.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Give Back</h3>
          <p className="text-gray-600">Support current students through mentorship and networking opportunities.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;*/}



import React from 'react';
import './Home.css'; // Import CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import Team from '../components/Team';

const Home = () => {
  return (
    <div className="container py-5">
      <section className="text-center mb-5">
        <h1 className="text-primary fw-bold mb-3 fs-1">Welcome to Alumni Connect</h1>
        <p className="text-muted fs-3">
          Reconnect, Share, and Inspire. Join our alumni community and stay updated.
        </p>
      </section>

      <div className="mb-5">
        {/*<img 
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Alumni gathering" 
          className="img-fluid rounded shadow-lg home-image"
        />*/}
        <img src="https://www.univariety.com/blog/wp-content/uploads/2022/02/5853-min-scaled.jpg" width="1200px"/>
        <Team/>
      </div>

      <section className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm p-4 text-center">
            <h3 className="fw-semibold">Connect</h3>
            <p className="text-muted">Stay connected with your alma mater and fellow alumni through our network.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm p-4 text-center">
            <h3 className="fw-semibold">Grow</h3>
            <p className="text-muted">Access career resources, mentorship opportunities, and professional development.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm p-4 text-center">
            <h3 className="fw-semibold">Give Back</h3>
            <p className="text-muted">Support current students through mentorship and networking opportunities.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
