var http = require("http")

var url = process.argv[2]

var req = http.request(url, function (res) {
  res.on('data', function (data) {
	  console.log(data.toString());
  });
});

req.on('error', function(e){
  console.log("Got error: " + e.message);
});

req.end();