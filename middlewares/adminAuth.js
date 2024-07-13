const jwt = require("jsonwebtoken");
const { getUser } = require("../services/authService");

function adminAuth(req, res, next) {
  const token = req.cookies?.uid;
  if (!token) return res.json({ msg: "not logged in" });

  const user = getUser(token);

  if (user?.role != "admin") return res.json({ msg: "not authorized" });

  next();
}

module.exports = adminAuth;
