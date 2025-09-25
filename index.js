var http = require('http');

http.createServer(function (req, res) {
  res.write('Welcome to DevOps Training'); // write response
  res.end(); // end response
}).listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
 
