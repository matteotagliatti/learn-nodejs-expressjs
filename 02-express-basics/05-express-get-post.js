/*
  - GET
  - POST
  - PUT
  - DELETE
*/

const express = require("express");
const app = express();
let { people } = require("./content/data.js");

// Static assets
// We use this webpage to create a form to make our requests. Because the browser, by default, can only make GET request.
app.use(express.static("./content/methods"));

// Parse form data
app.use(express.urlencoded({ extended: false })); // Extended: false means that we only accept simple data types.

// Parse JSON
app.use(express.json());

// GET. The default method of the browser.
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// POST (content/methods/index.html). The method used to send data to the server.
app.post("/login", (req, res) => {
  // Take name from POST request made by the form
  const { name } = req.body;

  // If form contain a name, show it on the page.
  if (name) {
    return res.status(200).send("Welcome " + name);
  }

  res.status(401).send("Provide a name");
});

// POST (content/methods/javascript.html)
app.post("/api/people", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ success: false, msg: "Provide a name" });
  }

  res.status(201).json({ success: true, person: name });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
