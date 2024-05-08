import { FunctionComponent } from 'react';
import { ImageData } from '../../ types';
import './LoadMoreButton.css'; 

interface LoadMoreButtonProps{
  loadMore: ()=> void;
  images: ImageData[];
}
const LoadMoreButton: FunctionComponent<LoadMoreButtonProps> = ({ loadMore, images }) => {
  return (
    <div className="btnContainer"> 
      {images.length > 0 && (
        <button className="loadMoreBtn" onClick={loadMore} type="button"> 
          Load more
        </button>
      )}
    </div>
  );
};

export default LoadMoreButton;

