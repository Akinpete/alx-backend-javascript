const fs = require('fs');

function countStudents(path) {
  try {
    // Attempt to read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data into lines and filter out empty lines
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

    // Log the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field and their names
    for (const [field, students] of Object.entries(studentsByField)) {
      console.log(
        `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`,
      );
    }
  } catch (error) {
    // Handle any errors (e.g., file not found or reading issues)
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
