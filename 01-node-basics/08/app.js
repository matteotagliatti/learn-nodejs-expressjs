const { readFileSync, writeFileSync } = require("fs"); // Destructuring a module with only two function

const first = readFileSync("./first.txt", "utf8"); // Read the file. Run the file while in '01-basics' folder. The path is relative so depends on the current folder you run the file
console.log(`8.1. ${first}`);

writeFileSync(
  "second.txt",
  `Hello World. Here is what the first file contains: ${first}`
  /* { flag: 'a' } */ // Default overwrite the file. Thanks to this we can append to the file
); // Create a file in the '08' folder
