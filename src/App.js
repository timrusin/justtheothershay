import './App.css';
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import auto from './assets/images/auto/P1190350-2.jpg'
import portrait  from './assets/images/portraits/P1020400.jpg'
import music from './assets/images/livemusic/DSC_0033-2.jpg'

function App() {
    const [index, setIndex] = useState(0)

    const photos = [auto, portrait, music ] /// temp testing -- build images display to import form another file
    
    useEffect(() => {
        const interval = setInterval(() => {
          setIndex(index+1)
          if (index === photos.length - 1) setIndex(0)
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
      <div   className= 'home-carousel'>
        <Navbar />
        <img src={photos[index]} alt="" className='bg-image'></img>
          <div className='nav-arrows-container'>
            <i className="fa-thin fa-arrow-left arrows" onClick= {previousPic}></i>
            <i className="fa-thin fa-arrow-right arrows" onClick= {nextPic}></i>
          </div>
        </div>
    </div>
  );
}

export default App;
