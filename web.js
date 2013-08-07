var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var file_buffer=fs.readFileSync('index.html');
  var text=file_buffer.toString('utf8');
  response.send(text);
});

var port = process.env.PORT || 8080;
app.use(express.static(__dirname + '/images'));
app.listen(port, function() {
  console.log("Listening on " + port);
});
