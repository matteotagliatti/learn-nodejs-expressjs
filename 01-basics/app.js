// 1. Var and If
const amount = 12;

if (amount < 10) {
  console.log("small number");
} else {
  console.log(`big number with amount equal to ${amount}`);
}

// 2. Globals Variables
// Variable i can access from everywhere in my project

// __dirname - path to current dir
// __filename
// require - function to use modules
// module - info about current module (file)
// process - info about env where the program is being eecuted

console.log(__dirname);
/* setInterval(() => {
  console.log("Hello");
}, 1000); */

// 3. Modules
// Split the code in modules
// CommonJS only share the minimum. It's our task to export it.

const names = require("./03/vars"); // Always start with ./ for declare a path to the module
const sayHi = require("./03/utils");

sayHi(names.john); // Acces to john var using .

// 4. Module: Alternative Syntax

const data = require("./04/vars");
console.log(data.singlePerson.name);
