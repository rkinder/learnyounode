var http = require("http")

var dataCount = 0
var url = process.argv[2]

var req = http.request(url, function (res) {
  res.on('data', function (data) {
	  dataCount++
	  body += data.toString()
  });
  res.on('end', function (){
	  try {
		  console.log(body)
	  } catch {
		  res.end("Error: " + err.message)
	  }
  })
});

req.on('error', function(e){
  console.log("Got error: " + e.message);
});

req.end();
console.log("Number of data calls: " + dataCount)