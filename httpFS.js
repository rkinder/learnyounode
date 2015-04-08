var http = require("http")
var fs = require("fs")

function readFile(filepath) {
   return rstream = fs.createReadStream(filepath)
}

var server = http.createServer(function (request, response) {
	fileStream = readFile(process.argv[3])
	fileStream.pipe(response)
})
server.listen(process.argv[2])