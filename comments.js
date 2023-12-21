// Create web server

// Load libraries
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Load data
const comments = require('./data/comments.json');

// Create web server
const app = express();

// Configuration
const port = 3000;

// CORS
app.use(cors());

// Logging
app.use(morgan('combined'));

// Routes
app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments.find((comment) => comment.id === id);

  if (comment) {
    res.json(comment);
  } else {
    res.status(404).json({ error: 'Comment not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});