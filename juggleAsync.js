var http = require("http")

dataIndex = 0
body = ''
var results = Array()

for (index = 2; index < process.argv.length; ++index) {
	
    http.get(process.argv[index], function (res){
	    res.setEncoding("utf8")
		res.on('data', function (data){
	      body += data;
		});
		res.on('end', function (){
	      results[dataIndex++] = body;
		  body='';			
		});
		
    });
   
}

console.log("Number of results:" + results.length)
console.log(dataIndex)

for (j=0; j < results.length; ++j) {
	console.log(results)
}
