const path = require("path");

// path.sep - My system path separator

const filePath = path.join("/07", "file.txt"); // Create the filepath
console.log(`7.1. ${filePath}`);

const base = path.basename(filePath); // Return only the filename
console.log(`7.2. ${base}`);

const absolute = path.resolve(__dirname, "/07", "file.txt"); // Return the absolute path
console.log(`7.3. ${absolute}`);
