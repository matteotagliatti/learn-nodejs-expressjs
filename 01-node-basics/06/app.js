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
