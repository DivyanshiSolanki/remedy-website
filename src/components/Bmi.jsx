import React, { useState } from "react";
import "./service.css";
import './bmi.css'

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // converting height to meters
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBMI(bmiValue.toFixed(2));

      // Setting the message based on BMI value
      if (bmiValue < 18.5) {
        setMessage("You are underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage("You have a healthy weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage("You are overweight");
      } else {
        setMessage("You are obese");
      }
    }
  };

  return (
    <>
   
    <div class="imb">
      <br /><br /><br /><br /> 
      <h2 class="bmi">
        Being underweight or overweight can lead to
        <br /> numerous health issues. Understanding your BMI (Body Mass Index)
        is a <br /> crucial step in identifying the core health problems
        affecting you. <br /> So, check your BMI with our BMI calculator.
      </h2>
      <div className="bmi-calculator">
        <h2>BMI Calculator</h2>
        <div>
          <label>
            Weight (kg):
            <input class="hei"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight"
            />
          </label>
        </div>
        <div>
          <label>
            Height (cm):
            <input class="hei"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height"
            />
          </label>
        </div>
        <button onClick={calculateBMI}>Calculate</button>
        {bmi && (
          <div>
            <h3>Your BMI: {bmi}</h3>
            <h3>{message}</h3>
          </div>
          
        )}
         <br /><br /><br /><br /><br />
      </div>
      </div>
      <br /><br /><br /><br />   <br /><br /><br /><br />
    </>
  );
};

export default BMICalculator;
