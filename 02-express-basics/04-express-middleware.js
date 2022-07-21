/**
 * Middleware
 * - A function
 * - Runs before the request is handled
 * - Everywhere in Express
 * - req => middleware => res
 */

const express = require("express");
const app = express();

/*
 // Our Middleware. We have to pass req, res and next
 const logger = (req, res, next) => {
   const method = req.method;
   const url = req.url;
   const time = new Date().getFullYear();
   console.log(method, url, time);
   next(); // This is the callback function. It tells Express to move on to the next middleware. In alternative, we can use res.send() or res.end(), bit in this case the res.send in out get method will be ignored.
 };
 */

/*
 // Execute Middleware in get request. We don't have to specify the arguments.
 app.get("/", logger, (req, res) => {
   res.send("Home");
 });
 
 app.get("/about", logger, (req, res) => {
   res.send("About");
 });
 */

/*
   In alternative we put the logger middleware in another file content/logger-middleware.js and we import it in this file.
   In this way the file is not cluttered and the middleware is separeted.
 */

const logger = require("./content/logger-middleware");
const auth = require("./content/auth-middleware");

// This request will NOT be handled by the logger middleware
app.get("/nomid", (req, res) => {
  res.send("nomid");
});

// app.use(logger); // We can use this middleware in all the requests that are following this line.
// app.use("/api", logger); // We can even use it for specific paths.
app.use([logger, auth]); // We can execute multiple middleware putting them into an array. They will be executed in order. For pass the auth middlware our URL has to be: http://localhost:5000/?user=admin

app.get("/", (req, res) => {
  console.log(req.user); // Log the user set in the auth middleware
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

// Use the logger middleware in every get request
app.use(logger);

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
