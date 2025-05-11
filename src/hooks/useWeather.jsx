import React, { useState } from "react";

const fetchWeather = async (city) => {
  try {
    // API Open-Meteo требует координаты для города.
    // Пример: для Лондона (широта: 51.5074, долгота: -0.1278)
    const coordinates = {
      "London": { latitude: 51.5074, longitude: -0.1278 },
      "Paris": { latitude: 48.8566, longitude: 2.3522 },
      "New York": { latitude: 40.7128, longitude: -74.0060 },
      "Tokyo": { latitude: 35.6762, longitude: 139.6503 },
      
      
    };

   
    if (!coordinates[city]) throw new Error("Город не найден");

    const { latitude, longitude } = coordinates[city];
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

    const response = await fetch(url);
    if (!response.ok) throw new Error("Ошибка получения данных из API");

    const data = await response.json();
    return {
      temperature: data.current_weather.temperature,
      windspeed: data.current_weather.windspeed,
      weathercode: data.current_weather.weathercode,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setError(null);
    setWeather(null);
    try {
      const weatherData = await fetchWeather(city);
      setWeather(weatherData);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City"
      />
      <button onClick={handleSearch}>Show results</button>

      {error && <p style={{ color: "#FFFF66" }}>{error}</p>}
      {weather && (
        <div>
          <h2>Погода в {city}</h2>
          <p>Температура: {weather.temperature}°C</p>
          <p>Скорость ветра: {weather.windspeed} м/с</p>
          <p>Код погоды: {weather.weathercode}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
