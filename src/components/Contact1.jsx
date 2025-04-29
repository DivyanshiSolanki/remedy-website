import React from 'react';
import './contact1.css';
// Contact1.apply.................................................................................
const Contact1 = () => {
  return (
    <>
    <div class="con">
    <div className="contact1-container">
      <h1>Try Our HealthHive Website <span role="img" aria-label="wave">👋</span></h1>
      <p>At HealthHive, we empower you to take control of your health. Our platform offers a vast library of informative videos, covering a wide range of diseases and health conditions. From symptoms and diagnosis to treatment and management, our expert-led videos provide you with the knowledge you need to make informed decisions about your well-being. Take the first step towards a healthier you, with HealthHive.</p>
      <div className="button-container">
        <button className="trial-button">
          Start your free trial
        </button>
        <button className="demo-button">
          <img src="path_to_sofie_image.jpg" alt="Sofie" className="sofie-image" />
          Book a demo with Sofie
        </button>
      </div>
    </div>
    </div>
    </>
  );
};

export default Contact1;