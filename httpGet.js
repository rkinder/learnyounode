var http = require("http")

var body = ''

var options = {
	port: '5000',
	host: '127.0.0.1',
	path: "/api/parsetime?iso=2015-03-24T13:25:59.48Z"
}

http.get(options, function (res){
	    res.setEncoding("utf8")
		res.on('data', function (data){
	      body += data;
		});
	});
	
console.log(body)