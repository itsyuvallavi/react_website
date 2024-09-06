const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3001; // Use any available port

app.use(cors());
app.use(express.json());

// Path to the JSON file where emails will be stored
const emailsFilePath = path.join(__dirname, 'emails.json');

// Route for the root URL (optional, for testing purposes)
app.get('/', (req, res) => {
  res.send('Server is running.');
});

// Route to save emails
app.post('/save-email', (req, res) => {
  const { email } = req.body;

  // Read the existing emails from the JSON file
  fs.readFile(emailsFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).send('Error reading file');
    }

    const emails = data ? JSON.parse(data) : [];

    // Add the new email and timestamp
    emails.push({ email, timestamp: new Date().toISOString() });

    // Write the updated list back to the JSON file
    fs.writeFile(emailsFilePath, JSON.stringify(emails, null, 2), (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return res.status(500).send('Error saving email');
      }

      res.send('Email saved successfully');
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get('/api/emails', (req, res) => {
  // Assuming your emails are stored in a JSON file
  const emails = require('./emails.json'); // Replace with the correct path to your JSON file
  res.json(emails);
});