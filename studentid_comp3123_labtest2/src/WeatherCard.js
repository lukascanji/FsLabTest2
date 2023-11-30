import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weatherData }) => {
    // Destructure the necessary data from weatherData
    const { name, main, weather, wind } = weatherData;
    const { temp, feels_like, temp_min, temp_max, pressure, humidity } = main;
    const [weatherInfo] = weather; // Assuming weather is an array with at least one item
    const { description, icon } = weatherInfo;
    const { speed: windSpeed } = wind;

    // Convert temperature from Kelvin to Celsius (if the API returns temperature in Kelvin)
    const toCelsius = kelvin => (kelvin - 273.15).toFixed(2);

    return (
        <div className="weather-card">
            <h2>{name}</h2>
            <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="Weather icon" />
            <p>Temperature: {toCelsius(temp)}°C</p>
            <p>Feels Like: {toCelsius(feels_like)}°C</p>
            <p>Min Temp: {toCelsius(temp_min)}°C</p>
            <p>Max Temp: {toCelsius(temp_max)}°C</p>
            <p>Pressure: {pressure} hPa</p>
            <p>Humidity: {humidity}%</p>
            <p>Weather: {description}</p>
            <p>Wind Speed: {windSpeed} m/s</p>
        </div>
    );
};

export default WeatherCard;