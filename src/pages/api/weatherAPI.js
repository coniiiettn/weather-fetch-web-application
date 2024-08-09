// This file contains the functions to fetch weather data from the OpenWeatherMap API.

const API_KEY = process.env.NEXT_PUBLIC_API_URL;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function fetchWeatherData(searchValue, searchType, language = 'en') {
  try {
    let weatherData = null;
    if (searchType === 'id') {
      weatherData = await getWeatherById(searchValue, language);
    } else if (searchType === 'name') {
      weatherData = await getWeatherByName(searchValue, language);
    }
    return weatherData;
  } catch (error) {
    throw error;
  }
}


export async function fetchSunsetSunrise(searchValue, searchType, language = 'en') {
  try {
    let weatherData = null;
  if (searchType === 'name') {
      weatherData = await getWeatherByName(searchValue, language);
    }
    return weatherData;
  } catch (error) {
    throw error;
  }
}

export async function getWeatherByCoordinates(latitude, longitude, language) {
  try {
    const url = `${BASE_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=${language}`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Failed to fetch current weather');
    }
    return await res.json();
  } catch (error) {
    throw error;
  }
}

export async function getWeatherById(cityId, language) {
  try {
    const url = `${BASE_URL}/weather?id=${cityId}&appid=${API_KEY}&units=metric&lang=${language}`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Please enter a valid city ID');
    }
    return await res.json();
  } catch (error) {
    console.error('Error in getWeatherById:', error);
    throw error;
  }
}

export async function getWeatherByName(name, language) {
  try {
    const cities = name.split(',').map(city => city.trim()).join(',');
    const url = `${BASE_URL}/find?q=${cities}&appid=${API_KEY}&units=metric&cnt=50&lang=${language}`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Please enter a valid City Name');
    }
    return await res.json();
  } catch (error) {
    console.error('Error in getWeatherByName:', error);
    throw error;
  }
}

export function getWeatherIcon(weatherInfo) {
  return `http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@4x.png`;
}
