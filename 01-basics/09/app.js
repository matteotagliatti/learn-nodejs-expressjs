// 9. Built-in Modules: FS Module (Async)
// Async is different to Sync because if the Sync can do only a single task per time. If there is a user that is user that is doing a long task all our resources are dedicated to him, but we don't want that to happen. We don't want that Node is occupied with only this task. Thanks to Async we can do multiple tasks at one time.

const { readFile, writeFile } = require("fs");

readFile("../08/first.txt", "utf8", (err, res) => {
  if (err) return console.log(err);
  console.log(`9.1. ${res}`);

  const first = res;

  readFile("../08/second.txt", "utf8", (err, res) => {
    if (err) return console.log(err);
    console.log(`9.2. ${res}`);

    const second = res;

    writeFile(
      "./result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) return console.log(err);
        console.log(`9.3. Done with this callback madness`); // The 'result' is undefined, but has crated a file in the '09' folder.
      }
    );
  });
});
