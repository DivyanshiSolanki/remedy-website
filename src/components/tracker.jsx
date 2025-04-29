import React, { useState } from "react";
import "./service.css";
import './tracker.css'

const HealthTracker = () => {
  const [caloriesIn, setCaloriesIn] = useState(0);
  const [caloriesOut, setCaloriesOut] = useState(0);
  const [log, setLog] = useState([]);

  const handleAddEntry = () => {
    if (caloriesIn === 0 && caloriesOut === 0) return;
    setLog([...log, { caloriesIn, caloriesOut }]);
    setCaloriesIn(0);
    setCaloriesOut(0);
  };

  const totalIn = log.reduce((sum, entry) => sum + entry.caloriesIn, 0);
  const totalOut = log.reduce((sum, entry) => sum + entry.caloriesOut, 0);
  const netCalories = totalIn - totalOut;

  return (
    <> 
    <br /><br />
    <div className="tracker-container">
      <h2 class="tracker">Health Tracker</h2>
      <div className="input-container">
        <label>Calories Intake:</label>
        <input class="nums"
          type="number"
          value={caloriesIn}
          onChange={(e) => setCaloriesIn(Number(e.target.value))}
        />
        <label class="cal">Calories Burned:</label>
        <input class="num"
          type="number"
          value={caloriesOut}
          onChange={(e) => setCaloriesOut(Number(e.target.value))}
        /> <br />
        <button class="ent" onClick={handleAddEntry}>Add Entry</button>
      </div>

      <div className="summary">
        <h3>Summary</h3>
        <p>Total Intake: {totalIn} kcal</p>
        <p>Total Burned: {totalOut} kcal</p>
        <p>Net Calories: {netCalories} kcal</p>
      </div>

      <div className="log">
        <h3>Daily Log</h3>
        <ul>
          {log.map((entry, index) => (
            <li key={index}>
              Intake: {entry.caloriesIn} kcal, Burned: {entry.caloriesOut} kcal
            </li>
          ))}
        </ul>
      </div>
    </div>
    <br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /> <br /><br /><br />
    </>
  );
};

export default HealthTracker;
