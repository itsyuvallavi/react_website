import React from 'react';
import '../styles/modal.css'; // Import the styles for the modal

function Modal({ showModal, closeModal, children }) {
  if (!showModal) {
    return null; // Don't render anything if the modal is not shown
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        {/* Button group for two buttons */}
        <div className="button-group">
          {/* Buttons should be evenly spaced */}
          <button className="close-btn" onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;