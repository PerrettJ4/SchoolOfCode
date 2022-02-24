import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import SearchArea from '../SearchArea';
import SavedDisplay from '../SavedDisplay';

interface IWeatherResults {
  city: string;
  description: string;
  icon: string;
  temp: number;
}

const defaultResults: IWeatherResults = {
  city: 'Birmingham',
  description: 'Great!',
  icon: '',
  temp: 20,
};

function App() {
  const [savedWeather, setSavedWeather] = useState([]);
  const [cityName, setCityName] = useState('Birmingham');
  const [weatherResults, setWeatherResults] = useState(defaultResults);
  const [errorRecieved, setErrorRecieved] = useState(false);

  const displayAreaRef = useRef(null);

  function triggerApiCall(name: string) {
    setCityName(name);
  }

  useEffect(() => {
    async function getWeather() {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`
      );
      const data = await res.json();
      console.log(data);
      if (data.message) {
        setErrorRecieved(true);
        return;
      }
      setWeatherResults({
        city: cityName,
        description: data.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        temp: Math.round(data.main.temp - 273.15),
      });
      setErrorRecieved(false);
    }
    getWeather();
  }, [cityName]);
  return (
    <main
      className={`App flex min-h-screen bg-green-400 justify-center items-center flex-col`}
    >
      <SearchArea
        handleSubmit={triggerApiCall}
        weatherData={weatherResults}
        isError={errorRecieved}
        displayAreaRef={displayAreaRef}
      />
      <SavedDisplay savedItems={savedWeather} displayAreaRef={displayAreaRef} />
    </main>
  );
}

export default App;
