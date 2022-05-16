// 1. Var and If
const amount = 12;

if (amount < 10) {
  console.log("small number");
} else {
  console.log(`1. big number with amount equal to ${amount}`);
}

// 2. Globals Variables
// Variable i can access from everywhere in my project

// __dirname - path to current dir
// __filename
// require - function to use modules
// module - info about current module (file)
// process - info about env where the program is being eecuted

console.log(`2. ${__dirname}`);

// 3. Modules
// Split the code in modules
// CommonJS only share the minimum. It's our task to export it.

const names = require("./03/vars"); // Always start with ./ for declare a path to the module
const sayHi = require("./03/utils");

sayHi(names.john); // Acces to john var using.

// 4. Module: Alternative Syntax

const data = require("./04/vars");
console.log(`4. ${data.singlePerson.name}`);

// 5. Direct Invoke

require("./05/app"); // When you import a mobule you invoke it.

// 6. Built-in Modules: OS Module

const os = require("os"); // Without ./ because it's a built-in module
const { log } = require("console");

const userInfo = os.userInfo(); // Info about the user
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
}; // Info about the os
console.log(`6. The system uptime is ${os.uptime()}`); // Return the system uptime in seconds

// 7. Built-in Modules: Path Module

const path = require("path");

// path.sep - My system path separator

const filePath = path.join("/07", "file.txt"); // Create the filepath
console.log(`7.1. ${filePath}`);

const base = path.basename(filePath); // Return only the filename
console.log(`7.2. ${base}`);

const absolute = path.resolve(__dirname, "/07", "file.txt"); // Return the absolute path
console.log(`7.3. ${absolute}`);

// 8. Built-in Modules: FS Module (Sync)

const { readFileSync, writeFileSync } = require("fs"); // Destructuring a module with only two function

const first = readFileSync("./08/first.txt", "utf8"); // Read the file. Run the file while in '01-basics' folder. The path is relative so depends on the current folder you run the file
console.log(`8.1. ${first}`);

writeFileSync(
  "08/second.txt",
  `Hello World. Here is what the first file contains: ${first}`
  /* { flag: 'a' } */ // Default overwrite the file. Thanks to this we can append to the file
); // Create a file in the '08' folder

// 9. Built-in Modules: FS Module (Async)
// Async is different to Sync because if the Sync can do only a single task per time. If there is a user that is user that is doing a long task all our resources are dedicated to him, but we don't want that to happen. We don't want that Node is occupied with only this task. Thanks to Async we can do multiple tasks at one time.

const { readFile, writeFile } = require("fs");

readFile("./08/first.txt", "utf8", (err, res) => {
  if (err) return console.log(err);
  console.log(`9.1. ${res}`);

  const first = res;

  readFile("./08/second.txt", "utf8", (err, res) => {
    if (err) return console.log(err);
    console.log(`9.2. ${res}`);

    const second = res;

    writeFile(
      "./09/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) return console.log(err);
        console.log(`9.3. Done with this callback madness`); // The 'result' is undefined, but has crated a file in the '09' folder.
      }
    );
  });
});

// 10. In server.js file
