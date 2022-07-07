console.log("1");

// setTimeout is async so this will be the 3rd console.log
setTimeout(() => {
  console.log("3");
}, 0);

console.log("2");
