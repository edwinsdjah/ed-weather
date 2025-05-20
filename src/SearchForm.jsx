import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useWeather } from './WeatherContext';
// useWeather merupakan context yang dipanggil dari komponen context

const SearchForm = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const [city, setCity] = useState('');
  const { setWeather, setLoading } = useWeather();
  // kita hanya tinggal panggil isi dari contextnya saja setelah contextnya digunakan

  const handleSearch = async e => {
    e.preventDefault();
    if (!city) return;
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=71dfb18a28f2a1b55a88b008f1ddf3e4`
      );
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type='text'
        placeholder='Enter City'
        value={city}
        onChange={e => setCity(e.target.value)}
        ref={inputRef}
      />
      <button type='submit'>Search</button>
    </form>
  );
};

export default SearchForm;
