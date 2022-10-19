import './App.css';
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import photosData from './data/Photos'


function App() {
  const [index, setIndex] = useState(0)
  
  useEffect(() => {
        const interval = setInterval(() => {
          setIndex(index+1)
          if (index === photosData.length - 1) setIndex(0)
        }, 8000);
        return () => clearInterval(interval);
    });

    const previousPic = () => {
      setIndex(index - 1)
      if (index === 0) setIndex(photosData.length - 1)
    }

    const nextPic = () => {
      setIndex(index + 1)
      if (index === photosData.length - 1) setIndex(0)
    }
    
  return (
    <div className='home-page'>
      <div   className= 'home-carousel'>
        <Navbar />
        <img src={photosData[index].url} alt={photosData[index].alt} className='bg-image' style={{objectPosition: photosData[index].position}}></img>
          <div className='nav-arrows-container'>
            <i className="fa-thin fa-arrow-left arrows" onClick= {previousPic}></i>
            <i className="fa-thin fa-arrow-right arrows" onClick= {nextPic}></i>
          </div>
        </div>
    </div>
  );
}

export default App;
