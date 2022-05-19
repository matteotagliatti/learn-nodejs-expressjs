// 1.
console.log("1. Sync");

// 2.
setTimeout(() => {
  console.log("4. Async");
}, 0);

// 3.
Promise.resolve().then((_) => console.log("3. Async"));

// 4.
console.log("2. Sync");

/* 
    The result are in the order specificated in the log because the first 2 are Sync and the last 2 are Async. Promise is done before setTimeout because it is a microtask that are executed before the macrotask (like setTimeout).
*/
