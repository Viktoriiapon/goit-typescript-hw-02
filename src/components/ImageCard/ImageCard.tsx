
import React, { FunctionComponent } from 'react';
import { ImageData } from '../../ types';
import './ImageCard.css'; 
interface ImageCardProps{
image: ImageData ;
openModal: (id: string)=> void;
} 
const ImageCard: FunctionComponent<ImageCardProps>= ({ image, openModal }) => {
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


