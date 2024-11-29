const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add CORS package
const routes = require('./routes');

const app = express();

// Enable CORS to allow requests from the frontend
// app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000' // Allow only frontend to access backend
  }));
  

// Middleware
app.use(bodyParser.json());
app.use('/api/v1/urls', routes);

// Default route
app.get('/', (req, res) => res.send('Welcome to the URL Shortener Service!'));

module.exports = app;
