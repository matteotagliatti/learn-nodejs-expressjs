const express = require("express");
const app = express();

/* app has some methods:
    - app.get
    - app.post
    - app.put
    - app.delete
    - app.listen
    - app.use
    - app.all
    e tanti altri... 
*/

/* 
    SETUP FIRST SIMPLE SERVER
*/

// Setup some pages
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

// Setup a 404 Page - .all method will handle all the requests (GET, POST, ecc.) and it's invoke when theres no other method to handle the request
app.all("*", (req, res) => {
  res.status(404).send("404 - Page not found"); // We also ad the .status(404) method to set the correct status code
});

app.listen(5000, () => {
  console.log("server is listening port 5000");
});

/* 
    SETUP A SECOND SERVER FOR THE NAVBAR APP
*/

const app2 = express();
const path = require("path");

// Setup static folder
app2.use(express.static("./content/navbar-app")); // Usually the folder with all our static file is called /public. This will load all the associated files in the folder. In this way we will load the .css, .js and .svg file inside the folder.

// We don't need the code below because we have the .use method above that load all our static files, even the index.html file.
/* app2.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./content/navbar-app/index.html"));
}); */

app2.all("*", (req, res) => {
  res.status(404).send("404 - Page not found2"); // We also ad the .status(404) method to set the correct status code
});

app2.listen(5001, () => {
  console.log("server is listening port 5001");
});
