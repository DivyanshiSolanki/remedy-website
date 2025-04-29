import React, { useEffect, useState } from 'react';
import './home2.css';

const Home1 = () => {
  const [showHeading, setShowHeading] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowHeading(true), 500);
    setTimeout(() => setShowText(true), 1000);
    setTimeout(() => setShowImage(true), 1500);
  }, []);

  return (
    <div className="container">
      <div className="text-section">
        {showHeading && <h1 className="fade-in">We're here for you</h1>}
        {showText && (
          <p className="fade-in">
            At HealthHive, we empower you to take control of your health.  <span className="highlight">Our platform  <br />offers a vast library of informative videos, a wide  range of diseases and health  conditions.</span> From symptoms and diagnosis to treatment and management, expert-led as videosprovide you with the knowledge you need to  informed decisions about your well-being. Take the first step towards a healthier the
             HealthHive.
          </p>
        )}
        {showText && <button className="explore-button fade-in">Explore resources</button>}
      </div>
      {showImage && (
        <div className="image-section fade-in">
          <img class="http"  src="https://images.pexels.com/photos/5214964/pexels-photo-5214964.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Coastal Scene" />
        </div>
      )}
    </div>
  );
};

export default Home1;