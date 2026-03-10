import React , {useEffect} from 'react'
import './skills.css'

const Skills = () => {


    useEffect(() => {
        const progressBars = document.querySelectorAll('.progress-line');
    
        progressBars.forEach((bar, index) => {
          const skillPercentages = [90, 70, 85, 75, 70, 75, 80]; // Replace with your actual skill percentages
          const targetWidth = `${skillPercentages[index]}%`;
          bar.style.setProperty('--target-width', targetWidth);
        });
      }, []);



  return (
    <>

        <section className='skills-section' id='skills'>
            <h1 className="skill-title py-5">My <span>Skills</span></h1>

                <div className="container d-flex align-item-center justify-content-between">

                   {/* technical skill section */}
<div className="technical-skills ml-4">
  <h1 className="technical-skills-heading mb-5 text-centered">Technical Skills</h1>
  <div className="skill-technical-bars">

    {/* Python */}
    <div className="bar mt-5 mb-5">
      <i className='bx bxl-python' style={{color:'#306998'}}></i>
      <div className="tech-info">
        <span>Python</span>
      </div>
      
    </div>

    {/* R Language */}
    <div className="bar mb-5">
      <i className='bx bx-code-alt' style={{color:'#198CE7'}}></i>
      <div className="tech-info">
        <span>R Language</span>
      </div>
    </div>

    {/* SQL */}
    <div className="bar mb-5">
      <i className='bx bx-data' style={{color:'#F29111'}}></i>
      <div className="tech-info">
        <span>SQL</span>
      </div>
    </div>

    {/* TensorFlow */}
    <div className="bar mb-5">
      <i className='bx bxs-bolt' style={{color:'#FF6F00'}}></i>
      <div className="tech-info">
        <span>TensorFlow</span>
      </div>
    </div>

    {/* Tableau */}
    <div className="bar mb-5">
      <i className='bx bxs-bar-chart-alt-2' style={{color:'#E97627'}}></i>
      <div className="tech-info">
        <span>Tableau</span>
      </div>
    </div>

    {/* Hadoop */}
    <div className="bar mb-5">
      <i className='bx bx-server' style={{color:'#F4A300'}}></i>
      <div className="tech-info">
        <span>Hadoop</span>
      </div>
    </div>

    {/* Java */}
    <div className="bar mb-5">
      <i className='bx bxl-java' style={{color:'#FF5A00'}}></i>
      <div className="tech-info">
        <span>Java</span>
      </div>
    </div>

  </div>
</div>
{/* technical skill section end here */}




                        {/* professional skills section starts from here */}
<div className="professional-skills mr-5">
  <h1 className="professional-skills">Professional Skills</h1>
  <div className="radial-bars">

    <div className="radial-bar">
      <div className="professional-text">Creativity</div>
    </div>

    <div className="radial-bar">
      <div className="professional-text">Communication</div>
    </div>

    <div className="radial-bar">
      <div className="professional-text">Problem Solving</div>
    </div>

    <div className="radial-bar">
      <div className="professional-text">Teamwork & Collaboration</div>
    </div>

    <div className="radial-bar">
      <div className="professional-text">Adaptability</div>
    </div>

  </div>
</div>

                </div>
        </section>

    </>
  )
}

export default Skills
