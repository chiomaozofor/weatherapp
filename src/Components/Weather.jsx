import React, { useState } from 'react';
import '../Styles/weather.css';
import { MdDarkMode } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { LuCloudSunRain } from "react-icons/lu";
import axios from 'axios';




const Weather = () => {

const [search, setSearch] = useState ("");
const [weather, setWeather] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const handleWeather = async (e) => {
  e.preventDefault();
  if (!search.trim()) {
    setError("City name is required");
    return;
  }
  setError(null);  
  setLoading(true);
 
  try {
    const res = await axios.get(`https://weatherapp-gqe3.onrender.com/weather?city=${search}`);
    console.log(res.data); 
    setWeather(res.data.data);
  } catch (error) {
    console.error("API Error:", error);
    setError(error.response?.data?.message || "Failed to fetch weather data");
  } finally {
    setLoading(false);
  }
};



  return (
    <div className='weatherhome'>
      <div className='weatherheader'>
       
        <div className='weatherabout'>
          <h3>Home</h3>
        </div>
          <p>About</p>

          <div className="search-container">
          <FaSearch className="search-icon" />  
          <input
           type="text"
           placeholder="Enter state..."
           className="search-input"
           value={search}
           onChange={(e) => setSearch(e.target.value)}
            />
          <button className="search-button" onClick={handleWeather}>Enter</button>
        </div>

        <MdDarkMode className="dark-mode-icon" />
      </div>
      
      <div className="weatherinfo">
        {loading ? (
          <div className="spinner"></div> 
        ) : error ? (
          <p className="error">{error}</p>
        ) : weather ? (
          <div className="weatherforecast animate-fade-in">
            <div className="weathericons">
              <LuCloudSunRain className="weathericon" style={{fontSize: 70}}/>
              <h1 className="temperature">{weather.temperature}°C</h1>
            </div>
            <p className="condition">{weather.condition}</p>
            <p className="wind-speed" style={{marginTop: 30}}>Wind: {weather.wind_speed} m/s</p>
            <p className="humidity">Humidity: {weather.humidity}%</p>
            <p className="location">{weather.city}</p>
          </div>
        ) : (
          <p className="placeholder">Check Weather Info</p>
        )}
      </div>
    </div>
  );
};

export default Weather;
