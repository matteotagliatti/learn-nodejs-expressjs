import fetch from "node-fetch";
// Browser API import to Node thanks to 'node-fetch'

const promise = fetch("https://jsonplaceholder.typicode.com/todos/1");

promise
  .then((res) => res.json())
  .then((todo) => {
    throw new Error("uh oh");
    return todo; // This will not be executed
  })
  .then((todo) => console.log("😛", todo.title)) // This will not be executed
  .catch((err) => console.error("2.", err)); // If an error occurs it goes directly to this

console.log("1. Synchronous");
