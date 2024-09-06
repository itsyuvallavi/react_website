import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Import your main App component

// Create a root container to render your React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root container
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);