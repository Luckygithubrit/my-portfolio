// src/components/Project.jsx
import React from 'react';
import './projects.css';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Restaurant Web Application',
    image: '/assets/restaurent.png',
    description: 'A responsive website for restaurant ordering and menu display built using HTML, CSS, and JavaScript.',
    github: 'https://github.com/Luckygithubrit/restaurant-web-application.git',  // Replace with correct URL
  },
  {
    title: 'Door Lock System',
    image: '/assets/door-lock.png',
    description: 'A basic door lock simulation built using java language to demonstrate embedded system fundamentals.',
    github: 'https://github.com/Luckygithubrit/Door-lock.git',  // Add GitHub repo if available
  },
  {
    title: 'ben 10',
    image: '/assets/wp3759185.jpg',
    description: 'a beautiful web application that include stylish charcters of ben 10',
    github: 'https://github.com/Luckygithubrit/ben10.git',  // Add GitHub repo if available
  },
  {
    title: 'Dashboard using Tableau',
    image: '/assets/tableu.png',  // Place the image in public/assets
    description: 'An interactive data dashboard created using Tableau with real-world datasets for visualization and insights.',
    github: 'https://github.com/Luckygithubrit/dashboard-using-tableau',  // Add GitHub or Tableau Public link if available
  },
  {
    title: 'Dashboard using Excel',
    image: '/assets/dashboard.png',
    description: 'A data dashboard designed in Microsoft Excel, showcasing data trends using charts, slicers, and pivot tables.',
    github: 'https://github.com/Luckygithubrit/excel',  // Add link to the file or GitHub if available
  },
  {
    title: 'Stock Management System',
    image: '/assets/stock-management.png',
    description: 'A Python-based application to manage stock inventory efficiently for small businesses.',
    github: 'https://github.com/Luckygithubrit/stock-management-system-',  // Replace with correct URL
  },
  
];



const Projects = () => {
  return (
    <div id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4 sub-title">
          My <span>Projects</span>
        </h2>
        <div className="row ">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-5 project-boxes" key={index}>
              <div className="card project-card h-100 shadow-sm">
                <img
                  src={project.image}
                  className="card-img-top project-img"
                  alt={project.title}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark mt-auto"
                  >
                    <FaGithub className="me-2" />
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Projects;
