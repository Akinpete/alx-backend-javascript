const fs = require('fs').promises;

function countStudents (path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      // Check if the file has a header and valid data
      if (lines.length <= 1) {
        throw new Error('No students found in the database');
      }

      // Initialize a map to count students by field and store student names
      const studentsByField = {};
      let totalStudents = 0;

      // Loop through the lines starting from the second line (skipping the header)
      for (let i = 1; i < lines.length; i += 1) {
        const line = lines[i].trim();
        const [firstname, , , field] = line.split(',').map((item) => item.trim());

        // Ignore lines that don't have complete data
        if (firstname && field) {
          totalStudents += 1;

          // Add student to the correct field group
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(firstname);
        }
      }

      // Construct the result string
      let result = `Number of students: ${totalStudents}\n`;

      for (const [field, students] of Object.entries(studentsByField)) {
        result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      }

      // Log the result to the console
      console.log(result.trim());

      // Return the result string
      return result.trim();
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
