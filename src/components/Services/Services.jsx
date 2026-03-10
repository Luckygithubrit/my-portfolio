import React from 'react'
import './services.css'

const Services = () => {
  return (
    <>

<section className="services" id="services">
  <div className="services-container container">
    <h1 className="sub-title">My <span>Services</span></h1>
    <div className="services-list">

      {/* Data Analysis & Visualization */}
      <div>
        <i className='bx bx-bar-chart-square'></i>
        <h2>Data Analysis & Visualization</h2>
        <p>I transform raw data into meaningful insights using Python, Pandas, Tableau, and Matplotlib, helping businesses make data-driven decisions through visual storytelling.</p>
        <a href="#" className="read">Learn more</a>
      </div>

      {/* Machine Learning Model Building */}
      <div>
        <i className='bx bx-brain'></i>
        <h2>Machine Learning Models</h2>
        <p>I design and train machine learning models for classification, regression, and clustering tasks, using frameworks like TensorFlow and Scikit-Learn to solve real-world problems.</p>
        <a href="#" className="read">Learn more</a>
      </div>

      {/* Data Cleaning & Preprocessing */}
      <div>
        <i className='bx bx-cog'></i>
        <h2>Data Cleaning & Preprocessing</h2>
        <p>I prepare and refine datasets through data wrangling, handling missing values, outliers, and ensuring data quality for accurate analysis and model performance.</p>
        <a href="#" className="read">Learn more</a>
      </div>

    </div>
  </div>
</section>


    
    </>
  )
}

export default Services
