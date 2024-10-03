console.log('Welcome to Holberton School, what is your name?');

// Set encoding to handle user input as a string
process.stdin.setEncoding('utf8');

// Listen for user input
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    // Trim to remove newline or extra spaces
    const name = chunk.trim();
    console.log(`Your name is: ${name}`);
  }
});

// Listen for end of input (Ctrl + D)
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
