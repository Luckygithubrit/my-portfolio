import React from "react";
import AboutImage from "../../assets/circle-image.png";
import "./about.css";

const About = () => {
  return (
    <section className="about-main" id="about">
  <div className="container about-container d-flex align-items-center justify-content-between">
    
    {/* Right Side Text */}
    <div className="about-text" style={{ flex: 1 }}>
      <h2> About <span>Me</span> </h2>
      <h4>Data Scientist</h4>
      <p>
        Hi, I'm Laveen Pappu, a passionate Data Scientist.
        I am deeply enthusiastic about analyzing complex datasets, building predictive models, and turning data into actionable insights.

        Throughout my journey, I have developed strong expertise in Python, Machine Learning, Deep Learning, and Data Visualization tools like Tableau, Matplotlib, and Seaborn.
        I love working with large datasets, uncovering hidden patterns, and delivering impactful data-driven solutions.

        I am committed to continuous learning and staying updated with the latest advancements in the field of Data Science.
        My goal is to contribute to meaningful projects, solve real-world problems through data, and grow as a skilled Data Scientist.
      </p>

      <div className="text-center mt-4">
          <a
            href="/lucky-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            download
          >
            Download Resume
          </a>
      </div>
      
    </div>
  </div>
</section>



    
  );
};

export default About;
