# **Weather Fetch: Retrieve current weather information**
![Screenshot 2024-07-08 at 5 37 43 PM](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/87624db4-e3ab-493f-84e2-cc2031db7469)

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
- Automatically extract the user's location through Geolocation API
- Display the real-time weather info by card
  
![Screenshot 2024-07-08 at 5 38 00 PM](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/e96d7cb5-b9e9-4cde-b96f-1ea3c1a06703)


### Navbar
- Link to Home page and All Cities page
- Search bar with switch button for user to change search mode (Allow user searching by City ID or City name)
- Recently Viewed Dropdown List

![Screenshot 2024-07-08 at 5 42 46 PM](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/cc9cd052-233e-402b-b0ca-d8da2c9588b5)

![Screenshot 2024-07-08 at 5 42 54 PM](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/cfc4c5c3-5179-4055-b090-7bb9dff1ae2e)

### Search By ID

![Screenshot 2024-07-08 at 5 38 10 PM](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/91c51c35-a76a-4790-99e2-72075af9974f)


### Search By City Name

![Screenshot 2024-07-08 at 5 39 37 PM](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/fac69df1-b2d7-4dcc-91f4-bd0c19265d03)


### Search By City Name, CountryCode
- Regardless of spaces between name, comma, country code

![Screenshot 2024-07-08 at 5 40 20 PM](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/310c8eaf-b2fc-444f-afa9-316172d2c3c7)

### Modal Window
- Pop up window (Modal) for detailed result

![Screenshot 2024-07-08 at 5 39 45 PM](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/403b94cc-76ee-4d26-938b-6c875676fb40)

### Language Selector
- Select language to translate weather description into target language
![Screenshot 2024-07-08 at 5 43 23 PM](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/5dad79a0-c12a-4cb4-aa08-0177d3fd6690)

![Screenshot 2024-07-08 at 5 43 40 PM](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/4854a38f-5f01-4a2f-bc0e-fb78336ec34c)

![Screenshot 2024-07-08 at 5 55 17 PM](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/ab463cf3-0799-4fe0-afb2-4090cc39d485)


### Recently Viewed Cities
- City ID is pushed to Recently Viewed Dropdown Menu(five as maximum), can be clicked to see detail
- After clicking on a city ID from the recently viewed list in your weather application, the page renders and displayss detailed weather information for that city

![Screenshot 2024-07-08 at 5 41 37 PM](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/11a98e6f-a0a4-4033-bb60-a086a939d701)


![Screenshot 2024-07-08 at 5 42 27 PM](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/fcb71c61-3f97-4b97-8c31-4cdde97b8604)


### Validation and Error Handling
- Block input section if the input does not meet the required criteria (e.g., non-numeric input for City ID, numeric input for City Name)
- Display of error messages for invalid inputs and other errors

![Screenshot 2024-07-08 at 5 44 12 PM](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/d1cf3d08-3ef7-4f2e-b982-28dddb7ff07c)

![Screenshot 2024-07-08 at 5 38 42 PM](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/dfeadac1-a0da-4ad8-b92c-ee62ec145074)

![Screenshot 2024-07-08 at 5 39 00 PM](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/7742296f-32c6-42d7-bc65-bd14b77abe98)

![Screenshot 2024-07-08 at 6 01 19 PM](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/2e98a807-6c2d-4b80-bfea-ed425d6d533f)

### 404 Not Found Page
- Display of 404 error page for non-existent routes

![Screenshot 2024-07-08 at 5 44 56 PM](https://github.com/coniiiettn/weather-fetch-web-application/assets/132239088/ec73f583-a47b-44fa-b834-c52ca3418396)


## **Summary**

This project is a dynamic weather application that offers a seamless experience for users to fetch and view weather information for various locations. It includes dynamic routing for city queries, location-based weather fetching, language translation options, and detailed weather displays. The recently viewed cities feature allows quick access to previous cities without additional API calls, and the detailed modal provides comprehensive weather details, including sunrise and sunset times. The client-side validation ensures user input integrity, making it a comprehensive tool for weather updates.
