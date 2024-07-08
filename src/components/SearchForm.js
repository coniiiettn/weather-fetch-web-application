
import React, { useState } from 'react';
import { Navbar, Form, Button, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router';

function SearchForm({ language }) {
  const router = useRouter();
  //To avoid multiple error message is displayed, use state to manage error message
  const [error, setError] = useState(null);
  //Manage search type state to determine whether to search by ID or name
  const [searchType, setSearchType] = useState('id');
  const [searchValue, setSearchValue] = useState('');

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
    setError(null); // Clear the error when search type changes
  };

  const handleSubmit = async (event) => {
    // Prevent the form from reloading the page
    event.preventDefault();
    setError(null);
    if (searchValue) {
      if (searchType === 'id' && isNaN(searchValue)) {
        setError('For "Search by ID", only numeric values are allowed.');
        return;
      }
      
      if (searchType === 'name' && !isNaN(searchValue)) {
        setError('Please enter a valid city name.');
        return;
      }
      try {
        // Redirect to the search page with the search value as the route parameter
        router.push(`/${searchValue}`);
      } catch (error) {
        setError(error.message);
      }
    }

  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (searchType === 'id') {
      // Allow only numeric input for 'id' search type
      if (isNaN(value)) {
        setError('For "Search by ID", only numeric values are allowed.');
        return;
      }
      setSearchValue(value);
    } else {
      if (!isNaN(value)) {
        setError('Please enter a valid city name.');
        return;
      }
      setSearchValue(value);
    }
    // Clear any existing error message 
    //setError(null); 
  };

  return (
    <div>
      <Navbar className="bg-body-tertiary justify-content-center">
        <Form inline="text" onSubmit={handleSubmit}>
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Control
                required
                type="text"
                placeholder={
                  searchType === 'id'
                    ? 'Enter City ID, e.g., 2172797'
                    : 'Enter City Name, Country Code'
                }
                name="searchValue"
                className="mr-sm-2"
                value={searchValue}
                onChange={handleInputChange}
                style={{
                  fontSize: '0.8rem',
                  fontFamily: 'Arial, sans-serif',
                  minWidth: '300px',
                }}
              />
            </Col>
            <Col xs="auto">
              <Button type="submit" variant="outline-success" className="btn-sm">
                Search
              </Button>
            </Col>
            <Col xs="auto" className="mt-2 mt-sm-0">
              <Form.Switch
                type="radio"
                id="searchById"
                name="searchType"
                value="id"
                label="Search by ID"
                checked={searchType === 'id'}
                onChange={handleSearchTypeChange}
                className="me-2"
                style={{
                  fontSize: '0.8rem',
                  fontFamily: 'Arial, sans-serif',
                }}
              />
              <Form.Switch
                type="radio"
                id="searchByName"
                name="searchType"
                value="name"
                label="Search by Name, Country Code"
                checked={searchType === 'name'}
                onChange={handleSearchTypeChange}
                className="me-2"
                style={{
                  fontSize: '0.8rem',
                  fontFamily: 'Arial, sans-serif',
                }}
              />
            </Col>
          </Row>
        </Form>
      </Navbar>
      {error && (
        <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>
          Error: {error}
        </p>
      )}
    </div>
  );
}

export default SearchForm;
