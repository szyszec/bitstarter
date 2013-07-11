var express = require('express');
var fs = require('fs');

var text = fs.readFileSync('index.html');
var st = text.toString;

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(st);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
