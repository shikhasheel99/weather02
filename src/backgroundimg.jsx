import clearbg from '../src/assets/clearbg.jpg';
import cloudbg from '../src/assets/cloudbg.jpg';
import drizzelbg from '../src/assets/drizzelbg.jpg';
import rainbg from '../src/assets/rainbg.jpg';
import snowbg from '../src/assets/snowbg.jpg';
import mistbg from '../src/assets/mistbg.jpg';


import weatherbg from '../src/assets/weather background.jpg';

const bgImg = (weatherId) => {
    // Define the background images for different weather conditions
    if (weatherId >= 200 && weatherId <= 232) {
      return `url(${cloudbg})`;
    } else if (weatherId >= 300 && weatherId <= 321) {
      return `url(${drizzelbg})`;
    } else if (weatherId >= 500 && weatherId <= 531) {
      return `url(${rainbg})`;
    } else if (weatherId >= 600 && weatherId <= 622) {
      return  `url(${snowbg})`;
    } else if (weatherId >= 701 && weatherId <= 781) {
      return  `url(${mistbg})`;
    }  else if (weatherId >= 800 && weatherId <= 804) {
      return  `url(${clearbg})`;
    }else {
      return `url(${weatherbg})`;
    }
  };
  
  export default bgImg;
  