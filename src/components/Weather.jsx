import React, { useState } from "react";
import "../styles/Weather.css";
import fetchAPI from "../services/fetchAPI.js";

export const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const handleInputChange = (event) => setCity(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchAPI(city, setWeatherData);
  };

  const weatherIcon = weatherData.weather
    ? `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    : null;

  return (
    <>
      <div className="weatherDetails">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={handleInputChange}
          />
          <button type="submit">Get Weather</button>
        </form>
        {weatherData.main && (
          <>
            <h2>{weatherData.name}</h2>
            {weatherIcon && (
              <img src={weatherIcon} alt={weatherData.weather[0].description} />
            )}
            <p className="info">Temperature: {weatherData.main.temp}°C</p>
            <p className="info">
              Description: {weatherData.weather[0].description}
            </p>
            <p className="info">Feels like: {weatherData.main.feels_like}°C</p>
            <p className="info">Humidity: {weatherData.main.humidity}%</p>
            <p className="info">Pressure: {weatherData.main.pressure}</p>
            <p className="info">Wind speed: {weatherData.wind.speed}m/s</p>
          </>
        )}
      </div>
    </>
  );
};
