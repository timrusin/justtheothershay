import './App.css';
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import photosData from './data/Photos'


function App() {
  const [index, setIndex] = useState(0)
  let homePhotos = []

  photosData.forEach((photo)=>{
    if (photo.home){
      homePhotos.push(photo)
    }
  })
  
  useEffect(() => {
        const interval = setInterval(() => {
          setIndex(index+1)
          if (index === homePhotos.length - 1) setIndex(0)
        }, 6000);
        return () => clearInterval(interval);
    });

    const previousPic = () => {
      setIndex(index - 1)
      if (index === 0) setIndex(homePhotos.length - 1)
    }

    const nextPic = () => {
      setIndex(index + 1)
      if (index === homePhotos.length - 1) setIndex(0)
    }
    
  return (
    <div className='home-page'>
      <div className= 'home-carousel'>
        <Navbar />
          <img src={homePhotos[index].url} alt={homePhotos[index].alt} className='bg-image'></img>
            <div className='nav-arrows-container'>
              <i className="fa-thin fa-arrow-left arrows" onClick= {previousPic}></i>
              <i className="fa-thin fa-arrow-right arrows" onClick= {nextPic}></i>
            </div>
          </div>
      </div>
  );
}

export default App;
