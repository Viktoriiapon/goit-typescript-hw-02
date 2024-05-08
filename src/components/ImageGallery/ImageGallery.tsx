import React, { FunctionComponent } from 'react';
import { ImageData } from '../../ types';
import ImageCard from "../ImageCard/ImageCard";
import './ImageGallery.css'; 

interface ImageGalleryProps{ 
  images: ImageData[];
  openModal: (id : string)=> void;

}

const ImageGallery: FunctionComponent<ImageGalleryProps> = ({ images, openModal }) => {
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






 

  

