import React, { createContext, useState } from 'react';

const WeatherContext = createContext();
// Context ini digunakan agar komponen pada masing2 page dapat berbagi value variable tanpa harus passing props kesana sini

export const WeatherProvider = ({ children }) => {
  // children di deklarasi sebagai props
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  // Diatas adalah contoh dari variable2 yang akan digunakan pada komponen page lain

  return (
    <WeatherContext.Provider
      value={{ weather, setWeather, loading, setLoading }}
    >
      {children}
      {/* children harus digunakan didalam provider agar context tetap merender setiap component di dalam provider ini */}
    </WeatherContext.Provider>
    // Provider adalah tempat untuk menampung variable2 yang akan digunakan pada komponen2 page lain
  );
};

export const useWeather = () => React.useContext(WeatherContext);
// membuat sebuah hooks baru dengan cara menggunakan useContext terlebih dahulu disin, jadi pada komponen pages lain, kita hanya tinggal panggil useWeathernya saja
