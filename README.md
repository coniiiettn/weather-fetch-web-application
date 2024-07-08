# **Weather Fetch: Retrieve current weather information**
![image](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/dee113ee-a07d-4100-9a7e-596f61ed4124)

Weather Fetch is a dynamic weather application developed using React and Next.js, integrated with the OpenWeatherMap API. The app allows users to search for weather information by city name, city ID, or their current location. It includes support for multiple languages and provides weather description in a user-friendly interface.

## **Tehnology Stack**

- **Frameworks**: React, Next.js
- **API**: OpenWeatherMap API
- **Styling**: React Bootstrap
- **State Management**: React Hooks (useState, useEffect, useContext)
- **Routing**: Next.js file-based dynamic routing
- **Context**: ***RecentlyViewedContext*** for managing recent viewed cities
- **Client-Side Validation**: Form validation using state management and event handling
- **Utilities**: Geolocation API for location-based weather fetching
  
## **Features**

- **Dynamic Routing** Fetch weather data for multiple cities through dynamic routing
- **Weather Data Fetching**: Retrieve weather information by city name, city ID, or geographical coordinates.
- **Location-Based Weather**: Automatically fetch weather data based on the user's current location
- **Responsive Navigation**: Navigate through the app with a well-structured navigation bar, including search and recently viewed cities.
- **Recently Viewed Cities**: A dropdown list to track and display up to five recently viewed cities using context and hooks. Users can access weather info for these cities without calling the API again.
- **State Management**: Efficiently manage user inputs and language preferences.
- **Weather Display**: Present weather data with **pagination** and detailed views in **modals**.
- **Language Support**: Translate weather descriptions into different languages.
- **Error Handling**: Display appropriate messages for any errors encountered through client-side validation.

## **FeaturePreviews**

### Home Page
- Automatically extract the current date/time/location
- Display the local weather info by card

![image](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/faa3773b-ecb0-4e65-9aa9-dd18db3ae134)

### Navbar
- Link to Home page and All Cities page
- Search bar with switch button for user to search weather by City ID or City name
- Recently Viewed Dropdown List
- Dropdown list for language selection

![image](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/aa4ddd18-7216-4d73-b5d0-52bb54ec3efd)

### Language Selector
- Select language to translate weather description into target language

![image](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/60584478-0b8a-4d0d-b4bb-9c202c9c0dbc)

![image](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/6a119262-12e4-4abd-add4-6f3dd984c78e)

### Search By ID
- Pop up window (Modal) for detailed result

![image](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/fa1b8002-ff98-4a48-950b-aa201900bd90)

![image](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/699a22c7-c0ef-45e8-93b0-d1bef547407f)

### Search By City Name
![image](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/4dd8721a-57bc-4d8d-ad76-ee1bda429a57)

### Search By City Name, CountryCode
- Regardless of spaces between name, comma, country code

![image](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/294650e5-cb6e-4715-ba75-514804991f48)

![image](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/311468e4-1ee8-4afb-926b-755fc9898246)


### Recently Viewed Cities
- City ID is pushed to Recently Viewed Dropdown Menu(five as maximum), can be clicked to see detail
- After clicking on a city ID from the recently viewed list in your weather application, the page renders and displayss detailed weather information for that city

![image](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/d8f4b65e-fa5a-4347-8227-5ae9d323e2ab)

![image](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/03a6d5de-1e63-4a8f-b54d-e3654ef70a75)

![image](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/a5865c9d-6edc-40ee-a955-8d8a19c4fdb9)

### Error Handling
- Display of error messages for invalid inputs and other errors

![image](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/c1f45bd4-364c-4a11-8092-86bd80c99381)

![image](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/d2c07814-6569-42fc-b94e-f64fad100af2)

![image](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/a8befae3-7e6d-4e07-9c84-85ddc522145a)

![image](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/d398c50e-89c8-4f2d-876f-4a14d07d083a)

### 404 Not Found Page
- Display of 404 error page for non-existent routes

![image](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/89a7ddac-e035-408f-b3c5-3771854be3d3)



## **Summary**

This project is a dynamic weather application that offers a seamless experience for users to fetch and view weather information for various locations. It includes dynamic routing for city queries, location-based weather fetching, language translation options, and detailed weather displays. The recently viewed cities feature allows quick access to previous cities without additional API calls, and the detailed modal provides comprehensive weather details, including sunrise and sunset times. The client-side validation ensures user input integrity, making it a comprehensive tool for weather updates.
