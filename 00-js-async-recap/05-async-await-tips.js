// REUSE FUNCTION FROM PREVIOUS EXAMPLE
const getFruit = async (name) => {
  const fruits = {
    pineapple: "🍍",
    peach: "🍑",
    strawberry: "🍓",
  };

  return fruits[name];
};

// TIPS

const fruits = ["peach", "pineapple", "strawberry"];

/* 
    With the forEach loop every promise is running in parallel. So this can cause some problems. If we want that every iteration of our for loop await the resolve of our promise we have to use a traditional for loop.
*/
const fruitLoop = async () => {
  for (const f of fruits) {
    const emoji = await getFruit(f);
    console.log(emoji);
  }
};

fruitLoop().then(() => console.log);

/* 
    We can use the await keyword to wait for the result of the promise.
*/
const smoothie = fruits.map((v) => getFruit(v));

const fruitLoop2 = async () => {
  for await (const emoji of smoothie) {
    console.log(emoji);
  }
};

/* fruitLoop2().then(() => console.log); */

/* 
    We can also use await in our if conditionals
*/
const fruitInspection = async () => {
  if ((await getFruit("peach")) === "🍑") {
    console.log("3. looks peachy!");
  }
};

fruitInspection().then(() => console.log);
