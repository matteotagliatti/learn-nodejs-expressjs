// Our Middleware. We have to pass req, res and next
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next(); // This is the callback function. It tells Express to move on to the next middleware. In alternative, we can use res.send() or res.end(), bit in this case the res.send in out get method will be ignored.
};

module.exports = logger;
