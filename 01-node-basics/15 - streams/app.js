/* 
    4 different types of streams:
        1. Readable - data is read from a stream
        2. Writable - data is written to a stream
        3. Duplex - both readable and writable
        4. Transform - data is read from one stream and written to another
    
    Streams extends EventEmitter class.
*/

// Write a big file.txt with 10000 lines.
const { writeFileSync } = require("fs");
for (let i = 0; i < 10000; i++) {
  writeFileSync(`file.txt`, `hello world ${i}\n`, { flag: "a" }); // flag: "a" means append
}

// Init the stream
const { createReadStream } = require("fs");
const stream = createReadStream("file.txt", {
  highWaterMark: 90000, // highWaterMark: 90000 bytes change the size of the buffer.
  /* encoding: "utf-8", */ // encoding: "utf-8" means the data is read as string.
});

// We are reading data in chuncks
stream.on("data", (result) => {
  console.log(result);
});

// PRACTICAL EXAMPLE WITH HTTP

for (let i = 0; i < 10000; i++) {
  writeFileSync(`file2.txt`, `hello world ${i}\n`, { flag: "a" }); // flag: "a" means append
}

const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    const text = fs.readFileSync("file2.txt", "utf-8");
    res.end(text);
  })
  .listen(5000); // We can se 'file2.txt' at this url: http://localhost:5000/. But this request to the server is slow because the file is big.

// Here we can use stream to read the file faster. Because the file is sent in chunks.
http
  .createServer(function (req, res) {
    const fileStream = fs.createReadStream("file2.txt", "utf-8");
    fileStream.on("open", () => {
      fileStream.pipe(res); // pipe: send the data write stream to the read stream. So the data is sent in chunks as seen in Trasfer-Econding header.
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5001);
