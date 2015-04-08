var http = require("http")

var dataCount = 0
var body = ''
var url = process.argv[2]

var req = http.request(url, function (res) {
  res.setEncoding('utf8')
  res.on('data', function (data) {
	  body += data.toString()
  });
  res.on('end', function (){
	  try {
		  console.log(body.length)
		  console.log(body)
	  } catch (err) {
		  res.end("Error: " + err.message)
	  }
  })
});

req.on('error', function(e){
  console.log("Got error: " + e.message);
});

req.end();