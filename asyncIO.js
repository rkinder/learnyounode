// first asyncIO

var fs = require('fs')

fs.readFile(process.argv[2], 'utf8', function(err, data){
  if (err) throw err;
  cnt = data.split('\n').length-1
  console.log(cnt)
})