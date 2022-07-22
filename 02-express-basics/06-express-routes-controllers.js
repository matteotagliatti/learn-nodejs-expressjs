/**
 * EXPRESS ROUTER
 * MVC (Model View Controller) Example
 */

const express = require("express");
const app = express();

const people = require("./routes/people"); // import the people route
const auth = require("./routes/auth"); // import the auth route

app.use(express.static("./content/methods"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/people", people); // use the people route
app.use("/login", auth); // use the auth route

// Listen on port 5000
app.listen(5000, () => {
  console.log("Server started on port http://localhost:5000");
});
