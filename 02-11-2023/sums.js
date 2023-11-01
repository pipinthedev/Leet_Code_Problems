const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
function sum(n)
{
    var sum = 0 ;
    while (n!= 0)
    {
        sum = sum + n%10;
        n = parseInt(n / 10);
    }
    console.log(Math.round(sum));
}

readline.question('Enter the Number 1 :', num1 => {
  sum(num1);
});



