var fs = require('fs')

var fileLines = 0

buf = fs.readFileSync(process.argv[2])
fileLines = buf.toString()
cnt = fileLines.split("\n")

console.log(cnt.length-1)