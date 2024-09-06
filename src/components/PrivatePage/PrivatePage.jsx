import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './privatepage.css';

const PrivatePage = () => {
  const [emails, setEmails] = useState([]);
  const navigate = useNavigate();

  // Fetch the emails from the server
  useEffect(() => {
    fetch('http://localhost:3001/api/emails')
      .then(response => response.json())
      .then(data => setEmails(data))
      .catch(error => console.error('Error fetching emails:', error));
  }, []);

  // Function to handle closing the private page and returning to the website
  const handleClose = () => {
    navigate('/'); // Redirect to homepage or another page
  };

  return (
    <div className="private-page-container">
      {/* X button to close the page */}
      <button className="close-button-X" onClick={handleClose}>
        &times;
      </button>

      <h1 className="private-page-header">Emails of users who downloaded the file</h1>
      <ul className="email-list">
        {emails.map((email, index) => (
          <li key={index}>
            <span>{email.email}</span>
            <span className="timestamp">{new Date(email.timestamp).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrivatePage;