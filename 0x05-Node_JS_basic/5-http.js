const { createServer } = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const file = process.argv[2]; // The CSV file path passed as an argument

const app = createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain'); // Set content type as plain text

  if (req.url === '/') {
    // Handle root path
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // Handle /students path
    countStudents(file)
      .then((result) => {
        res.statusCode = 200;
        res.end(`This is the list of our students\n${result}`); // Send the result to the client
      })
      .catch((error) => {
        res.statusCode = 500;
        res.end('Cannot load the database'); // Handle errors like file not found
      });
  } else {
    // Handle 404 for other routes
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

// Start the server on port 1245
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Export the app for potential external use
module.exports = app;
