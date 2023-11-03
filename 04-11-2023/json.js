const fs = require('fs').promises;
const path = require('path');

const fun = async (a) => 
{
    try
    {
        const data = await fs.readFile(path.join(__dirname, 'new.txt'), 'utf8');
        console.log("File hae been successfully read");
        console.log(JSON.stringify(data));
       const apend = await fs.appendFile(path.join(__dirname, 'new.txt'), "\n"+a);
        console.log("File successfully appended");
    }
    catch (err)
    {
        console.log(err);
    }
}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter the Number 1 :', num1 => {
    fun(num1);
});
