import { useParams } from 'react-router-dom'
import './Gallery.css'
import Photos from '../data/Photos'


const Gallery = () => {
  let { category } = useParams()
  
     return (
       <div className="gallery fade">
         {Photos.map((photo) => {
           return (
             photo.category === category && (
               <div className="pics" key={photo.id}>
                 <img
                   src={photo.url}
                   alt={photo.alt}
                   style={{ width: "100%" }}
                 />
               </div>
             )
           );
         })}
       </div>
     );
}

export default Gallery