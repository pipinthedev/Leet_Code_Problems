var url = require('url');

var addy = "http://localhost/testings?parms=search"
const ok = url.parse(addy, true)
console.log(ok.hostname)
console.log(ok.pathname)
console.log(ok.search)