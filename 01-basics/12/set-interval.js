// Process stays alive unless we kill it with CTRL+C, but it is async so we see the second console log, outside of setInterval, first.
setInterval(() => {
  console.log("2. hello world");
}, 2000);
console.log(`1. I will run first`);
