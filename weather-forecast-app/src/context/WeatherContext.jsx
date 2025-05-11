// src/context/WeatherContext.jsx
import React, { createContext, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [favoriteCities, setFavoriteCities] = useState({
    London: { latitude: 51.5074, longitude: -0.1278 },
    Paris: { latitude: 48.8566, longitude: 2.3522 },
    "New York": { latitude: 40.7128, longitude: -74.0060 },
    Tokyo: { latitude: 35.6762, longitude: 139.6503 },
  });

  const addFavoriteCity = (city, coordinates) => {
    setFavoriteCities({
      ...favoriteCities,
      [city]: coordinates,
    });
  };

  const removeFavoriteCity = (city) => {
    const newFavoriteCities = { ...favoriteCities };
    delete newFavoriteCities[city];
    setFavoriteCities(newFavoriteCities);
  };

  return (
    <WeatherContext.Provider
      value={{ favoriteCities, addFavoriteCity, removeFavoriteCity }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
