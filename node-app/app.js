'use strict';

var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/', function(req,res){
  res.status(200).send('Hello from the GDG Hackathon');
});

var server = app.listen(process.env.PORT || '8080', function(){
  console.log('App listening on port %s', server.address().port);
  console.log('Press Ctrl+C to quit');
});

var GoogleMapsLoader = require('google-maps');
 
GoogleMapsLoader.load(function(google) {
    new google.maps.Map(el, options);
});