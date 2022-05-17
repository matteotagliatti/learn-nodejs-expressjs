const { readFile, writeFile } = require("fs");

console.log("1. started a first task");

// Node.js will offload this part. So the second result if we run this file is the 2nd one.
readFile("./08/first.txt", "utf8", (err, result) => {
  if (err) return console.log(err);
  console.log(`3.1. ${result}`);
  console.log("3.2. Completed first task");
});

console.log("2. Starting next task");
