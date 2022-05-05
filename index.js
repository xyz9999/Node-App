const hostname = 'http://ec2-52-45-170-173.compute-1.amazonaws.com/';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/*
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(3000, "0.0.0.0");
console.log('Server running at http://0.0.0.0:3000/');
/*
/*
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/',(req, res) => res.send('Hello World'));
app.listen(PORT, () => console.log(`Server listening in port ${PORT}`))
*/
