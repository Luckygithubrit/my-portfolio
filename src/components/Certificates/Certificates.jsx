import React from 'react';
import './certificates.css'; // Make sure to create and link this




const certificates = [
  {
    title: "DSA",
    platform: "Udemy",
    description: "Data Structures and Algorithms Course",
    link: "https://www.udemy.com/certificate/UC-6c3f7638-9e52-469f-827c-2f698074ee00/",
    image: "/certificates/dsa.png",
  },
  {
    title: "Summer Training in Data Science",
    platform: "LPU",
    description: "Summer Training Program - 2024",
    link: "/certificates/data-science-lpu.png",
    image: "/certificates/summer.png",
  },
  {
    title: "Programming in C++",
    platform: "Coursera",
    description: "Foundations of C++ Programming",
    link: "https://www.coursera.org/account/accomplishments/specialization/Y456LSLMFWFP?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n",
    image: "/certificates/cpp.png",
  },
  {
    title: "Deep Learning",
    platform: "Coursera",
    description: "Introduction to Deep Learning",
    link: "/certificates/deep-learning-coursera.png",
    image: "/certificates/deep-learning.png",
  },
  {
    title: "SQL",
    platform: "Great Learning",
    description: "SQL for Data Analysis",
    link: "https://olympus.mygreatlearning.com/courses/40120/certificate?pb_id=581",
    image: "/certificates/sql.png",
  },
  {
    title: "Data Scientist",
    platform: "LinkedIn Learning",
    description: "Career Essentials in Data Science",
    link: "/certificates/data-scientist-linkedin.png",
    image: "/certificates/data-scientist.png",
  },
  
];

  
  const Certificates = () => {
    return (
      <div id="certificates" className="py-5 certificate-section">
        <div className="container">
          <h2 className="text-center mb-5 sub-title">
            My <span>Certificates</span>
          </h2>
          <div className="row">
            {certificates.map((cert, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 certificate-card shadow-sm">
                  <img
                    src={cert.image}
                    className="card-img-top"
                    alt={cert.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">{cert.title}</h5>
                    <p className="card-text">
                      <strong>Platform:</strong> {cert.platform} <br />
                      <small>{cert.description}</small>
                    </p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-dark mt-auto"
                    >
                      View Certificate
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
  
  export default Certificates;
  
