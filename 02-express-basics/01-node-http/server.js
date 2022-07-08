// Build a server with only the native http module of Node.js
const http = require("http");
const { readFileSync } = require("fs"); // we use the Sync version of readFile because the file is requested only when the server is started and not for every user request that come to the server.

/* 
  SETUP FIRST SIMPLE SERVER
*/

const indexPage = readFileSync("./index.html"); // Get all the files

const server = http.createServer((req, res) => {
  // req is the request object, res is the response object. Request is when a client sends a request to the server. Response is when the server sends a response to the client.
  const url = req.url; // Get the URL from the GET request made by the user browser.

  // Homepage
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" }); // 200 is the status code, { "Content-Type": "html" } is the header, so some metadata.
    res.write(indexPage);
    res.end(); // We can event pass the .write() argument directly to .end(). Example: res.end("<h1>Hello World</h1>");

    // About page
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>About</h1>");
    res.end();

    // 404 page
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 - Page not found</h1>");
    res.end();
  }
});
server.listen(5000); // listen on port 5000

/* 
  SETUP SECOND NAVBAR APP SERVER
*/

const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");

const server2 = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(homePage); // This will request only the HTML file, not the CSS, JS and logo files. We have to request manually all the related files.
    res.end();
    // The following if statement will request the CSS file.
  } else if (url === "/styles.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(homeStyles); // This will request only the HTML file, not the CSS, JS and logo files. We have to request manually all the related files.
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>About</h1>");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 - Page not found</h1>");
    res.end();
  }
});
server2.listen(5001);

/* 
  Having to request every single file is impossibile. For this purpose we can use Express.js
*/
