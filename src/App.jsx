import React from 'react';
import { WeatherProvider } from './WeatherContext';
import SearchForm from './SearchForm';
import WeatherCard from './WeatherCard';

const App = () => {
  return (
    <WeatherProvider>
      <div>
        <h1>Weather App</h1>
        <SearchForm></SearchForm>
        <WeatherCard></WeatherCard>
      </div>
      {/* div diatas dianggap children oleh provider seperti yang sudah di deklare pada file provider */}
    </WeatherProvider>
  );
};

export default App;
