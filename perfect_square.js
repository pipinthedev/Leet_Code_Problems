// Given 2 numbers N,M. Print 'yes' if their product is a perfect square else print 'no'.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the Number 1 :', num1 => {
    var per = function(num1) {
       if(Math.sqrt(num1) % 1 === 0)
       {
    console.log('yes');
       }
       else
       {
        console.log('no');
       }
     }

     per(num1);
     
});
