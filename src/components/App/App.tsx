import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import  { getImagesByQuery } from "../../services/api";
import ImageGallery from "../ImageGallery/ImageGallery";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import ImageModal from "../ImageModal/ImageModal";
import { ImageData } from "../../ types";

function App() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [btnLoadMore, setbtnLoadMore] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<ImageData[]>([]);

  useEffect(() => {
    if (query.length === 0) return;

    const fetchImages = async () => {
      try {
        const data = await getImagesByQuery(query, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setbtnLoadMore(data.total_pages > page);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const onSetSearchQuery = (searchTerm: string) => {
    setQuery(searchTerm);
    setIsLoading(true);
    setError(false);
    setImages([]);
  };
  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const openModal = (id: string): void => {
    setModalImage(images.filter((image) => image.id === id));
    setIsOpen(true);
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <div>
      <SearchBar onSetSearchQuery={onSetSearchQuery} toast={toast} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {btnLoadMore && <LoadMoreButton loadMore={loadMore} images={images} />}
      <ImageModal
        openModal={openModal}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        modalImage={modalImage}
      />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;

