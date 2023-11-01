//Write a code to get an integer N and print the values from N to 1.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the Number 1 :', num1 => {
    var x = num1;
 for (let i = x; i > 0;--i)
 {
    console.log(i);
 }
});