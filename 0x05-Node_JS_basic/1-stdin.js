
const readline = require('readline')

const question = 'Welcome to Holberton School, what is your name?\n'
const response = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

response.question(question, (answer) => {
    console.log(`Your name is: ${answer}`)
    response.close()
})