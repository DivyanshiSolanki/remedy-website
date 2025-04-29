import React from "react";
import "./contact2.css"; // Import the CSS file

const Contact12 = () => {
  return (
    <div className="contact-container">
      <div className="contact-grid">
        {/* Book a Demo */}
        <div className="contact-card">
          <h2>Book a Demo</h2>
          <p>
            Get your tailored introduction to Sleeknote or tons of popup inspiration for your site. Book a free personal demo.
          </p>
          <button className="contact-button">Click here</button>
        </div>

        {/* Help Center */}
        <div className="contact-card">
          <h2>Help Center</h2>
          <p>
            Get instant answers to common questions and check out our step-by-step product tutorials.
          </p>
          <button className="contact-button">Click here</button>
        </div>

        {/* Become a Partner */}
        <div className="contact-card">
          <h2>Become a Partner</h2>
          <p>
            Join our Partner Program and earn a 25% recurring commission. Help your clients achieve their on-site goals.
          </p>
          <button className="contact-button">Click here</button>
        </div>
      </div>
      <br /><br />

      {/* Trusted By Section */}
      <div className="trusted-section">
        <h3>Trusted and used by:</h3> <br /><br />
        <div className="trusted-logos">
          <img src="https://sleeknotecom.wpenginepowered.com/wp-content/uploads/2021/07/Avianca.svg" alt="Avianca" />
          <img src="https://sleeknotecom.wpenginepowered.com/wp-content/uploads/2020/11/Rituals.png.webp" alt="Rituals" />
          <img src="https://sleeknotecom.wpenginepowered.com/wp-content/uploads/2021/07/Gogift.png" alt="GoGift" />
          <img src="https://sleeknotecom.wpenginepowered.com/wp-content/uploads/2020/11/Offers.com_.png.webp" alt="Offers.com" />
          <img src="https://sleeknotecom.wpenginepowered.com/wp-content/uploads/2020/11/Audi.png.webp" alt="Audi" />
          <img src="https://sleeknotecom.wpenginepowered.com/wp-content/uploads/2020/12/DHL.png" alt="DHL" />
        </div>
      </div>
    </div>
  );
};

export default Contact12;