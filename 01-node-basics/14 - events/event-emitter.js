// Event Driver Programming. User Heavily in Node.js
// We listen to specific event and when that event is triggered, we execute a function.
const EventEmitter = require("events");
const customEmitter = new EventEmitter(); // So we have the object of our class EventEmitter

customEmitter.on("response", (name, age) => {
  console.log(`Event triggered with name ${name} and age ${age}`);
});

// We can have as many function we want
customEmitter.on("response", () => {
  console.log("Second event triggered");
});

// The order matter. First we will use .on() and only then we will use .emit()
customEmitter.emit("response", "john", 32); // Same as customEmitter.on(); 'john' and 32 are the parameters.
