import React from 'react';

const GalleryModal = ({ selectedGallery, setSelectedGallery }) => {
  return (
    <div className="modal-overlay" onClick={() => setSelectedGallery(null)}>
      <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setSelectedGallery(null)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img src={selectedGallery.image} alt={selectedGallery.title} />
        <div className="gallery-modal-info">
          <span className="gallery-modal-category">{selectedGallery.category}</span>
          <h3>{selectedGallery.title}</h3>
          <p>{selectedGallery.description}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;