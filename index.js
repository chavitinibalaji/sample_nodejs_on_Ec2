var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Welcome to DevOps Training'); //write a response to the client
  res.end(); //end the response
})app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
//the server object listens on port 80
