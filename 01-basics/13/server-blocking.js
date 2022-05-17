const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("Home");
  if (req.url === "/about") {
    // BLOCKING CODE !!
    // With this blocking code we block all the user from doing other tasks while we are doing this task. Thanks to Async we can do this task in the background.
    for (let i = 0; i < 1000000; i++) {
      console.log(i);
    }

    res.end("About");
  } else res.end("404");
});

server.listen(5000, () => {
  console.log("Server listening on port : 5000....");
});
