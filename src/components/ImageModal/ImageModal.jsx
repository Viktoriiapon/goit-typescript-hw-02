import React from 'react';
import Modal from "react-modal";
import './ImageModal.css';

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const ImageModal = ({ closeModal, modalIsOpen, modalImage }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      {modalImage.length > 0 && (
        <div className="modalContainer">
          <div className="imgContainer">
            <img
              className="modalImg"
              src={modalImage[0].urls.regular}
              alt={modalImage[0].slug}
             
            />
          </div>
          <div className="descriptionContainer">
            <p className="imgDescription">{modalImage[0].alt_description}</p>
            <p className="imgLikes">👍: {modalImage[0].likes}</p>
            <p className='imgAuthor'>author:{`${modalImage[0].user.first_name} ${modalImage[0].user.last_name}`}</p>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;

    



