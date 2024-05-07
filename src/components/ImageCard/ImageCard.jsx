
import React from 'react';
import './ImageCard.css'; 
const ImageCard = ({ image, openModal }) => {
  return (
    <div className="imgContainer">
      <img
        onClick={() => openModal(image.id)}
        className="image"
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;


