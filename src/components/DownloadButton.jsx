import React, { useState } from 'react';
import Modal from './Modal'; // Import the modal component

function DownloadButton() {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false); // Control modal visibility

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleDownload = async () => {
    if (validateEmail(email)) {
      try {
        // Send the email to the backend
        const response = await fetch('http://localhost:3001/save-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }), // Send the email to the backend
        });
  
        if (response.ok) {
          alert('Email saved successfully');
          // You can now trigger the download if needed
          const link = document.createElement('a');
          link.href = "https://drive.google.com/drive/folders/1DF8naLPbzQ-DFhfgXtsP6qgkbZod39RR?usp=sharing";        
          link.download = 'file.zip'; // Set the file name
          link.click();
        } else {
          alert('Failed to save email.');
        }
      } catch (error) {
        console.error('Error saving email:', error);
      }
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className="purchase-container">
      <button onClick={() => setShowModal(true)} className="download-btn">
        Download Now
      </button>

      {/* Show Modal when "Download Now" is clicked */}
      <Modal showModal={showModal} closeModal={() => setShowModal(false)}>
        <h2>Enter your email to download</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email-input"
        />
        <button className="submit-btn" onClick={handleDownload}>
          Submit & Download
        </button>
      </Modal>
    </div>
  );
}

export default DownloadButton;