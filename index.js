const http = require('http');

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Docker App</title>
  <style>
    body { display: flex; justify-content: center; align-items: center; height: 100vh; 
           font-family: Arial, sans-serif; background: linear-gradient(to right, #ff7e5f, #feb47b); }
    .card { background: white; padding: 40px; border-radius: 12px; text-align: center; box-shadow: 0 4px 8px rgba(0,0,0,0.2); }
    .card button { background: #ff4b2b; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Welcome to Docker, Veera Sir</h1>
    <p>Good Afternoon, Veera Sir! Your Docker app is running from Dockerfile.</p>
    <button>Explore</button>
  </div>
</body>
</html>
`;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
}).listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
