import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/modal.css'; // Import the styles for the modal

function Modal({ showModal, closeModal, children }) {
  if (!showModal) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <div className="button-group">
          <button className="close-btn" onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;