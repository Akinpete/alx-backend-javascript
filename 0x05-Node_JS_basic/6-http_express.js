const express = require('express');
const app = express();
const port = 1245;

// Root endpoint that displays 'Hello Holberton School!'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server and listen on port 1245
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;
