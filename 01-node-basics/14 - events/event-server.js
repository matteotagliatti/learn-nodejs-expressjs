const http = require("http");

// Simple way to create a server
// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// create a Server using Event Emitter
const server = http.createServer();
server.on("request", (req, res) => {
  res.end("Hi, i'm the server response");
});

server.listen(5000);
