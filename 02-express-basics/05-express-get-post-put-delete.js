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

// POST. Add data to an existing resource.
app.post("/api/people/test", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ success: false, msg: "Provide a name" });
  }

  res.status(201).json({ success: true, data: [...people, name] }); // add the new name to the array
});

// PUT. Edit an existing resource.
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params; // This is the id of the person we want to update
  const { name } = req.body;

  const person = people.find((person) => person.id == id); // Find the person with the id we want to update

  if (!person) {
    return res.status(404).json({ success: false, msg: "Person not found" });
  }

  // Update the person
  const newPeople = people.map((person) => {
    if (person.id == id) {
      person.name = name;
    }

    return person; // Return the person if it's not the one we want to update
  });

  res.status(200).json({ success: true, data: newPeople });
});

// DELETE. Delete an existing resource.
app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;

  const person = people.find((person) => person.id == id);

  if (!person) {
    return res.status(404).json({ success: false, msg: "Person not found" });
  }

  const newPeople = people.filter((person) => person.id != id); // Remove the person from the array that have the id we want to delete

  res.status(200).json({ success: true, data: newPeople });
});

// Listen on port 5000
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
