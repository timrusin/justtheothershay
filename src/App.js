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
    
  return (
    <>
      <div
        style={{ backgroundImage: `url(${photos[index]})` }}
        className="home-carousel"
      >
        <Navbar />
      </div>
    </>
  );
}

export default App;
