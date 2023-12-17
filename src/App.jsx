import { useState } from 'react';
import './App.css';
import axios from 'axios';
import WeatherImg from './weatherImg';


import windImage from '../src/assets/wind.png';
import humidityImage from '../src/assets/humidity.png';
import getWeatherBackground from './backgroundimg';

const Weather = () => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [weather, setWeather] = useState([]);
 


  const handleSearch = async () => {
    const apiKey = '2d7daac446e90d9c6fe0da2bf712a24c';
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`);
    
    if (response.data) {
      setWeather([response.data]);
     
    }
    setCity('');
    setCountry('');
    console.log(response.data);
  };

  const convertKelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(2);
  };

  const getBackgroundImage = (weatherId) => {
    // Define the background images for different weather conditions
    {bgImg}
  };

  return (
    <div style={{  backgroundImage: getWeatherBackground(weather[0]?.weather[0]?.id),
      backgroundSize: 'cover',
    }}>
    
<div className='uidiv'>
      <h1>Weather Report</h1>
      <div className='contentBox'>
        <label>Country:</label>
        <input
          type="text"
          placeholder="Enter country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
     
     
        <label>City:</label>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
     </div>
      
      <button className="button" onClick={handleSearch}>
        Get Weather
      </button>
     
      </div>
      <div>
        {weather.map((data, index) => (
          <div key={index}>
            <WeatherImg weatherId={data.weather[0].id} />
            <h1 className="Temperature">{`Temperature: ${convertKelvinToCelsius(data.main.temp)} °C`}</h1>
            <h2 className="Country">{`Country: ${data.sys.country}`}</h2>
            <h2 className="City">{`City: ${data.name}`}</h2>
            <div className="info-container">
        <h4 className="Wind"><img src={windImage} alt='wind'/>{`Wind: ${data.wind.speed} KMPH`}</h4>
        <h4 className="Humidity"><img src={humidityImage} alt='humidity' />{`Humidity: ${data.main.humidity}%`}</h4>
      </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;
