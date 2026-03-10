import React from 'react';
import './hackathon.css'; // Custom styles for this section

const hackathons = [
  {
    title: "National-Level Hackathon on Disaster Management",
    organizer: "Organized by Government Authorities",
    date: "August 2024",
    description: `Participated in a national-level hackathon focused on Disaster Management. 
    Worked on a full-stack web-based system that helps in resource coordination, 
    real-time alerts, and safe zone navigation. Developed using React, Node.js, Express, and MongoDB.`,
    tech: "MERN Stack",
  },
  {
    title: "Group Discussion: Renewable Energy Solutions",
    organizer: "College Group Event",
    date: "October 2024",
    description: `Spoke as Speaker 3 in a group discussion on 'Renewable Energy Solutions for a Sustainable Tomorrow'. 
    Shared insights on innovative solar and wind energy projects with practical feasibility.`,
    tech: "Public Speaking | Teamwork",
  }
];

const Hackathon = () => {
  return (
    <div id="hackathon" className="py-5 hackathon-section">
      <div className="container">
        <h2 className="text-center mb-5 sub-title">
          Hackathons & <span>Events</span>
        </h2>
        <div className="row">
          {hackathons.map((event, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card hackathon-card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text">
                    <strong>Organizer:</strong> {event.organizer}<br />
                    <strong>Date:</strong> {event.date}<br />
                    <strong>Technologies/Skills:</strong> {event.tech}
                  </p>
                  <p className="event-description">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hackathon;
