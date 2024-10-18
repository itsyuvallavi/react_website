import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Modal from './Modal';

function DownloadButtonAU() {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const FILE_ID = "1dURjKq6-fvvp2ysBZZxBAUzlP0_LMMmS"; // Updated file ID for AU

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleDownloadClick = () => {
    console.log('Download button clicked');
    setShowModal(true);
    setErrorMessage('');
  };

  const handleDownload = async () => {
    console.log('Attempting download with email:', email);
    if (validateEmail(email)) {
      setIsProcessing(true);
      setErrorMessage('');
      try {
        console.log('Sending email via EmailJS');
        const emailResult = await emailjs.send(
          "service_07qer3d",
          "template_ab98faq",
          {
            user_email: email,
          },
          "pBvBJnus_GURsn7yo"
        );
        console.log('Email sent successfully:', emailResult);

        // Create a temporary anchor element for download
        const downloadUrl = `https://drive.google.com/uc?export=download&id=${FILE_ID}`;
        console.log('Creating download link:', downloadUrl);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.target = '_blank';
        link.download = 'AUFile.extension'; // Replace with your actual file name and extension
        document.body.appendChild(link);
        console.log('Triggering download');
        link.click();
        document.body.removeChild(link);

        alert('Email sent successfully. Your download should begin shortly.');
        setShowModal(false);
      } catch (error) {
        console.error('Error details:', error);
        setErrorMessage(`An error occurred: ${error.text || error.message}. Please try again or contact support.`);
      } finally {
        setIsProcessing(false);
      }
    } else {
      console.log('Invalid email entered:', email);
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