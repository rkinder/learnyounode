var url = require("url")
var http = require("http")

process.env.TZ = "America/Indianapolis";

var urlObj = null

function parseTime(reqTime) {
  isoDateRE = /(\d+)-(\d+)-(\d+)T(\d+):(\d+):(\d+)\.(\d+)Z/
  match = isoDateRE.exec(reqTime.iso)
  console.log(match.toString())
  var jsonObj = { 'hour' : Number(match[4]) , 'minute' : Number(match[5]) , 'second' : Number(match[6]) };
  return jsonObj;
}

function unixTime(reqTime) {
	isoDateRE = /(\d+)-(\d+)-(\d+)T(\d+):(\d+):(\d+)\.(\d+)Z/
    match = isoDateRE.exec(reqTime.iso)
	reqDate = new Date(match[1],match[2],match[3],match[4],match[5],match[6]);
	jsonObj = { 'unixtime' : reqDate.getTime() };
	return jsonObj
}

var server = http.createServer( function (request, response){
   if (request.method != "GET")
     response.end("GET requests only please\n")
	 
   urlObj = url.parse(request.url,true,false)
   if (urlObj.pathname == "/api/parsetime") {
	 //response.end(urlObj.query)
	 
     jsonMsg = parseTime(urlObj.query)
	 response.writeHead(200, {'Content-Type':'application/json'})
	 response.end(JSON.stringify(jsonMsg))
	 
   }
   else if (urlObj.pathname == "/api/unixtime") {
     jsonMsg = unixTime(urlObj.query)
	 response.writeHead(200, {'Content-Type':'application/json'})
	 response.end(JSON.stringify(jsonMsg))	 
   }
   else {
	 response.end("Unknown request")
   }
});

server.listen(process.argv[2])