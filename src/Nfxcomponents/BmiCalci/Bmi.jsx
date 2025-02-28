import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Bmi.css"; 

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (height > 0 && weight > 0) {
      let bmiValue = (weight / ((height / 100) * (height / 100))).toFixed(1);
      setBmi(bmiValue);
      determineCategory(bmiValue);
    }
  };

  const determineCategory = (bmiValue) => {
    if (bmiValue < 18.5) setCategory("Underweight");
    else if (bmiValue >= 18.5 && bmiValue <= 24.9) setCategory("Normal");
    else if (bmiValue >= 25 && bmiValue <= 29.9) setCategory("Overweight");
    else setCategory("Obese");
  };

  // Graph data
  const bmiData = [
    { category: "Underweight", value: 18.5 },
    { category: "Normal", value: 24.9 },
    { category: "Overweight", value: 29.9 },
    { category: "Obese", value: 35 },
    { category: category, value: bmi || 0 }, // Current BMI category
  ];

  return (
    <div className="bmi-container">
      <h2 className="text-center">BMI Calculator</h2>
      <div className="row">
        {/* BMI Input Form */}
        <div className="col-lg-6 col-md-6 col-sm-12 bmi-input">
          <label>Height (cm):</label>
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Enter height" />

          <label>Weight (kg):</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Enter weight" />

          <button className="btn btn-primary mt-3" onClick={calculateBMI}>
            Calculate BMI
          </button>

          {bmi && (
            <div className="bmi-result mt-3">
              <h4>Your BMI: {bmi}</h4>
              <p className={`bmi-category ${category.toLowerCase()}`}>{category}</p>
            </div>
          )}
        </div>

        {/* BMI Graph */}
        <div className="col-lg-6 col-md-6 col-sm-12 bmi-graph">
          <h4>BMI Chart</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={bmiData}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#007bff" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
