// src/pages/FavoritesPage.jsx
import React from "react";

const FavoritesPage = () => {
  const favoriteCities = ["London", "Paris", "New York", "Tokyo"];

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>City list</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {favoriteCities.map((city, index) => (
          <li
            key={index}
            style={{
              fontSize: "1.2rem",
              padding: "0.5rem 0",
              borderBottom: "1px solid #ddd",
              textAlign: "center",
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
