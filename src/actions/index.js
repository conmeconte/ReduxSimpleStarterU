import axios from 'axios';


const API_KEY = '2b085d26a1786ad088c6d176f6d200fd';
const WEATHER_URL= `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${WEATHER_URL}&q=${city},us`;
    const request = axios.get(url); 
    return{
        type: FETCH_WEATHER,
        payload: request
    }
}
