# WeatherNow

---

## Overview

WeatherNow is a responsive weather application built with React that provides current weather conditions and a multi-day forecast for cities worldwide. The project integrates the OpenWeather API and focuses on clean UI, responsive design, and user-friendly error handling.

---

## Features

- Search weather by city name
- Current weather conditions
- Multi-day weather forecast
- City autocomplete suggestions
- Temperature unit switching (°C / °F)
- Responsive layout
- Loading and error states
- Weather search by current location

---

## Tech Stack

- React
- JavaScript (ES6+)
- Vite
- Tailwind CSS
- OpenWeather API
- Fetch API

---

## Project Structure

```text
src/
├── components/
│   ├── ErrorMessage
│   ├── LoadingSpinner
│   ├── SearchBar
│   ├── TemperatureToggle
│   ├── WeatherCard
│   └── WeatherForecast
├── hooks/
│   └── useWeather
├── services/
│   └── weatherApi
├── utils/
├── assets/
├── App.jsx
└── main.jsx
```

---

## Core Logic

### Main Logic

The application manages weather data through a custom React hook and communicates with the OpenWeather API.

- Fetches current weather data
- Retrieves weather forecast
- Searches cities using the Geocoding API
- Supports geolocation-based weather lookup
- Handles loading and API error states

---

## Performance Optimizations

- Custom hook for centralized state management
- Asynchronous API requests using `async/await`
- Conditional rendering to avoid unnecessary UI updates
- Component-based architecture for maintainability

---

## UI / UX

- Responsive design for desktop and mobile devices
- Clean and minimal interface
- Instant loading feedback
- Friendly error messages
- Simple temperature unit switching

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

---

## Future Improvements

- Hourly weather forecast
- Recent search history
- Weather maps integration
- Multiple language support

---

## Author

**Dmytro**

Frontend Developer (React / TypeScript)

---

## Notes

This project demonstrates working with external REST APIs, asynchronous data fetching, custom React hooks, component-based architecture, responsive UI development, and robust handling of loading and error states.
