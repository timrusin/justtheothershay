import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Gallery.css'
import Photos from '../data/Photos'


const Gallery = () => {
  let { category } = useParams()
  let galleryPhotos = []
  
  useEffect(()=> {
    Photos.forEach((photo) => {
     if (category === photo.category){
      galleryPhotos.push(photo)
     } 
    },[galleryPhotos]);
  })
  console.log(galleryPhotos);
     return (
       <div className="gallery">
         {galleryPhotos.map((photo, index) => {
           return (
             <div className="pics" key={index}>
               <img src={photo.url} alt={photo.alt} />
             </div>
           );
         })}
       </div>
     );
}

export default Gallery