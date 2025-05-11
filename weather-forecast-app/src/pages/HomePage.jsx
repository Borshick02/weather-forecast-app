// src/pages/HomePage.jsx
import React from "react";
import Weather from "../hooks/useWeather";

const HomePage = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Weather temperature</h1>
      <Weather /> 
    </div>
  );
};

export default HomePage;
