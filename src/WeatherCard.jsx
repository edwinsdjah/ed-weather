import React from 'react';
import { useWeather } from './WeatherContext';

const WeatherCard = () => {
  const { weather, loading } = useWeather();

  if (loading) return <p>Loading...</p>;
  if (!weather) return <p>No Weather Data Available.</p>;
  // variable diatas juga merupakan context yang diambil dari component context

  return (
    <div>
      <h2>{weather.name}</h2>
      <p>Temperature: {weather.main.temp}</p>
      <p>Weather: {weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
