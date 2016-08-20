'use strict';

var express = require('express');
var fs = require('fs');

var app = express();
app.use(express.static('public'));

app.get('/home', function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  fs.createReadStream(__dirname + '/public/index.html','utf8').pipe(res);
});

var server = app.listen(process.env.PORT || '8080', function(){
  console.log('App listening on port %s', server.address().port);
  console.log('Press Ctrl+C to quit');
});
