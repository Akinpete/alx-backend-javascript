const express = require('express');
const app = express();

// Listen on port 7865
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

// Define the route for GET /
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Export the app for testing purposes
module.exports = app;
