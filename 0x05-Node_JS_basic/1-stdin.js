
// const readline = require('readline')

// const question = 'Welcome to Holberton School, what is your name?\n'
// const response = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// response.question(question, (answer) => {
//     console.log(`Your name is: ${answer}`)
//     response.close()
// })
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});