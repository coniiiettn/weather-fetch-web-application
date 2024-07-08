//page/index.js
import { useEffect, useState } from 'react';
import Head from 'next/head';

import { getWeatherByCoordinates } from './api/weatherAPI';

import WeatherCard from '../components/WeatherCard';
import LanguageSelector from '../components/LanguageSelector'; 


export default function Home() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //Set the default language to English
  const [language, setLanguage] = useState('en'); 

  useEffect(() => {
    //Using promise to get the current location, ensure we get the location before fetching the weather data. 
    const getCurrentLocation = () => {
      return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        } else {
          reject(new Error('Current geolocation is not available'));
        }
      });
    };
 
    
    const fetchWeatherByLocation = async () => {
      try {
        const position = await getCurrentLocation();
        const { latitude, longitude } = position.coords;
        //APIcall 1: Fetch the current weather data by coordinates
        const currentWeather = await getWeatherByCoordinates(latitude, longitude, language); 
        setWeatherInfo(currentWeather);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchWeatherByLocation();
    //When the language changes, this effect will execute again to fetch the weather data in the new language.
  }, [language]); 


  return (
    <>
      <Head>
        <title>Weather App - YungTingHsu</title>
      </Head>
      <LanguageSelector language={language} onLanguageChange={setLanguage} />
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>Error: {error}</p>}
        {weatherInfo && <WeatherCard weatherInfo={weatherInfo} />}
    </>
  );
}
