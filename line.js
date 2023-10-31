// Write a code to get 2 integers A and N. Print the integer A, N times in separate line.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the Number 1 :', num1 => {
readline.question('Enter the Number 2 :', num2 => {
    for (let i = 0; i <= num2; i++) {
        console.log(num1);
    }
  });
});