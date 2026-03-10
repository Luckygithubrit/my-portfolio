import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Navbar from "../navbar/Navbar";
import "./Home.css";
import MyImage from "../../assets/profile.jpg";
import About from "../about/About";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import Projects from '../Projects/Projects';
import Experience from "../Experience/Experience";
import Certificates from "../Certificates/Certificates";
import Hackathon from "../Hackathon/Hackathon";
import Research from "../Research/Research";
import Contact from "../contact/Contact";



const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Data Scientist",
        "Machine Learning Enthusiast",
        "Data Analyst"
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });
  
    return () => {
      typed.destroy();
    };
  }, []);
  

  return (
    <>
      <Navbar />
      
      <main className="home-main text-white py-5" id="home">
        <div className="container d-flex flex-column flex-md-row align-items-center">
          {/* Left Side Content */}
          <section className="home-content mr-5 mb-4 mb-md-0">
            <h3 className="name-heading1 animate__animated animate__fadeIn" style={{ fontWeight: 600, fontSize: "30px" }}>
              Hello, It's Me
            </h3>
            <h1 className="name-heading2 animate__animated animate__fadeIn" style={{ fontWeight: 600, fontSize: "40px" }}>
              Laveen Pappu
            </h1>
            <h3 className="name-heading3 animate__animated animate__fadeIn" style={{ fontWeight: 600, fontSize: "30px" }}>
              And I'm a <span style={{ color: "#0ef" }} ref={typedRef}></span>
            </h3>
            <p className="home-paragraph animate__animated animate__fadeIn" style={{ fontSize: "15px" }}>
              I'm a passionate Data Scientist and Web Developer skilled in Python, R, and Machine Learning.<br />
              Experienced in developing analytical dashboards, building predictive models, and visualizing complex datasets using tools like Pandas, NumPy, TensorFlow, Tableau, and Flask.
            </p>
            <div className="home-sci mt-3">
              <a href="https://www.linkedin.com/in/laveen-pappu547/" target="_blank" rel="noopener noreferrer" className="social-link btn btn-outline-light me-2">
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="https://github.com/Luckygithubrit" target="_blank" rel="noopener noreferrer" className="social-link btn btn-outline-light me-2">
                <i className="bx bxl-github"></i>
              </a>
              <a href="mailto:Laveenpappu547@gmail.com" className="social-link btn btn-outline-light me-2">
                <i className="bx bx-mail-send"></i>
              </a>
            </div>

            <a href="#about" className="btn-box mt-4">
              More About Me
            </a>
          </section>

          {/* Right Side Image */}
          <aside className="home-image text-center">
            <img src={MyImage} alt="Portfolio Profile" className="image-fluid" />
          </aside>
          
        </div>
      </main>

      

      <About />

      <Services />

      <Skills />

      <Projects />

      <Experience />

      <Certificates />

      <Hackathon />

      <Research />

      <Contact />
    </>
  );
};

export default Home;
