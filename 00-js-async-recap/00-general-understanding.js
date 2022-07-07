// Using Promise constructor function
// resolve and reject are both function that change the state of the promise.
const promise = new Promise((resolve, reject) => {
  resolve("Yes"); // Change the state from 'pending' to 'fullfilled'
  reject("No"); // Change the state from 'pending' to 'rejected'
});

// Success and failure callbacks
const onFullfillment = (result) => {
  console.log(result);
};
const onRejection = (error) => {
  console.log(error);
};

// Add callbacks to the promise
promise.then(onFullfillment);
promise.catch(onRejection);
