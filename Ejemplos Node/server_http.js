var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('{"temp": "30º"}'); //write a response to the client
  res.end(); //end the response
}).listen(80); //the server object listens on port 8080