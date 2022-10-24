import { useState, useEffect } from 'react'
import photosData from '../data/Photos'
import './Home.css'

const Home = () => {
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
          if (index >= homePhotos.length -1) setIndex(0)
        }, 6000);
        return () => clearInterval(interval);
    });
    console.log(index);
    const previousPic = () => {
      setIndex(index - 1)
      if (index === 0) setIndex(homePhotos.length - 1)
    }

    const nextPic = () => {
      setIndex(index + 1)
      if (index === homePhotos.length - 1) setIndex(0)
    }
  return (
    <div className= 'home-carousel fade'>
    <img src={homePhotos[index].url} alt={homePhotos[index].alt} style={{objectPosition: homePhotos[index].position}} className={index === 0 ? 'bg-image fade' : 'hide fade'}></img>
    <img src={homePhotos[index].url} alt={homePhotos[index].alt} style={{objectPosition: homePhotos[index].position}} className={index % 2 !== 0 ? 'bg-image fade' : 'hide fade'}></img>
    <img src={homePhotos[index].url} alt={homePhotos[index].alt} style={{objectPosition: homePhotos[index].position}} className={index % 2 === 0 ? 'bg-image fade' : 'hide fade'}></img>
      <div className='nav-arrows-container'>
        <i className="fa-thin fa-arrow-left arrows" onClick= {previousPic}></i>
        <i className="fa-thin fa-arrow-right arrows" onClick= {nextPic}></i>
      </div>
    </div>
  )
}

export default Home