const jwt = require("jsonwebtoken");
const { getUser } = require("../services/authService");

function loginValidator(req, res, next) {
  const token = req.cookies?.uid;

  if (!token) return res.json({ msg: "not logged in" });

  const user = getUser(token);

  if (!user) return res.json({ msg: "not logged in" });

  next();
}

module.exports = loginValidator;
