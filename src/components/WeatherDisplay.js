import React, { useState } from 'react';
import { Image, Card, Button } from 'react-bootstrap';
import DetailModal from './DetailModal';
import Pagination from './Pagination'; // Import your custom Pagination component
import { getWeatherIcon } from '@/pages/api/weatherAPI'; // Adjust path based on your project structure

function WeatherDisplay({ weatherInfoList }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const itemsPerPage = 3;

  // Calculate total pages based on weatherInfoList length and itemsPerPage
  const totalPages = Math.ceil(weatherInfoList.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Function to handle card click and show modal
  const handleCardClick = (weatherInfo) => {
    setSelectedCity(weatherInfo);
    setShowModal(true);
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedCity(null);
  };

  // Calculate the range of weather items to display based on currentPage and itemsPerPage
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedWeatherInfo = weatherInfoList.slice(startIndex, endIndex);

  return (
    <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        style={{ marginTop: '2rem' }} // Adjust margin top as needed
      />

      {/* Weather cards */}
      {displayedWeatherInfo.map((weatherInfo, index) => (
        <Card
          key={index}
          style={{
            width: '100%',
            maxWidth: '600px',
            marginBottom: '1rem',
            cursor: 'pointer',
            backgroundColor: 'rgba(0, 0, 0, 0.2)', // Dark and semi-transparent background
            color: 'rgba(0, 0, 0, 9)', // Dark and semi-transparent text
            border: 'none', // Remove border line
          }}
          onClick={() => handleCardClick(weatherInfo)}
        >
          <Card.Body style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src={getWeatherIcon(weatherInfo)}
              roundedCircle
              fluid
              alt="Weather Icon"
              style={{ width: '80px', height: '80px', marginLeft: '3rem',marginRight: '3rem' }}
            />
            <div>
              <Card.Title style={{ fontSize: '20px', marginBottom: '0.5rem' }}>
                {weatherInfo.name}, {weatherInfo.sys.country}
                <Image
                  src={`http://openweathermap.org/images/flags/${weatherInfo.sys.country.toLowerCase()}.png`}
                  alt="Country flag"
                  style={{ width: '20px', height: 'auto', marginLeft: '0.5rem' }}
                />
              </Card.Title>
              <Card.Text style={{ marginBottom: '0.5rem', fontSize: '14px' }}>
                Weather: {weatherInfo.weather[0].description}
              </Card.Text>
              <Card.Text style={{ marginBottom: '0.5rem', fontSize: '14px' }}>
                Temperature: {weatherInfo.main.temp}°C
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      ))}

      {/* Modal for displaying city details */}
      {selectedCity && <DetailModal show={showModal} onHide={closeModal} weatherInfo={selectedCity} />}
    </div>
  );
}

export default WeatherDisplay;
