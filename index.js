var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hii Sir good afternoon docker file is a running');
  res.write('Welcome to DevOps Training'); //write a response to the client
  res.end(); //end the response
}).listen(81); //the server object listens on port 80
