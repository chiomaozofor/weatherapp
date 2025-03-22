import React, { useState } from 'react';
import '../Styles/weather.css';
import { MdDarkMode } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { LuCloudSunRain } from "react-icons/lu";


const Weather = () => {



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
            />
          <button className="search-button">Enter</button>
        </div>

        <MdDarkMode className="dark-mode-icon" />
      </div>
      
      <div className='weatherinfo'>
        
        <div className='weatherforecast'>
          <div className='weathericons'>
          <LuCloudSunRain className='weathericon'/>
          <h1 className="temperature">27°</h1>
          <p>Lagos</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Weather;
