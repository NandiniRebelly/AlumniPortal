{/*import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      name: "Dr. Sarah Johnson",
      achievement: "Nobel Prize in Physics 2023",
      description: "For groundbreaking research in quantum computing",
      batch: "2005"
    },
    {
      name: "Mr. Rajesh Kumar",
      achievement: "Forbes 30 Under 30",
      description: "Recognition for innovative startup in renewable energy",
      batch: "2015"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Alumni Achievements</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{achievement.name}</h2>
            <p className="text-blue-600 mb-2">{achievement.achievement}</p>
            <p className="text-gray-600 mb-2">{achievement.description}</p>
            <p className="text-sm text-gray-500">Batch of {achievement.batch}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;*/}

import React from 'react';
import './Achievements.css'; // Import the CSS file

const Achievements = () => {
  const achievements = [
    {
      name: "Dr. Sarah Johnson",
      achievement: "Nobel Prize in Physics 2023",
      description: "For groundbreaking research in quantum computing",
      batch: "2005"
    },
    {
      name: "Mr. Rajesh Kumar",
      achievement: "Forbes 30 Under 30",
      description: "Recognition for innovative startup in renewable energy",
      batch: "2015"
    }
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">Alumni Achievements</h1>

      <div className="row">
        {achievements.map((achievement, index) => (
          <div key={index} className="col-md-6">
            <div className="card achievement-card">
              <div className="card-body">
                <h2 className="card-title">{achievement.name}</h2>
                <p className="text-primary fw-semibold">{achievement.achievement}</p>
                <p className="card-text">{achievement.description}</p>
                <p className="text-muted small">Batch of {achievement.batch}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
