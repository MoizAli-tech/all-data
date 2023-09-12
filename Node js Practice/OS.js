const os = require("os");

// console.log(os)

console.log(os.freemem()/(1024*1024*1024))
console.log(os.totalmem()/(1024*1024*1024))
console.log(os.hostname())
console.log(os.arch())
console.log(os.release())
console.log(os.version())
console.log(os.userInfo())