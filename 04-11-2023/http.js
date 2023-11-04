var http  = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function(req, res)
{
   const ok = fs.readFileSync(path.join(__dirname,'new.txt'),'utf8');
   console.log(ok);
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.write(ok.toString());
   return res.end();
}).listen(8080);

console.log("startes the server http://localhost:8080");