const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`); // Log message

const codeBlocker = () => {
  // BLOCKING SYNC
  // let i = 0;
  // while(i < 1000000000) { i++;}
  // return '🐷 billion loops done';

  // BLOCKING ASYNC
  // return new Promise((resolve, reject) => {
  //     let i = 0;
  //     while(i < 1000000000) { i++;}
  //     resolve('🐷 billion loops done');
  // })

  // NON-BLOCKING ASYNC
  return Promise.resolve().then((v) => {
    let i = 0;
    while (i < 100000000) {
      i++;
    }
    return "3. Async";
  });
};

log("1. Synchronous");
codeBlocker().then(log);
log("2. Synchronous");
