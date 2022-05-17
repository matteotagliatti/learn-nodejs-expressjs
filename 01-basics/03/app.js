// Split the code in modules
// CommonJS only share the minimum. It's our task to export it.

const names = require("./vars"); // Always start with ./ for declare a path to the module
const sayHi = require("./utils");

sayHi(names.john); // Acces to john var using.
