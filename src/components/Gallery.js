import { useParams } from 'react-router-dom'
import { useState } from 'react'
import './Gallery.css'
import Photos from '../data/Photos'


const Gallery = () => {
  let { category } = useParams()
  const [modal, setModal] = useState(false)
  const [focusPhoto, setFocusPhoto] = useState('')

  const getPhoto = (url) => {
    setFocusPhoto(url)
    setModal(true)
  }
  
     return (
     <>
     <div className={modal ? "modal open" : "modal"}>
        <img src={focusPhoto} alt="alt placeholder"/>
        <i class="fa-regular fa-circle-xmark" onClick={()=>setModal(false)}></i>
     </div>
       <div className="gallery fade">
         {Photos.map((photo) => {
           return (
             photo.category === category && (
               <div className="pics" key={photo.id} onClick={()=> getPhoto(photo.url)}>
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
      </>
     );
}

export default Gallery