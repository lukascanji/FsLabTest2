import React, { useState } from 'react';
import WeatherCard from './WeatherCard';
import SearchBar from './SearchBar';
import { fetchWeatherData } from './api/api';
const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');

    const handleSearch = async (searchCity) => {
        setCity(searchCity);
        try {
            const data = await fetchWeatherData(searchCity);
            console.log('API Data:', data); // This line will log the data to the console
            setWeatherData(data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
            
        }
    };
    

    return (
        <div>
            <h1>Weather App</h1>
            <SearchBar onSearch={handleSearch} />
            {weatherData && <WeatherCard weatherData={weatherData} />}
        </div>
    );
};

export default App;
