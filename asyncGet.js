#!/usr/bin/env node

var http = require('http');
var argv = process.argv.splice(2),
    truecount = argv.length,
    pages = [];
 
function printUrls() {
  if (--truecount > 0)
    return;
  for (i = 0; i < pages.length; i++) {
    // console.log(pages[i].data + '\n\n');
	console.log(pages[i].data);
  }
}
 
function HTMLPage(url) {
  var _page = this;
  // _page.data = '### [URL](' + url + ')\n';
  _page.data = '';
  http.get(url, function(res) {
    res.setEncoding('utf8');
    res.on('data', function(data) {
      _page.data += data;
    });
    res.on('end', printUrls);
  });
}
 
 
for (var i = 0; i < argv.length; i++)
  pages.push(new HTMLPage(argv[i]));
 