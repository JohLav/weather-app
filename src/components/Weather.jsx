import React, { useEffect, useState } from "react";
import "../styles/Weather.css";
import fetchAPI from "../services/fetchAPI.js";
// const apiKey = import.meta.env.VITE_API_KEY;

export const Weather = () => {
  const [city, setCity] = useState("Lyon");
  const [weatherData, setWeatherData] = useState({});

  const handleInputChange = (event) => setCity(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    fetchAPI(city, setWeatherData);
  }, [city]);

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
          {/* onClick={setCityInput} */}
        </form>
        {weatherData.main && (
          <>
            <h2>{weatherData.name}</h2>
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
        {/*{weatherData ? (*/}
        {/*  <>*/}
        {/*    <h2>{weatherData.name}</h2>*/}
        {/*    <p className="info">Temperature: {weatherData.main.temp}°C</p>*/}
        {/*    <p className="info">*/}
        {/*      Description: {weatherData.weather[0].description}*/}
        {/*    </p>*/}
        {/*    <p className="info">Feels like: {weatherData.main.feels_like}°C</p>*/}
        {/*    <p className="info">Humidity: {weatherData.main.humidity}%</p>*/}
        {/*    <p className="info">Pressure: {weatherData.main.pressure}</p>*/}
        {/*    <p className="info">Wind speed: {weatherData.wind.speed}m/s</p>*/}
        {/*  </>*/}
        {/*) : (*/}
        {/*  <p>Loading weather data...</p>*/}
        {/*)}*/}
      </div>
    </>
  );
};
