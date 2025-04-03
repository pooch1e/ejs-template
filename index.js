// Requires express js module
const express = require('express');

// Create an expjs application
const app = express();

// Require EJS module
const ejs = require('ejs');

// Set EJS as view engine for app
app.set('view engine', 'ejs');

// Define a Get Route for the root URL
app.get('/', function (req, res) {
  // Render the EJS template with value NAME set to WORLD
  res.render('index', { name: 'World' });
});

// Start the server on port 3000
app.listen(3000, function () {
  console.log("Server started on port 3000);
});
