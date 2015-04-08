var http = require("http")

http.request({
 uri: "http://localhost:5000/api/parsetime?iso=2015-03-24T13:25:59.48Z"
  }, function (error, response, body){
     if (error)
	   console.log(error.message)
	   
	 console.log(body)
});