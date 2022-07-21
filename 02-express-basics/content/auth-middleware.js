const auth = (req, res, next) => {
  const { user } = req.query;

  if (user === "admin") {
    req.user = { name: "admin", id: 1 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }

  console.log("auth");
  next();
};

module.exports = auth;
