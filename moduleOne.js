
var fs = require('fs')
var path = require('path')

module.exports = function (dir, extension, callback) {
  fs.readdir(dir, function(err, list){
	  if (err)
	    return callback(err)
	  
	  list = list.filter(function (file){
		if (path.extname(file) === '.' + extension) {
			return path.extname(file)
		}
	  })
		
	callback(null, list)
  })
}