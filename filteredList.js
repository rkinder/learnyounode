//filtered directory listing

var fs = require("fs")
var path = require("path")

fs.readdir(process.argv[2], function(err, files){
  if (err) throw err;
  ext = '.' + process.argv[3]
  fileList = files.toString().split(',')
  // console.log("Looking for files with " + ext)
  for (i=0; i < fileList.length; ++i) {
		 if (path.extname(fileList[i]) == ext)
            console.log(fileList[i])			 
  }
})


/*
// Official answer
var fs = require("fs")
var path = require("path")

fs.readdir(process.argv[2], function(err, list){
	list.forEach(function (file){
		if (path.extname(file) === '.'+ process.argv[3])
			console.log(file)
	})
})

*/