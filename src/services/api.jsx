export const fetchWeather = async (city) => {
  const url = `http://api.weatherapi.com/v1/current.json?q=${city}`;
  
  const response = await fetch(url);
  if (!response.ok) throw new Error("Ошибка получения данных из API");
  
  const data = await response.json();
  return {
    temperature: data.current.temp_c,
    windspeed: data.current.wind_kph,
    weathercode: data.current.condition.code,
  };
};
