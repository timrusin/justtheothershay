import { useState, useEffect } from 'react'
import auto from '../assets/images/auto/P1190350-2.jpg'
import portrait  from '../assets/images/portraits/P1020400.jpg'
import music from '../assets/images/livemusic/DSC_0033-2.jpg'

const HomeCarousel = () => {
    const [photo, setPhoto] = useState(0)
    const photos = [auto, portrait, music ]
    
    useEffect(() => {
        const interval = setInterval(() => {
          setPhoto(photo+1)
          if (photo > 1) setPhoto(0)
        }, 4000);
        return () => clearInterval(interval);
    });
    
  return (
    <div  className="carousel">
      <img
        src={photos[photo]}
        alt="testing"
        width="100%"
      ></img>
    </div>
  );
}

export default HomeCarousel