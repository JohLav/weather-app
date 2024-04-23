import React, { useState } from "react";
import "../styles/Weather.css";
import fetchAPI from "../services/fetchAPI.js";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [isFavorite, setIsFavorite] = useState(city.isFavorite);

  const handleInputChange = (event) => setCity(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchAPI(city, setWeatherData);
  };

  const handleClickFavorite = () => {
    event.preventDefault();
    setIsFavorite(!isFavorite);
  };

  const weatherIcon = weatherData.weather
    ? `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    : null;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
        />
        {/*<button type="submit">Get Weather</button>*/}
      </form>
      {weatherData.main && (
        <>
          <div className="title">
            <h2>{city}</h2>
            <button
              id="favorite"
              onClick={handleClickFavorite}
              className={!isFavorite ? "notFavorite" : "isFavorite"}
            ></button>
          </div>
          <div className="header">
            {weatherIcon && (
              <img src={weatherIcon} alt={weatherData.weather[0].description} />
            )}
            <div className="main-data">
              <span>{weatherData.main.temp}°C</span>
              <p>{weatherData.weather[0].description}</p>
            </div>
          </div>
          <div className="container-el">
            <div className="element">
              <span>{weatherData.main.feels_like}°C</span>
              <p>feels like</p>
            </div>
            <div className="element">
              <span>{weatherData.main.humidity}%</span>
              <p>humidity</p>
            </div>
            <div className="element">
              <span>{weatherData.main.pressure}</span>
              <p>pressure</p>
            </div>
            <div className="element">
              <span>{weatherData.wind.speed}m/s</span>
              <p>wind speed</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
