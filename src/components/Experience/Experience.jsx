import React from 'react';
import './experience.css'; // Make sure to create and link this
import certificateImg from '../../assets/lpu-course.png'; // Adjust path as needed

const Experience = () => {
  return (
    <div id="experience" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 sub-title">
          My <span>Experience</span>
        </h2>
        <div className="row align-items-center">
          {/* Left Side - Certificate */}
          <div className="col-md-6 mb-4 mb-md-0 text-center">
            <img
              src={certificateImg}
              alt="Summer Training Certificate"
              className="img-fluid experience-certificate"
            />
          </div>

          {/* Right Side - Description */}
          <div className="col-md-6 pl-5">
            <div className="experience-details">
              <h4 className="text-uppercase fw-bold mb-3">
                Summer Training Internship
              </h4>
              <p className="text-muted mb-2">
                <strong>Company:</strong> Lovely Professional University
              </p>
              <p className="text-muted mb-2">
                <strong>Duration:</strong> May 2024 - July 2024
              </p>
              <p className="experience-description">
  During my Summer Training at the Center for Professional Enhancement, Lovely Professional University, I gained practical experience in Data Visualization using Python. The course provided hands-on training in visualizing complex data sets through Python libraries like Matplotlib, Seaborn, and Plotly.
  <br /><br />
  This experience enhanced my ability to transform raw data into insightful visualizations, strengthened my proficiency in Python, and improved my understanding of data interpretation techniques to communicate information effectively.
</p>




            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
