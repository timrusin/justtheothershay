import './App.css';
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import auto from './assets/images/auto/P1190350-2.jpg'
import portrait  from './assets/images/portraits/P1020400.jpg'
import music from './assets/images/livemusic/DSC_0033-2.jpg'

function App() {
    const [index, setIndex] = useState(0)

    const photos = [auto, portrait, music ]
    
    useEffect(() => {
        const interval = setInterval(() => {
          setIndex(index+1)
          if (index > 1) setIndex(0)
        }, 8000);
        return () => clearInterval(interval);
    });

    const previousPic = () => {
      setIndex(index - 1)
      if (index === 0) setIndex(photos.length - 1)
    }

    const nextPic = () => {
      setIndex(index + 1)
      if (index === photos.length - 1) setIndex(0)
    }
    
  return (
    <div className='home-page'>
      <div  style={{ backgroundImage: `url(${photos[index]})` }} className= 'home-carousel'>
        <Navbar />
          <div className='nav-arrows-container'>
            <i className="fa-thin fa-arrow-left arrows fade" onClick= {previousPic}></i>
            <i className="fa-thin fa-arrow-right arrows fade" onClick= {nextPic}></i>
          </div>
        </div>
    </div>
  );
}

export default App;
