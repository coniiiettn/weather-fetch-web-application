import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { getWeatherIcon } from '../pages/api/weatherAPI';

function WeatherCard({ weatherInfo }) {
  return (
    <Card style={{
      display: 'flex',
      justifyContent: 'space-evenly', // Adjusted to space-evenly
      alignItems: 'center', // Center align items vertically
      flexDirection: 'row', // Ensure items are in a row
      width: '100%',
      margin: '1rem auto',
      padding: '1rem',
      border: '1px solid rgba(0, 0, 0, 0.1)', 
      borderRadius: '20px',
      backgroundColor: 'rgba(0, 0, 0, 0.1)', // Dark and semi-transparent background
      fontFamily: 'Gill Sans', // Font family
    }}>
      <Col xs={6} md={4} className="text-center">
        <Image src={getWeatherIcon(weatherInfo)} roundedCircle fluid alt="Weather Icon" className="mb-3" />
        <p className="card-text cfs-5" style={{
          fontSize: '50px',
          color: 'rgba(0, 0, 0, 0.7)', // Dark and semi-transparent text
         }}>{weatherInfo.main.temp}°C</p>
      </Col>
      <Col xs={6} md={8} className="d-flex flex-column justify-content-center">
        <div>
          <h2 className="mb-4">{weatherInfo.name}, {weatherInfo.sys.country} <img
            src={`http://openweathermap.org/images/flags/${weatherInfo.sys.country.toLowerCase()}.png`}
            alt="flag"
            style={{ width: '25px', height: 'auto' }}
            className="mb-2"
          /></h2>
          <p className="mb-2">Weather Condition: {weatherInfo.weather[0].main}</p>
          <p className="mb-2">Weather Description: {weatherInfo.weather[0].description}</p>
          <p className="mb-2">Temperature: {weatherInfo.main.temp}°C (Min: {weatherInfo.main.temp_min}°C, Max: {weatherInfo.main.temp_max}°C)</p>
          <p className="mb-2">Wind Speed: {weatherInfo.wind.speed} m/s</p>
          <p className="mb-2">Humidity: {weatherInfo.main.humidity}%</p>
          <p className="mb-2">Pressure: {weatherInfo.main.pressure} hPa</p>
          <p className="mb-0">Sunrise: {new Date(weatherInfo.sys.sunrise * 1000).toLocaleTimeString()}</p>
          <p className="mb-0">Sunset: {new Date(weatherInfo.sys.sunset * 1000).toLocaleTimeString()}</p>
        </div>
      </Col>
    </Card>
  );
}

export default WeatherCard;
