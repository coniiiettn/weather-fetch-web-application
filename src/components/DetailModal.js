// components/DetailModal.js


import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useRecentlyViewed } from '../context/recentlyView'; 
import { getWeatherById } from '../pages/api/weatherAPI'; 

const DetailModal = ({ show, onHide, weatherInfo }) => {
  const { addRecentlyViewed } = useRecentlyViewed();
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);

  const handleClose = () => {
    // Add the city to the recently viewed list when the modal is closed
    console.log('Adding city to recently viewed:', weatherInfo.id); 
    addRecentlyViewed(weatherInfo.id);
    onHide();
  };

  useEffect(() => {
    const fetchSunriseSunset = async () => {
      try {
        const cityWeather = await getWeatherById(weatherInfo.id); 
        setSunrise(new Date(cityWeather.sys.sunrise * 1000).toLocaleTimeString());
        setSunset(new Date(cityWeather.sys.sunset * 1000).toLocaleTimeString());
      } catch (error) {
        console.error('Error fetching sunrise/sunset data:', error);
      }
    };

    fetchSunriseSunset();
    // whenever the weatherInfo.id changes, fetch the sunrise/sunset data, this will ensure the sunrise/sunset data is updated when the modal is opened for a different city.
  }, [weatherInfo.id]); 

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {weatherInfo.name}, {weatherInfo.sys.country}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Temperature:</strong> {weatherInfo.main.temp}°C</p>
        <p><strong>Weather Condition:</strong> {weatherInfo.weather[0].main}</p>
        <p><strong>Weather Description:</strong> {weatherInfo.weather[0].description}</p>
        <p><strong>Min Temperature:</strong> {weatherInfo.main.temp_min}°C</p>
        <p><strong>Max Temperature:</strong> {weatherInfo.main.temp_max}°C</p>
        <p><strong>Wind Speed:</strong> {weatherInfo.wind.speed} m/s</p>
        <p><strong>Humidity:</strong> {weatherInfo.main.humidity}%</p>
        <p><strong>Pressure:</strong> {weatherInfo.main.pressure} hPa</p>
        <p><strong>Sunrise:</strong> {sunrise}</p>
        <p><strong>Sunset:</strong> {sunset}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-info" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DetailModal;
