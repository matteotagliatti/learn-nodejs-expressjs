const http = require("http");

const server = http.createServer((req, res) => {
  // When we go to our port we will see this message
  console.log("request event");
  res.end("Hello World");
});

// listen is async. So the process stay alive.
server.listen(5000, () => {
  console.log("Server listening on port : 5000....");
});
