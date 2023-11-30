import axios from 'axios';

const API_KEY = '0ee19d37d12f133c5c51c15a9779bbb0'; 
export const fetchWeatherData = async (city) => {
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather`, {
            params: {
                q: city,
                appid: API_KEY
            }
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error("Error status:", error.response.status);
            console.error("Error data:", error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            console.error("No response received:", error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error("Error message:", error.message);
        }
    }
};
