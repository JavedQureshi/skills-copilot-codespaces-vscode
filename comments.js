// Create web server with express
// Create a route that listens to POST requests on /comments
// Route should accept JSON data with keys "name" and "comment"
// Add "date" key to JSON data with current date and time
// Store JSON data in an array
// Add route that listens to GET requests on /comments
// Return JSON data stored in array

// Dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Create express app
const app = express();

// Use body-parser middleware
app.use(bodyParser.json());

// Create array to store comments
const comments = [];

// Create route that listens to POST requests on /comments
app.post('/comments', (req, res) => {
  // Get name and comment from request body
  const { name, comment } = req.body;

  // Create new comment object
  const newComment = {
    name,
    comment,
    date: new Date()
  };

  // Push new comment object to comments array
  comments.push(newComment);

  // Send response
  res.json(newComment);
});

// Create route that listens to GET requests on /comments
app.get('/comments', (req, res) => {
  // Send response with comments array
  res.json(comments);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});