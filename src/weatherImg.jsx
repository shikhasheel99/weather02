// weatherImg.js
import React from 'react';

import clearImage from '../src/assets/clear.png';
import cloudsImage from '../src/assets/clouds.png';
import drizzleImage from '../src/assets/drizzle.png';
import mistImage from '../src/assets/mist.png';
import rainImage from '../src/assets/rain.png';
import snowImage from '../src/assets/snow.png';


const WeatherImg = ({ weatherId }) => {
  let imgUrl;

  // Add conditions to determine the appropriate image based on the weather ID
  if (weatherId >=200 && weatherId <=232) {
    imgUrl = cloudsImage; // Replace with the path or URL for your clear weather image
  } else if (weatherId >= 300 && weatherId <= 321) {
    imgUrl = drizzleImage; // Replace with the path or URL for your rain weather image
  } else if (weatherId >= 500 && weatherId <= 531) {
    imgUrl = rainImage; // Replace with the path or URL for your snow weather image
  } else if (weatherId >= 600 && weatherId <= 622) {
    imgUrl = snowImage; 
  }else if (weatherId >= 701 && weatherId <= 781) {
    imgUrl = mistImage; 
  } else if (weatherId >= 800 && weatherId <= 804) {
    imgUrl = clearImage; 
  }else {
    imgUrl = clearImage; // Replace with the path or URL for a default image
  }

  return <img src={imgUrl} alt="Weather" />;
};

export default WeatherImg;
