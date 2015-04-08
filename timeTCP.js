var net = require("net")
var strftime = require("strftime")

port = process.argv[2];

function timeTCP() {
	 var timeEDT = strftime.timezone('-0500');
     t = timeEDT("%Y-%m-%d %H:%M");
	 return t
}

var server = net.createServer(function (socket) {
	 t = timeTCP() + "\n"
     socket.end(t)
	 
})
server.listen(port);