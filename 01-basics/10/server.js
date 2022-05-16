const http = require("http");

const server = http.createServer((req, res) => {
  // req = request, res = response
  if (req.url === "/") {
    /* res.write('Hello World') */ // Skippable passage because we can put our message directly in the res.end()
    res.end("Hello World");
  }
  if (req.url === "/about") {
    res.end("About page");
  }
});
server.listen(5000); // Start the server on port 5000
