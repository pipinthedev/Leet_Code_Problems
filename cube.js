    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    readline.question('Enter the Number to find cube :', num => {
       const num2 = num;
       let cube = num2*num2*num2;
       console.log(cube);
    });