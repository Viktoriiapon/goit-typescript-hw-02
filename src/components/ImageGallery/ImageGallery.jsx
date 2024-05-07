import React from 'react';
import ImageCard from "../ImageCard/ImageCard";
import './ImageGallery.css'; 

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className="imgList"> 
      {Array.isArray(images) &&
        images.map((image) => {
          return (
            <li className="imgItem" key={image.id}> 
              <ImageCard image={image} openModal={openModal} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;






 

  

