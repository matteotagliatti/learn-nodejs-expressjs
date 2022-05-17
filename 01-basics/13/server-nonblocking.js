/* const { readFile, writeFile } = require("fs"); */

// 1. Simple way with arrow function
/* readFile("08/first.txt", "utf8", (err, res) => {
  if (err) return console.log(err);

  console.log(res);
}); */

// 2. Using Promise
/* const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, res) => {
      if (err) reject(err);

      resolve(res);
    });
  });
}; */

/* getText("./08/first.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err)); */

// 3. Using Async/Await
// Better approach because is more simple and readable

/* const start = async () => {
  try {
    const first = await getText("./08/first.txt");
    const second = await getText("./08/second.txt");
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};

start(); */

// 4. Using Async/Await with util.promisify
// In this way we don't have to use our custom Promise (2) and we can use the util.promisify to make it easier

/* const { readFile, writeFile } = require("fs");

const util = require("util");
// Thanks to this util we can use the readFile and writeFile functions as Promises
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise("./08/first.txt", "utf8");
    const second = await readFilePromise("./08/second.txt", "utf8");
    await writeFilePromise(
      "13/result-async.txt",
      `Here is the result : ${first}, ${second}`
    );
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};

start(); */

// 5. Using Async/Await with .promises
// An even more simple method

const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("./08/first.txt", "utf8");
    const second = await readFile("./08/second.txt", "utf8");
    await writeFile("13/result-async.txt", `Async result: ${first}, ${second}`);
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};

start();
