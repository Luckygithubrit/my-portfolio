import React from 'react';
import './research.css'; // Make sure you create this CSS file

const Research = () => {
  return (
    <div id="research" className="research-section py-5">
  <div className="container">
    <h2 className="text-center mb-5 sub-title">
      My <span>Research</span>
    </h2>
    <div className="row align-items-center">
      <div className="col-md-6">
        <h3 className="research-title">Simplifying Complex Dance Steps Using AI</h3>
        <p className="research-description">
          In the current semester (March–May 2025), I conducted academic research on the topic <strong>"Learning of Complex Dance Steps into Easier Ones."</strong>
          The objective of this work was to explore how complex dance choreography could be broken down and simplified using intelligent systems and pattern analysis.
          <br /><br />
          This research focused on understanding human motion patterns and proposing a method to transform advanced dance moves into accessible sequences, which can benefit both learners and instructors.
          As part of the formal research process, I submitted an IPR annexure, and this work is now progressing toward an official <strong>patent under my name</strong>.
          <br /><br />
          This unique interdisciplinary research bridges creativity and technology, with potential applications in education, fitness, and performing arts.
        </p>
      </div>
      <div className="col-md-6 text-center">
        <img
          src="/assets/research/dance.png"
          alt="Dance Step Simplification Research"
          className="img-fluid research-image shadow"
        />
      </div>
    </div>
  </div>
</div>

  );
};

export default Research;
