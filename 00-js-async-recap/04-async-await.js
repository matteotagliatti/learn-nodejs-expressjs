// with Async keyword
const getFruit = async (name) => {
  const fruits = {
    pineapple: "🍍",
    peach: "1. 🍑",
    strawberry: "🍓",
  };

  return fruits[name];
};

// alternative way w/o Async keyword
const getFruitNoKeyword = (name) => {
  const fruits = {
    pineapple: "🍍",
    peach: "🍑",
    strawberry: "2. 🍓",
  };

  return Promise.resolve(fruits[name]);
};

getFruit("peach").then(console.log); // 1.
getFruitNoKeyword("strawberry").then(console.log); // 2.

// Async + Await
const makeSmoothie = async () => {
  const a = await getFruit("pineapple");
  const b = await getFruit("strawberry");
  return ["3. ", a, b];
};

makeSmoothie().then(console.log); // 3.

// Alternative way for the function above but with Promises. A lot more code and a lot more complexity then the first example.
const makeSmoothie2 = () => {
  let a;
  return getFruit("pineapple")
    .then((v) => {
      a = v;
      return getFruit("strawberry");
    })
    .then((v) => [a, v]);
};

/* 
    NOTE
    in makeSmoothie() there is the typical error novice do with Aync/Await: failing to run the code concurrently. We could get both 'pineapple' and 'strawberry' in the same time. While in this case we are getting the result of the first and then the second one.
*/

// Aync/Await w/ concurrency
const makeSmoothieFaster = async () => {
  const a = getFruit("pineapple");
  const b = getFruit("strawberry");

  const smoothie = await Promise.all(["4.", a, b]); // This tell both the promises in our array to run concurrently and have the result in the same time.
  return smoothie;
};

makeSmoothieFaster().then(console.log); // 4.

// Async/Await error handling with try/catch
const badSmoothie = async () => {
  try {
    const a = getFruit("pineapple");
    const b = getFruit("strawberry");
    const smoothie = await Promise.all([a, b]);

    throw "broken!";

    return smoothie; // This code will not be executed
  } catch (err) {
    /* console.log(err); */
    return `5. 💩 ${err}`;
  }
};

badSmoothie().then(console.log);
