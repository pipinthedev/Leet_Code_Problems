    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    readline.question('Enter the Number to find cube :', num => {
        no = num;
        if (no <= 0) {
           console.log( "Not able to do the minus number.");
        }
        else 
        {
            let cube = no*no*no;
            console.log(cube);
        }
    });