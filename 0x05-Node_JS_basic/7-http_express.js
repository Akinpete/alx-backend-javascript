const express = require('express');
const countStudents = require('./3-read_file_async'); // Your countStudents function

const app = express();
const port = 1245;
const file = process.argv[2]; // CSV file passed as an argument

// Root endpoint that displays 'Hello Holberton School!'
app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

// Students endpoint that displays the student list
app.get('/students', (req, res) => {
  countStudents(file)
    .then((result) => {
      res.status(200).send(`This is the list of our students\n${result}`);
    })
    .catch((error) => {
      console.error('Error loading the database:', error); // Log the error
      res.status(500).send('Cannot load the database');
    });
});

// Handle 404 for any other routes
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Start the Express server on port 1245
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
