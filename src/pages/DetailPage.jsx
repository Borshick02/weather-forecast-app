// src/pages/DetailPage.jsx
import React from "react";
import { useParams } from "react-router-dom";

function DetailPage() {
  const { city } = useParams();
  return <h2>Weather Details for {city}</h2>;
}

export default DetailPage;
