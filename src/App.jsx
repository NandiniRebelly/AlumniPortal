{/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import DAA from './pages/DAA';
import AlumniIncubatees from './pages/AlumniIncubatees';
import More from './pages/More';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Directory from './pages/Directory';
import Achievements from './pages/Achievements';
import ExecutiveCommittee from './pages/ExecutiveCommittee';
import FacultyCoordination from './pages/FacultyCoordination';
import AboutCollege from './pages/AboutCollege';
import Team from './components/Team';
import './index.css'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<About />} />
            <Route path="/about-college" element={<AboutCollege />} />
            <Route path="/executive-committee" element={<ExecutiveCommittee />} />
            <Route path="/faculty-coordination" element={<FacultyCoordination />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/daa" element={<DAA />} />
            <Route path="/alumni-incubatees" element={<AlumniIncubatees />} />
            <Route path="/more" element={<More />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/achievements" element={<Achievements />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;*/}


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import DAA from './pages/DAA';
import AlumniIncubatees from './pages/AlumniIncubatees';
import More from './pages/More';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Directory from './pages/Directory';
import Achievements from './pages/Achievements';
import ExecutiveCommittee from './pages/ExecutiveCommittee';
import FacultyCoordination from './pages/FacultyCoordination';
import AboutCollege from './pages/AboutCollege';
import Team from './components/Team';
import Register from './pages/Register';
import Login from './pages/Login';
import './index.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<About />} />
            <Route path="/about-college" element={<AboutCollege />} />
            <Route path="/executive-committee" element={<ExecutiveCommittee />} />
            <Route path="/faculty-coordination" element={<FacultyCoordination />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/daa" element={<DAA />} />
            <Route path="/alumni-incubatees" element={<AlumniIncubatees />} />
            <Route path="/more" element={<More />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
