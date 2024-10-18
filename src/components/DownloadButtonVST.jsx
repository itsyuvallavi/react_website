import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Modal from './Modal'; // Import the modal component

function DownloadButtonAU() {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const FILE_ID = "1dURjKq6-fvvp2ysBZZxBAUzlP0_LMMmS"; // This is your file ID

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleDownloadClick = () => {
    setShowModal(true);
    setErrorMessage('');
  };

  const handleDownload = async () => {
    if (validateEmail(email)) {
      setIsProcessing(true);
      setErrorMessage('');
      try {
        // Send email using EmailJS
        const emailResult = await emailjs.send(
          "service_07qer3d", // Your EmailJS service ID
          "template_ab98faq", // Replace with your correct template ID
          {
            user_email: email,
          },
          "pBvBJnus_GURsn7yo" // Your EmailJS public key
        );

        console.log('Email sent successfully:', emailResult);

        // Initiate direct download
        const downloadUrl = `https://drive.google.com/uc?export=download&id=${FILE_ID}`;
        window.open(downloadUrl, '_blank');

        alert('Email sent successfully. Your download should begin shortly in a new tab.');
        setShowModal(false);
      } catch (error) {
        console.error('Error details:', error);
        setErrorMessage(`An error occurred: ${error.text || error.message}. Please try again or contact support.`);
      } finally {
        setIsProcessing(false);
      }
    } else {
      setErrorMessage('Please enter a valid email address.');
    }
  };

  return (
    <div className="purchase-container">
      <button onClick={handleDownloadClick} className="download-btn">
        Download Now
      </button>
      <Modal showModal={showModal} closeModal={() => setShowModal(false)}>
        <h2>Enter your email to download the file</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email-input"
        />
        <button 
          className="submit-btn" 
          onClick={handleDownload}
          disabled={isProcessing}
        >
          {isProcessing ? 'Processing...' : 'Submit & Download'}
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </Modal>
    </div>
  );
}

export default DownloadButtonAU;