const jwt = require("jsonwebtoken");

const conf_key = "user@619";

const setUser = (payload) => {
  return jwt.sign(payload, conf_key);
};

const getUser = (token) => {
  if (!token) return;
  try {
    const payload = jwt.verify(token, conf_key);
    console.log(payload);
    return jwt.verify(token, conf_key);
  } catch (error) {
    return null;
  }
};

module.exports = { setUser, getUser };
