{/*import React from 'react';

const Events = () => {
  const events = [
    {
      title: "YUGMA 2K24- Alumni Homecoming Day",
      venue: "VNR Vignana Jyothi Institute of Engineering and technology",
      date: "Saturday, 21st Dec 2024",
      time: "10:00 am (IST)",
      type: "reunions"
    },
    {
      title: "Felicitation Ceremony for Esteemed Teachers",
      venue: "Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering & Technology",
      date: "Saturday, 28th Sep 2024",
      time: "2:00 pm (IST)",
      type: "reunions"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Events</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mb-4">
              {event.type}
            </span>
            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
            <p className="text-gray-600 mb-2">{event.venue}</p>
            <p className="text-gray-500">
              {event.date}, {event.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;*/}

import React from 'react';
import './Events.css'; // Import the CSS file

const Events = () => {
  const events = [
    {
      title: "YUGMA 2K24- Alumni Homecoming Day",
      venue: "VNR Vignana Jyothi Institute of Engineering and Technology",
      date: "Saturday, 21st Dec 2024",
      time: "10:00 am (IST)",
      type: "Reunions"
    },
    {
      title: "Felicitation Ceremony for Esteemed Teachers",
      venue: "Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering & Technology",
      date: "Saturday, 28th Sep 2024",
      time: "2:00 pm (IST)",
      type: "Reunions"
    }
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">Events</h1>

      <div className="row">
        {events.map((event, index) => (
          <div key={index} className="col-md-6">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <span className="badge bg-primary mb-3">{event.type}</span>
                <h2 className="card-title">{event.title}</h2>
                <p className="card-text"><strong>Venue:</strong> {event.venue}</p>
                <p className="card-text"><strong>Date & Time:</strong> {event.date}, {event.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
