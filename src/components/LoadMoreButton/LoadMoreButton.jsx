import './LoadMoreButton.css'; 

const LoadMoreButton = ({ loadMore, images }) => {
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

