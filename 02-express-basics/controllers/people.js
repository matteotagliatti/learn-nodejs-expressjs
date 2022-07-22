let { people } = require("../content/data.js");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ success: false, msg: "Provide a name" });
  }

  res.status(201).json({ success: true, person: name });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id == id);

  if (!person) {
    return res.status(404).json({ success: false, msg: "Person not found" });
  }

  const newPeople = people.map((person) => {
    if (person.id == id) {
      person.name = name;
    }

    return person;
  });

  res.status(200).json({ success: true, data: newPeople });
};

const deletePerson = (req, res) => {
  const { id } = req.params;

  const person = people.find((person) => person.id == id);

  if (!person) {
    return res.status(404).json({ success: false, msg: "Person not found" });
  }

  const newPeople = people.filter((person) => person.id != id);

  res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson,
};
