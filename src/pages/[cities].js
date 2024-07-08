
// pages/[cities].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchWeatherData } from './api/weatherAPI';
import WeatherDisplay from '../components/WeatherDisplay';
import LanguageSelector from '../components/LanguageSelector';

export default function CityWeather() {
  const router = useRouter();
  //cities as the dynamic route parameter
  const { cities } = router.query;
  //Empty array to store weather information
  const [weatherInfoList, setWeatherInfoList] = useState([]);
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState('en');


  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      if (cities) {
        try {
          const weatherData = await fetchWeatherData(cities, isNaN(cities) ? 'name' : 'id', language);
          setWeatherInfoList(isNaN(cities) ? weatherData.list : [weatherData]);
        } catch (error) {
          setError(error.message);
          setWeatherInfoList([]);
        }
      }
    };

    fetchData();
  }, [cities, language]);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (

    <>{error && <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>Error: {error}</p>}
      <LanguageSelector language={language} onLanguageChange={handleLanguageChange} />
      {weatherInfoList.length > 0 && <WeatherDisplay weatherInfoList={weatherInfoList} />}</>

  );
}
